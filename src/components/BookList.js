import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBooks();
            setBooks(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Liste des livres</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} - {book.authors.map(author => author.authorName).join(", ")}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
