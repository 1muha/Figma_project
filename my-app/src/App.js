import React, { useState } from 'react';
import "./Navbarr.css";
import "./App.css";
import Destinations from "./main/first/Destinations";
import Activitiess from "./main/first/Activitiess";
import TourPack from "./main/second/Tourpack";
import Sharepic from "./main/second/Sharepic";
import Testimionals from "./main/third/Testimionals";
import Newss from "./main/third/Newss";
import Footer from "./main/third/Footer";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="header">
        <h1 className="logo">Listee Travel</h1>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Destinations</a></li>
        <li><a href="#contact">Tours</a></li>
        <li><a href="#contact">Shop</a></li>
        <li><a href="#contact">Blogs</a></li>
        <a className="lgn">Log in</a>
        <button className='sgnup'>Sign Up</button>
      </ul>
    </nav>
        <div className="letsgo">
          <h1 className="expl">Explore and Travel</h1>
          <h1 className="leta">Let's Go Now</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quod non sunt rem ipsam assumenda ratione dolorum fugit itaque
            necessitatibus
          </p>
          <div className="location-date-container">
      <div className="location">
        <span className="icon">📍</span>
        <span className="text">Thailand       |</span>
      </div>
      <div className="date">
        <span className="calendar-icon">📅</span>
        <span className="text">13 May, 2023</span>
      </div>
      <button className="search-button">
      <svg className="srch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      </button>
    </div>
        </div>
      </div>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Navbar />
      <Destinations/>
      <Activitiess/>
      <TourPack/>
      <Sharepic/>
      <Testimionals/>
      <Newss/>
      <Footer/>
    </div>
  );
}

export default App;
