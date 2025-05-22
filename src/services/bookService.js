import api from '../api';

export const getBooks = async () => {
    try {
        const response = await api.get('/book/all');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des livres :", error);
        return [];
    }
};
