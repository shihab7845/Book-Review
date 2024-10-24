import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './Components/Header/Header.jsx';
import Root from './Root.jsx';
import Home from './Components/Home/Home.jsx';
import PageToRead from './Components/Page to Read/PageToRead.jsx';
import ListedBook from './Components/Listed Books/ListedBook.jsx';
import Bookdetails from './Components/Bookdetails/Bookdetails.jsx';
import BookReadCard from './Components/Book Read Card/BookReadCard.jsx';
import Bookwishlistcard from './Components/Book wishList card/Bookwishlistcard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("/Data.json")
      },
      {
        path:"/pagetoread",
        element:<PageToRead></PageToRead>
      },
      {
        path: "/listedbook",
        element: <ListedBook />,  
        children: [
          {
            path: "bookreadcard",  
            element: <BookReadCard />,
            loader: () => fetch('/Data.json'),  
          },
          {
            path:"bookwishlist",
            element:<Bookwishlistcard></Bookwishlistcard>,
            loader: () => fetch('/Data.json'),  
          }
        ],
      },
      
      {
        path:"/bookdetails/:id",
        element:<Bookdetails></Bookdetails>,
        loader:()=>fetch("../Data.json")
      },
      
    
      
    ]
  },
  
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
