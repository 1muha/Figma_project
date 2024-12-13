import React from "react";
import "./Tourpack.css"; 
import rome from "../../assets/rome.png"
import lahore from "../../assets/lahore.png"
import singapur from "../../assets/singapur.png"


const TourPack = () => {
  return (
    <section className="tour-packages">
      <div className="container">
        <h1 style={{color: "#ee1c45", fontWeight: 100, fontFamily: "Clicker Script, cursive", marginBottom: 10, fontSize: 35, fontStyle: "italic"}}>Popular</h1>
        <h1 style={{fontWeight: 100, fontSize: 40, marginBottom: 20}}>TOUR PACKAGES</h1>
        <p style={{width: 700, marginLeft: 220}} className="section-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <div className="cards">
          {/* Rome Card */}
          <div className="card">
            <img
              src= {rome} // Replace with actual image URL
              alt="Rome, Italy"
              className="card-image"
            />
            <div className="card-body">
              <h3 className="card-title">ROME, ITALY</h3>
              <p className="card-duration">10 days trip</p>
              <p className="card-price">$5.24K</p>
            </div>
          </div>
          {/* Lahore Card */}
          <div className="card">
            <img
              src={lahore} // Replace with actual image URL
              alt="Lahore, Pakistan"
              className="card-image"
            />
            <div className="card-body">
              <h3 className="card-title">LAHORE, PAKISTAN</h3>
              <p className="card-duration">6 days trip</p>
              <p className="card-price">$3.25K</p>
            </div>
          </div>
          {/* Singapore Card */}
          <div className="card">
            <img
              src={singapur} // Replace with actual image URL
              alt="Singapore"
              className="card-image"
            />
            <div className="card-body">
              <h3 className="card-title">SINGAPORE</h3>
              <p className="card-duration">6 days trip</p>
              <p className="card-price">$7.00K</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPack;