import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import BooksSection from './BooksSection';


const Books = () => {
   const [Data,setDate]=useState();
    useEffect(()=>{
        const fetch=async()=>{
            await axios.get("https://bookstorebackendweb.onrender.com/api/v1/getb")
            .then((res)=>setDate(res.data.books));
        };
        fetch();
    });
  return (
    <div className='bg-dark ' style={{height:"91.5vh ", color:'white'}}>
      <div className=" container d-flex justify-content-center align-items-center py-3">
        <h4 className='text-white'>Books Section</h4>
      </div>
      {Data ?(
        <BooksSection data={Data} />
      ):(
        <div className="text-white"> Loding...</div>
      )}
    </div>
  )
}

export default Books
