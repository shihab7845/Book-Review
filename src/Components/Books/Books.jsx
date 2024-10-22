import React from 'react';
import { Link } from 'react-router-dom';
import Bookdetails from '../Bookdetails/Bookdetails';


export default function Books({ books }) {
    const { bookId,image, author, bookName, category, rating, tags } = books;

    return (
        <Link to={`/bookdetails/${bookId}`} className="border rounded-lg p-4 shadow-md max-w-sm">
            {/* Perfectly placed image */}
            <img src={image} alt={bookName} className="w-48 h-60 object-cover rounded-lg mb-4 mx-auto" />
            
            <h2 className="text-xl font-semibold mb-2">{bookName}</h2>
            <p className="text-gray-600 mb-1">Author: <span className="font-medium">{author}</span></p>
            <p className="text-gray-600 mb-1">Category: <span className="font-medium">{category}</span></p>
            <p className="text-gray-600 mb-1">Rating: <span className="font-medium">{rating} / 5</span></p>
            <div className="mt-2">
                <p className="text-gray-600 mb-1">Tags:</p>
                <ul className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <li key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
            
        </Link>
    );
}
