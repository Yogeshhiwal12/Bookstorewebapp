import React, { useState } from 'react'
import axios from 'axios';
const AddBooks = () => {
  const [Data,setData]=useState({bookname:"",description:"",author:"",image:"",price:""})
  const change=(e)=>{
  
    const {name, value}=e.target;
    setData({...Data,[name]:value});
  };
  const submit= async(e)=>{
    e.preventDefault();
    await axios.post("https://bookstorebackendweb.onrender.com/api/v1/add",Data).then((res)=>alert(res.data.message));
    setData({bookname:"",description:"",author:"",image:"",price:""});
  }
  console.log(Data);
  return (
    <div className='bg-dark d-flex justify-content-center align-items-center ' style={{height:"91.5vh ", color:'white'}}>
        <div className='container p-4'>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Book Name</label>
    <input type="text"  name="bookname" onChange={change}  value={Data.bookname} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Book Name'/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text"  name="description"  onChange={change} value={Data.description} class="form-control" id="exampleInputPassword1" placeholder='Enter Description'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Author</label>
    <input type="text"  name="author" onChange={change}  value={Data.author} class="form-control" id="exampleInputPassword1" placeholder='Enter Author Name'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image</label>
    <input type="text"  name="image" onChange={change} value={Data.image} class="form-control" id="exampleInputPassword1" placeholder='Enter Imgae URL'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="number" name="price" onChange={change}  value={Data.price} class="form-control" id="exampleInputPassword1" placeholder='Enter Price'/>
  </div>
  
  
  <button type="submit" class="btn btn-primary" onClick={submit}> Submit</button>
</form>

        </div>
  </div>
  )
}

export default AddBooks
