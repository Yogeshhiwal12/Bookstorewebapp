
import axios from 'axios';
import { Link } from 'react-router-dom';

const BooksSection = ({ data, fetchData }) => {
 

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://bookstorebackendweb.onrender.com/api/v1/delete/${id}`);
      // Refresh the book list after successful deletion
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='d-flex justify-content-around align-items-center flex-wrap'>
        {data &&
          data.map((item, index) => (
            <div
              className='m-3'
              style={{
                width: '200px',
                height: '350px',
                border: '1px solid white',
                borderRadius: '20px',
              }}
              key={index}
            >
              <div>
                <img
                  style={{
                    width: '200px',
                    height: '210px',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                  }}
                  className='image-fluid'
                  src={item.image}
                  alt='/'
                />
              </div>

              <h6 className=' px-2 my-1' style={{ fontSize: '15px' }}>
                {item.bookname.slice(0, 20)}...
              </h6>
              <b style={{ fontSize: '30px', color: 'red' }} className='m-0 px-2'>
                Rs.{item.price}
              </b>
              <div className='d-flex justify-content-around align-item-center my-2'>
                <Link to={`/update/${item._id}`} className='btn btn-primary'>
                  UPDATE
                </Link>
                <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>
                  DELETE
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BooksSection;
