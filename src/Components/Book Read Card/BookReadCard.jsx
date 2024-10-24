import React, { useEffect, useState } from 'react';
import { getDatafromLocalstorage } from '../../Utility/LocalStorage';
import { useLoaderData } from 'react-router-dom';

export default function BookReadCard() {
    const [selectedBook, setSelectedBook] = useState([]);
    const [Read, setRead] = useState([]);

    // Load book data
    const BookData = useLoaderData();
    console.log('Book Data:', BookData);

    // Fetch selected books only once when component mounts
    useEffect(() => {
        const booksFromLocalStorage = getDatafromLocalstorage();
        console.log('Selected Books from localStorage:', booksFromLocalStorage);
        setSelectedBook(booksFromLocalStorage);
    }, []); // Empty dependency array ensures this runs only once

    // Filter books when selectedBook or BookData changes
    useEffect(() => {
        if (selectedBook.length > 0 && BookData.length > 0) {
            const Readbook = [];

            // Assuming selectedBook is an array of book IDs
            for (const idObj of selectedBook) {
                const Data = BookData.find(book => book.bookId === idObj);
                if (Data) {
                    Readbook.push(Data);
                }
            }

            setRead(Readbook);
        }
    }, [selectedBook, BookData]); // Runs when selectedBook or BookData changes

    console.log('Read Books:', Read);

    return (
        <div>
            {Read.length > 0 ? (
                Read.map((book, index) => (
                    <div key={index} className="p-4 border rounded shadow">
                        <h2 className="text-lg font-bold">{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Book ID: {book.bookId}</p>
                    </div>
                ))
            ) : (
                <p>No books selected to display.</p>
            )}
        </div>
    );
}
