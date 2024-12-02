import React from 'react';
import "./Newss.css";

const Newss = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2 className="newsletter-heading">Get Our Monthly Newsletter</h2>
        <p className="newsletter-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Input your email address in here" className="newsletter-input" />
          <button type="submit" className="newsletter-button">→</button>
        </form>
      </div>
    </section>
  );
};

export default Newss;
