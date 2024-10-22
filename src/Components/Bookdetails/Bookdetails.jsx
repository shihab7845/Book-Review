import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Bookdetailscard from '../Bookdetailscard/Bookdetailscard';

export default function Bookdetails() {
    const bookdata = useLoaderData();
    const { id } = useParams(); // Destructure id from useParams
    const [data, setData] = useState(null); // Initialize as null

    // Find the specific book based on the id
    const specificBook = bookdata.find(book => book.bookId === parseInt(id));

    useEffect(() => {
        setData(specificBook); // Set data to the found specific book
    }, [bookdata, id]); // Re-run effect if bookdata or id changes

    console.log(data);      // Log the book data
    console.log(bookdata);  // Log the entire bookdata
    console.log(id);        // Log the id from useParams
    console.log(typeof id); // Log the type of id (string/number)

    // If no book is found, display a message
    if (!specificBook) {
        return <p className="text-center text-red-600">Book not found.</p>;
    }

    return (
        <div>
            {/* Render the Bookdetailscard if data exists */}
            {data && <Bookdetailscard bookdetailscard={data} />}
        </div>
    );
}
