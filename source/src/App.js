// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route } from 'react-router-dom'; // Sử dụng Routes thay vì Switch
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import ChatButton from './components/ChatButton';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import './App.css';
import CarouselPage1 from './components/CarouselPage1';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    
    <div className="main-content">
        <Navbar />
        <Routes>        
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<div><About/></div>}/>
          <Route path="/service" element={<div><Service/></div>}/>
          <Route path="/contact" element={<div><ContactUs/></div>}/> 
          
          <Route path="/lien-he" element={<Home/>}/>  
          
           
        </Routes>
        <ChatButton/>
        <ScrollToTop/>
      </div>

  );
};

export default App;
