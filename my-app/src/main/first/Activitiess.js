import React from "react";
import "./Activities.css";
import camp from "../../assets/camp.png";
import mount from "../../assets/mount.png";
import car from "../../assets/car.png";
import fire from "../../assets/fire.png";
import date from "../../assets/date.png";

function Activities() {
  const activities = [
    { id: 1, name: "Adventure", icon: fire, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 2, name: "Camping", icon: camp, description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 3, name: "Trekking", icon: mount, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, name: "Off Road", icon: car, description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 5, name: "Camp Fire", icon: fire, description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 6, name: "Expiring", icon: date, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ];

  return (
    <div className="activities-section">
      <h2 style={{color: "#ee1c45", fontFamily: "Clicker Script, cursive", fontWeight: 100}}>Travel by</h2>
      <h2 style={{fontWeight: 100}}>ACTIVITY</h2>
      <p style={{width: 700, marginLeft: 250}} className="section-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <div className="activities-grid">
        {activities.map((activity) => (
          <div
            className="activity-card"
            key={activity.id}
          >
            <img src={activity.icon} alt={activity.name} className="activity-icon" />
            <h3>
              {activity.name}
            </h3>
            <p>
              {activity.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
