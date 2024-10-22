import React, { createContext } from 'react'
import Banner from '../Banner/Banner'
import Bookfeatures from '../Books Features/Bookfeatures'
import { useLoaderData } from 'react-router-dom'
import Bookdetails from '../Bookdetails/Bookdetails'

export const bookDataContext = createContext() // Correct context name

export default function Home() {

    const bookData = useLoaderData()
    console.log(bookData);

    return (
        <div>
            {/* Use the correct context name here */}
            <bookDataContext.Provider value={bookData}>
                <Banner />
               
                <Bookfeatures />
            </bookDataContext.Provider>
        </div>
    )
}
