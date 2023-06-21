import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home-Page bg-dark text-white conatiner-fluid d-flex justify-content-center align-items-center flex-column' >
      <div className='row container '>
        <div 
        className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
        style={{height:"91.vh"}}>
          <h2 style={{fontSize:"80px"}}>Book Store For You</h2>
          <p  className="mb-0"style={{color:'silver'}}>CheckOut The Books From Here.</p>
          <Link to='./books'> <button className='btn btn-secondary my-3' >View Books</button></Link>
        </div>
        <div className='col-lg-6 d-flex justify-content-center align-items-end flex-column' style={{height:"91.5vh"}}>
        <img src="https://images.unsplash.com/photo-1550853418-bb4348ff6a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="image" />
        </div>
      </div>
      
    </div>
  )
}

export default Home
