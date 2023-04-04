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
        <div>
            <h1>Hollow from Books</h1>
        </div>
    );
};

export default Books;