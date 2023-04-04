import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {

    // useEffect(()=>{
    //     fetch('https://api.itbook.store/1.0/new')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])

    // const booksData = useLoaderData()
    const {books} = useLoaderData()
    console.log(books)


    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm: grid-cols-2">
                {books.map(book=>
                <div className='overflow-hidden'>
                    <img src={book.image} alt="book cover" className='object-cover' />
                </div>
                )}
            </div>
        </div>
    );
};

export default Books;