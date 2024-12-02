import React from "react";
import "./Sharepic.css"; // Link to the CSS file
import shar from "../../assets/shar.png"
import ruksak from "../../assets/ruksak.png"
import bridge from "../../assets/bridge.png"
import friends from "../../assets/friends.png"
import tog from "../../assets/tog.png"
import orol from "../../assets/orol.png"


const Sharepic = () => {
  const photos = [
    shar, // Replace with actual image URLs
    ruksak,
    bridge,
    friends,
    tog,
    orol,
  ];

  return (
    <section className="shared-photos">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">Best Traveler's</span> SHARED PHOTOS
        </h2>
        <p className="section-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div className="photo-item" key={index}>
              <img src={photo} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sharepic;
