import React, { useContext } from 'react'
import { bookDataContext } from '../Home/Home';
import Books from '../Books/Books';

export default function Bookfeatures() {
    const bookdata = useContext(bookDataContext)
    // console.log(bookdata);
    
  return (
    <div>
      <h1 className='bg-white text-black text-center p-20 font-bold text-5xl'>Book features {bookdata.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 dark:bg-white">
    {bookdata.map((item, index) => (
        <Books key={index} books={item} />
    ))}
</div>

    </div>
  )
}
