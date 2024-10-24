import React, { useEffect, useState } from 'react';
import { getDatafromLocalstorage, saveDataToLocalstorage } from '../../Utility/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Bookdetailscard({ bookdetailscard }) {
    const { bookId, bookName, author, category, review, image, totalPages, rating, tags, publisher, yearOfPublishing } = bookdetailscard;

    const [disable, setDisable] = useState(false);

    useEffect(()=>{
        const savedBooks = getDatafromLocalstorage("book-read");
    const isBookAlreadyRead = savedBooks.includes(bookId);

    if (isBookAlreadyRead) {
        setDisable(true);
    }
    },[])

    const handleRead = () => {

        saveDataToLocalstorage(bookId, "book-read");
        setDisable(true);
        toast("you added this book in read book list");
    }

    const handlewish = () => {
        saveDataToLocalstorage(bookId, "book-wish");
        toast("you added this book in Wish book list");
    }

    return (
        <div className="flex flex-col lg:flex-row justify-around items-center p-4 lg:p-8 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg space-y-6 lg:space-y-0 lg:space-x-2">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
                <img
                    src={image}
                    alt={bookName}
                    className="object-cover rounded-lg shadow-lg max-w-full h-auto lg:max-w-xs lg:h-96 dark:bg-gray-500"
                />
            </div>

            <div className="w-full lg:w-1/2 p-4 lg:p-6 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 space-y-4">
                <h3 className="text-3xl font-semibold tracking-tight lg:text-4xl group-hover:underline group-focus:underline">
                    {bookName}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Published: {yearOfPublishing}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                    Category: {category}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                    Author: {author}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                    Publisher: {publisher}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                    Pages: {totalPages}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                    Rating: {rating} / 5
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                    {review}
                </p>

                <div className='flex items-center justify-start'>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tags:</p>
                    <ul className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <li key={index} className="text-blue-600 dark:text-blue-100 px-2 py-1">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <button
                        onClick={handleRead}
                        className={`px-4 py-2 text-white rounded-md transition focus:outline-none focus:ring-2 focus:ring-opacity-75 
        ${disable ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-blue-700 focus:ring-blue-400'}`}
                        disabled={disable}
                    >
                        Read
                    </button>

                    <button
                        onClick={handlewish}
                        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition ml-4"
                    >
                        Wishlist
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
