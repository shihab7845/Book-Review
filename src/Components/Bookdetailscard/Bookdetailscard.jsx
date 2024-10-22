import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Bookdetailscard({bookdetailscard}) {

    const { bookName, author, category, review, image, totalPages, rating, tags, publisher, yearOfPublishing } = bookdetailscard;

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                {/* Main book detail card */}
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src={image} alt={bookName} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{bookName}</h3>
                        <span className="text-xs dark:text-gray-600">Published: {yearOfPublishing}</span>
                        <p className="text-sm">Category: {category}</p>
                        <p className="text-sm">Author: {author}</p>
                        <p className="text-sm">Publisher: {publisher}</p>
                        <p className="text-sm">Pages: {totalPages}</p>
                        <p className="text-sm">Rating: {rating} / 5</p>
                        <p className="text-sm">{review}</p>
                        <div className="mt-2">
                            <p className="text-sm dark:text-gray-600">Tags:</p>
                            <ul className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <li key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* More book recommendations (if needed, similar to small cards) */}
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                   
                   
                </div>
            </div>
        </section>
    );
}
