import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Glades<span> International Corporation</span></h3>
            <p>Sustainable kraft solutions for modern packaging needs.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Manxon Bldg. Arayat corner Road 1 Street, Mandaluyong City, Philippines</p>
            <p>gic.sales@glades-intl.com</p>
            <p>(+632) 531-2203 / 531-2248</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Glades International Corporation. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;