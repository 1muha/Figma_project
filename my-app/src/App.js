import React from "react";
import "./App.css";
import Destinations from "./main/first/Destinations";
import Activitiess from "./main/first/Activitiess";
import TourPack from "./main/second/Tourpack";
import Sharepic from "./main/second/Sharepic";
import Testimionals from "./main/third/Testimionals";
import Newss from "./main/third/Newss";
import Footer from "./main/third/Footer";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Listee Travel</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Destinations</li>
        <li>Tours</li>
        <li>Shop</li>
        <li>Blogs</li>
      </ul>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Explore and Travel</h1>
        <h2>Let's Go Now</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
        <div className="search-box">
          <div className="location">
            <label>Location</label>
            <select>
              <option>Thailand</option>
              <option>France</option>
              <option>Italy</option>
            </select>
          </div>
          <div className="date">
            <label>Date</label>
            <input type="date" defaultValue="2023-05-13" />
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
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



// destinations



