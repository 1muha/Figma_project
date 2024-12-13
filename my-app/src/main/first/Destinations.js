import React from "react";
import "./Destinations.css";
import malaysia from "../../assets/malaysia.jpg";
import dubai from "../../assets/dubaii.webp";
import greece from "../../assets/athens.jpg";
import singapore from "../../assets/singapore.webp";

function DestinationGrid() {
  const destinations = [
    { id: 1, name: "Malaysia", tours: 16, image: malaysia, className: "malaysia" },
    { id: 2, name: "Dubai", tours: 16, image: dubai, className: "dubai" },
    { id: 3, name: "Greece", tours: 16, image: greece, className: "greece" },
    { id: 4, name: "Singapore", tours: 16, image: singapore, className: "singapore" },
  ];

  return (
    <div className="destination-grid">
      <h2 className="chsyr">Choose your</h2>
      <h1 className="dstns">DESTINATION</h1>
      <div className="grid">
        {destinations.map((destination) => (
          <div
            className={`destination-card ${destination.className}`}
            key={destination.id}
          >
            <img src={destination.image} alt={destination.name} />
            <div className="overlay">
              <h3>{destination.name}</h3>
              <button className="view-more">{destination.tours} Tours</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all">VIEW MORE</button>
    </div>
  );
}

export default DestinationGrid;
