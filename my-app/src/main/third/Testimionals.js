import React from 'react';
import './Testimionals.css';
import woman from "../../assets/woman.png"

const Testimionals = () => {
  return (
    <section className="reviews">
      <h2 className="reviews-heading">Reviews & Testimonials</h2>
      <h3 className="reviews-title">Top Reviews for Etour</h3>
      <p className="reviews-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.
      </p>
      <div className="testimonial">
        <blockquote className="testimonial-quote">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s...
        </blockquote>
        <div className="testimonial-author">
          <p className="author-name">Scarlett Thomas</p>
          <p className="author-location">Singapore</p>
        </div>
      </div>
      <div className="avatars">
        <img src= {woman} alt="User 1" className="avatar" />
        <img src= {woman} alt="User 2" className="avatar" />
        <img src= {woman} alt="User 4" className="avatar" />
        <img src= {woman} alt="User 3" className="avatar" />
        <p>Scarlett Thomas</p>
        <img src= {woman} alt="User 5" className="avatar" />
      </div>
    </section>
  );
};

export default Testimionals;
