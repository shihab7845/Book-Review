import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function ListedBook() {
  const [isClick, setIsClick] = useState(true);
  
  return (
    <>
      <div className="dark:m-10 flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-200">
        
        {/* Read NavLink */}
        <NavLink 
          to="bookreadcard" 
          className={({ isActive }) => 
            `flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-colors duration-200
            ${isActive ? 'border-b-0 rounded-t-lg bg-blue-500 text-white dark:bg-blue-700' : 'border-b dark:border-gray-600 text-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700'}`
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read</span>
        </NavLink>
        
        {/* WishList NavLink */}
        <NavLink 
          to="bookwishlist" 
          className={({ isActive }) => 
            `flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-colors duration-200
            ${isActive ? 'border-b-0 rounded-t-lg bg-blue-500 text-white dark:bg-blue-700' : 'border-b dark:border-gray-600 text-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700'}`
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>WishList</span>
        </NavLink>

      </div>

      {/* Outlet for rendering nested routes */}
      <Outlet />
    </>
  );
}
