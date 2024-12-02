import React from "react";
import "./Destinations.css"
import malaysia from '../../assets/malaysia.jpg';
import dubai from '../../assets/dubaii.webp';
import greece from '../../assets/athens.jpg';
import singapore from '../../assets/singapore.webp';


function DestinationGrid() {
  const destinations = [
    { id: 1, name: "Malaysia", tours: 16, image: malaysia },
    { id: 2, name: "Dubai", tours: 16, image: dubai },
    { id: 3, name: "Greece", tours: 16, image: greece },
    { id: 4, name: "Singapore", tours: 16, image: singapore },
  ];
  return (
    <div className="destination-grid">
      <h2>Choose your Destination</h2>
      <div className="grid">
        {destinations.map((destination) => (
          <div className="destination-card" key={destination.id}>
            <img src={destination.image} alt={destination.name} />
            <div className="overlay">
              <h3>{destination.name}</h3>
              {/* <p>{destination.tours} Tours</p> */}
              <button style={{marginTop: 15, marginLeft: 15}} className="view-more">16 Tours</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all">VIEW MORE</button>
    </div>
  );
}

export default DestinationGrid;
