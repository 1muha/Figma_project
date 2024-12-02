import React from "react";
import "./Activities.css"
import vector from "../../assets/vector.png"
import camp from "../../assets/camp.png"
import mount from "../../assets/mount.png"
import car from "../../assets/car.png"
import fire from "../../assets/fire.png"
import date from "../../assets/date.png"

function Activitiess() {
  const activities = [
    { id: 1, name: "Adventure", icon: vector, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    { id: 2, name: "Camping", icon: camp, description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 3, name: "Trekking", icon: mount, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, name: "Off Road", icon: car, description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 5, name: "Camp Fire", icon: fire, description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 6, name: "Expiring", icon: date, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ];

  return (
    <div className="activities-section">
      <h2>Travel by Activity</h2>
      <p className="section-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div className="activities-grid">
        {activities.map((activity) => (
          <div style={{backgroundColor: "coral"}} className="activity-card" key={activity.id}>
            <img src={activity.icon} alt={activity.name} className="activity-icon" />
            <h3 style={{color: "white"}}>{activity.name}</h3>
            <p style={{color: "white"}}>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activitiess;