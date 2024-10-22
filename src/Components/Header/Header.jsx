import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <Link to="/" className="text-2xl font-bold text-black hover:text-blue-800 ">
                    Book Vibe
                </Link>

                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center px-4 dark:text-violet-600 dark:border-violet-600 ${isActive ? "underline border p-2 rounded-sm" : "no-underline"}`
                            }
                        >
                            Home
                        </NavLink>

                    </li>
                    <li className="flex">
                        <NavLink
                            to="/listedbook"
                            className={({ isActive }) =>
                                `flex items-center px-4 dark:text-violet-600 dark:border-violet-600 ${isActive ? "underline border p-2 rounded-sm" : "no-underline"}`
                            }
                        >
                            Listed Books
                        </NavLink>

                    </li>
                    <li className="flex">
                        <NavLink
                            to="/pagetoread"
                            className={({ isActive }) =>
                                `flex items-center px-4 dark:text-violet-600 dark:border-violet-600 ${isActive ? "underline border p-2 rounded-sm" : "no-underline"}`
                            }
                        >
                            Page to Read
                        </NavLink>

                    </li>

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
