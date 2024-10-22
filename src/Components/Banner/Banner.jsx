import React from 'react'
import { Link } from 'react-router-dom'
export default function Banner() {
  return (
    <section className="dark:bg-gray-300 rounded-sm dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-14 lg:flex-row lg:justify-around">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Books to freshen up your bookshelf
			</h1>
			
			<div className="flex flex-col space-y-7  mt-5 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
                <Link className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50" to={"/listedbook"} >View The List</Link>
                
				
			</div>
		</div>
        {/* images  */}
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/images/pngwing.png"  alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-gray-300" />
		</div>
	</div>
</section>
  )
}
