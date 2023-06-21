import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import Home from './pages/Home';
import UpdateBook from './pages/UpdateBook';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />} />
        <Route path="/update/:id" element={<UpdateBook />} />
      </Routes>
    </Router>
  );
}

export default App;
