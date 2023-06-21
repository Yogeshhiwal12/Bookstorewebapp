import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    bookname: '',
    description: '',
    author: '',
    image: '',
    price: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://bookstorebackendweb.onrender.com/api/v1/getb/${id}`);
        setBookData(response.data.book);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://bookstorebackendweb.onrender.com/api/v1/updateB/${id}`, bookData);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 bg-dark text-white p-5" >
      <h2 className="mb-4">Update Book</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Book Name:</label>
          <input
            type="text"
            className="form-control"
            name="bookname"
            value={bookData.bookname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={bookData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author:</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL:</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={bookData.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={bookData.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateBook;
