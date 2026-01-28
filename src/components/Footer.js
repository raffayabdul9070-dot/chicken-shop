import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h3>CapitalCuts</h3>
          <p>
            Your trusted source for premium fresh chicken in Rawalpindi and Islamabad. 
            Quality, freshness, and customer satisfaction are our top priorities.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Products</h4>
          <ul>
            <li><Link to="/products">Whole Chicken</Link></li>
            <li><Link to="/products">Boneless Cuts</Link></li>
            <li><Link to="/products">Chicken Legs</Link></li>
            <li><Link to="/products">Wings & More</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+923001234567">+92 300 1234567</a></li>
            <li><a href="mailto:info@capitalcuts.pk">info@capitalcuts.pk</a></li>
            <li>Rawalpindi, Punjab, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Capital Cuts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
