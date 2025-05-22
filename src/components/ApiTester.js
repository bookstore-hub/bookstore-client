import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

// Définition des endpoints avec descriptions et placeholders
const endpoints = {
    GET: [
        { path: "/book", description: "Récupérer un livre", queryPlaceholder: "ex. bookCode=AZ93H" },
        { path: "/book/all", description: "Récupérer la liste des livres", queryPlaceholder: "Aucun paramètre requis" },
        { path: "/book/search", description: "Faire une recherche sur un livre", queryPlaceholder: "ex. title=Ulysse et/ou author=James Joyce" }
    ],
    POST: [
        { path: "/book", description: "Ajouter un nouveau livre", bodyPlaceholder: 'ex. {"title": "Ulysse", "synopsis": "Une journée, en 1904, dans la vie des quelques habitants de Dublin, qui vaquent à leurs occupations.", dateOfPublication": "1922-05-27", "authors": ["James Joyce"]}' },
        { path: "/author", description: "Ajouter un nouvel auteur", queryPlaceholder: "ex. authorName=John Doe" }
    ],
    DELETE: [
        { path: "/book", description: "Supprimer un livre", queryPlaceholder: "ex. bookCode=AZ93H" },
        { path: "/author", description: "Supprimer un auteur", queryPlaceholder: "ex. authorCode=D462L" }
    ],
    PUT: [
        { path: "/book", description: "Mettre à jour un livre", queryPlaceholder: "ex. bookCode=AZ93H", bodyPlaceholder: 'ex. {"title": "Ulysse 2 le retour (titre modifié) ", "synopsis": "Une journée, en 1904, dans la vie des quelques habitants de Dublin, qui vaquent à leurs occupations.", dateOfPublication": "1922-05-27", "authors": ["James Joyce"]}' },
        { path: "/author", description: "Modifier un auteur", queryPlaceholder: "ex. authorCode=D462L&authorName=Nom mis à jour"},
        { path: "/author/addToBook", description: "Ajouter un auteur à un livre", queryPlaceholder: "ex. authorCode=D462L&bookCode=AZ93H" },
        { path: "/author/removeFromBook", description: "Retirer un auteur d'un livre", queryPlaceholder: "ex. authorCode=D462L&bookCode=AZ93H" }
    ]
};

const ApiTester = () => {
    const [method, setMethod] = useState('GET');
    const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints.GET[0]);
    const [queryParam, setQueryParam] = useState('');
    const [bodyData, setBodyData] = useState('{}');
    const [response, setResponse] = useState(null);

    const handleTest = async () => {
        try {
            let res;
            const url = `${API_BASE_URL}${selectedEndpoint.path}${(method !== 'POST' && queryParam) ? `?${queryParam}` : ''}`;

            if (method === 'GET' || method === 'DELETE') {
                res = await axios({ method, url });
            } else {
                res = await axios({ method, url, data: JSON.parse(bodyData) });
            }

            setResponse(res.data);
        } catch (error) {
            // Vérifie si le serveur a renvoyé un message d'erreur précis
            if (error.response) {
                setResponse(error.response.data?.message ?? JSON.stringify(error.response.data, null, 2));
            } else {
                setResponse("Erreur réseau ou serveur indisponible");
            }
        }
    };


    return (
        <div>
            <h2>Tester un endpoint API Bookstore</h2>

            <br/>
            <br/>

            <label>Méthode :</label>
            <select 
                onChange={(e) => {
                    setMethod(e.target.value);
                    setSelectedEndpoint(endpoints[e.target.value][0]);
                }} 
                value={method}
                style={{ width: "300px", height: "40px", fontSize: "16px" }} 
            >
                {Object.keys(endpoints).map(m => <option key={m} value={m}>{m}</option>)}
            </select>

            <br/>
            <br/>

            <label>Endpoint :</label>
            <select 
                onChange={(e) => setSelectedEndpoint(endpoints[method].find(ep => ep.path === e.target.value))} 
                value={selectedEndpoint.path}
                style={{ width: "400px", height: "40px", fontSize: "16px" }} 
            >
                {endpoints[method].map(ep => <option key={ep.path} value={ep.path}>{ep.path}</option>)}
            </select>

            <p><strong>Description :</strong> {selectedEndpoint.description}</p>

            <br/>

            {(method !== 'POST' || selectedEndpoint.path === "/author") && ( 
                <div>
                    <p>Query param(s) :</p>
                    <p>{selectedEndpoint.queryPlaceholder}</p> {}
                    <input 
                        type="text" 
                        placeholder={"Entrez vos paramètres ici..."}
                        value={queryParam} 
                        onChange={(e) => setQueryParam(e.target.value)}
                        style={{ width: "400px", height: "40px", fontSize: "16px" }}
                    />
                </div>
            )}

            <br/>
            <br/>

            {((method === 'POST' || method === 'PUT') && selectedEndpoint.path === "/book") && (
                <div>
                    <p>Body :</p>
                    <div>
                        <p>{selectedEndpoint.bodyPlaceholder}</p> {}
                        <textarea 
                            value={bodyData}
                            onChange={(e) => setBodyData(e.target.value)}
                            style={{ width: "500px", height: "150px", fontSize: "16px" }}
                        />
                    </div>
                </div>
            )}

            <button onClick={handleTest}>Envoyer</button>
            
            {response && (
                <div>
                    <h3>Réponse API :</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ApiTester;
