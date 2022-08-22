import React from 'react'
import Navbar from './layouts/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- pages

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Porfolio from './pages/Porfolio';
import Contact from './pages/Contact';

import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/portfolio' element={<Porfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App