import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDatafromLocalstorage } from '../../Utility/LocalStorage';

export default function Bookwishlistcard() {
  const selectedID = getDatafromLocalstorage(); 
  const BookData = useLoaderData(); 
  
  const [selectedBooks, setSelectedBooks] = useState([]); 

  useEffect(() => {
    
    if (selectedID.length > 0 && BookData.length > 0) {
      const data = [];

      for (const id of selectedID) {
        const selectedBook = BookData.find(book => book.bookId === id);
        if (selectedBook) {
          data.push(selectedBook); 
        }
      }
      
      setSelectedBooks(data); 
    }
  }, []); 

  console.log('Selected Books:', selectedBooks); 

  return (
    <div>
      {selectedBooks.length > 0 ? (
        selectedBooks.map((book) => (
          <div key={book.bookId} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            {/* Add more details about the book as needed */}
          </div>
        ))
      ) : (
        <p>No books in wishlist.</p>
      )}
    </div>
  );
}
