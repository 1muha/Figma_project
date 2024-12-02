import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <h2 className="footer-logo">Listee Travel</h2>
          <p className="footer-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">📸</a>
            <a href="#" className="social-icon">💻</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">News & Blogs</a></li>
              <li><a href="#">Help & Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">How we work</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
