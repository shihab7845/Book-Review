import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Bookwishlistcard_1({ book }) {
    const { bookId, author, bookName, image, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;
  
    return (
        <div className="max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden m-4 flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-1/3">
                <img src={image} alt={bookName} className="object-cover w-full h-48 lg:h-64" />
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{bookName}</h2>
                    <p className="text-gray-600 dark:text-gray-400">by {author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Published: {yearOfPublishing}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Publisher: {publisher}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Total Pages: {totalPages}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Category: {category}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Rating: {rating} / 5</p>
                </div>

                {/* Tags Section */}
                <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tags:</p>
                    <ul className="flex flex-wrap mt-1">
                        {tags.map((tag, index) => (
                            <li key={index} className="bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded mr-2 mb-2">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* View Details Link */}
                <div className="mt-4">
                    <Link to={`/bookdetails/${bookId}`} className="text-blue-500 hover:underline">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
