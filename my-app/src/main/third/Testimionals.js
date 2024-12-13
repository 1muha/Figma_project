import React from 'react';
import './Testimionals.css';
import woman from "../../assets/woman.png"
import man from "../../assets/cap_man.png"
import woman2 from "../../assets/woman2.png"
import woman3 from "../../assets/woman3.png"
import woman4 from "../../assets/woman4.png"
import strin from "../../assets/strin.png"


const Testimionals = () => {
  return (
    <section className="reviews">
      <h1 style={{color: "#ee1c45", fontWeight: 100, fontFamily: "Clicker Script, cursive", marginBottom: 10, fontSize: 35, fontStyle: "italic"}}>Review & Testimonials</h1>
        <h1 style={{fontWeight: 100, fontSize: 40, marginBottom: 20, color: "#1E1E1E"}}>TOP REVIEWS FOR ETOUR</h1>
        <p style={{width: 700, marginLeft: 290, marginBottom: 50}} className="section-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      <div className="testimonial">
        <img style={{with: 10, marginLeft: -1100, marginTop: -80}} src={strin}></img>
        <blockquote className="testimonial-quote">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s...
        </blockquote>
        <div class="triangle"></div>
      </div>
      <div className="avatars">
        <img src= {woman} alt="User 1" className="avatar" />
        <img src= {man} alt="User 2" className="avatar" />
        <img src= {woman2} alt="User 4" className="avatar" />
        <div className="testimonial-author">
          <p className="author-name">Scarlett Thomas</p>
          <p className="author-location">Singapore</p>
        </div>
        <img src= {woman3} alt="User 3" className="avatar" />
        <img src= {woman4} alt="User 5" className="avatar" />
      </div>
    </section>
  );
};

export default Testimionals;
