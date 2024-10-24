import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDatafromLocalstorage } from '../../Utility/LocalStorage';
import Bookwishlistcard_1 from './Bookwishlistcard_1';

export default function Bookwishlistcard() {
  const selectedWish = getDatafromLocalstorage("book-wish") || []; 
  const selectedID = getDatafromLocalstorage("book-read") || []; 
  const BookData = useLoaderData(); 

  const [filterBook, setFilterbook] = useState([]); 
  const [selectedBooks, setSelectedBooks] = useState([]); 

  useEffect(() => {
    if (selectedWish.length > 0 && selectedID.length > 0 && BookData.length > 0) {
      const filterBookWish = selectedWish.filter(id => !selectedID.includes(id));
      setFilterbook(filterBookWish); 
    }
  }, []); // Added dependencies

  useEffect(() => {
    if (filterBook.length > 0 && BookData.length > 0) {
      const data = filterBook.map(id => BookData.find(book => book.bookId === id)).filter(Boolean);
      setSelectedBooks(data); 
    }
  }, []); // Added dependencies

  console.log('Selected Books:', selectedBooks); 
  console.log('Filter book:', filterBook); 
  console.log('Selected ID:', selectedID); 
  console.log('Selected Wish:', selectedWish); 

  return (
    <div>
      {selectedBooks.length > 0 ? (
        selectedBooks.map((book, index) => (
          <Bookwishlistcard_1 key={index} book={book}></Bookwishlistcard_1>
        ))
      ) : (
        <p>No books in wishlist.</p>
      )}
    </div>
  );
}
