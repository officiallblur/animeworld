import React from 'react';
import './Footer.css';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo">ANIMEWORLD</div>

        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#videos">Videos</a></li>
        
        </ul>

        <div className="footer-social">
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Animeworld. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
