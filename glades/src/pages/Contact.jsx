import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9AM-6PM"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "contact@kraftmanufacture.com",
      subtitle: "We reply within 24 hours"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      info: "123 Factory Street",
      subtitle: "Industrial Zone, City 12345"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      info: "Monday - Friday",
      subtitle: "9:00 AM - 6:00 PM"
    }
  ];

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get in Touch</h1>
            <p>We'd love to discuss your kraft packaging needs</p>
          </motion.div>
        </div>
      </section>

      <div className="container contact-container">
        {/* Contact Info */}
        <motion.section
          className="contact-info-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <div className="contact-info-grid">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="contact-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p className="contact-info-main">{item.info}</p>
                <p className="contact-info-sub">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form and Map */}
        <div className="contact-main-section">
          {/* Contact Form */}
          <motion.section
            className="contact-form-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.section>

          {/* Map Section */}
          <motion.section
            className="map-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Location</h2>
            <div className="map-placeholder">
              <div className="map-content">
                <h3>Visit Our Factory</h3>
                <p>123 Factory Street</p>
                <p>Industrial Zone</p>
                <p>City, State 12345</p>
                <div className="directions-btn">
                  Get Directions
                </div>
              </div>
            </div>
            
            <div className="visit-info">
              <h3>Planning a Visit?</h3>
              <p>Please schedule an appointment in advance. We'll ensure a team member is available to give you a tour of our facilities.</p>
            </div>
          </motion.section>
        </div>

        {/* FAQ Section */}
        <motion.section
          className="faq-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              {
                question: "What is your minimum order quantity?",
                answer: "MOQ varies by product. For standard items, MOQ is typically 100 units. Custom orders may have different requirements."
              },
              {
                question: "Do you offer samples?",
                answer: "Yes, we provide samples of our standard products. Custom samples may require a nominal fee."
              },
              {
                question: "What are your lead times?",
                answer: "Standard products ship in 3-5 business days. Custom orders typically take 2-3 weeks."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to most countries. Shipping costs and times vary by destination."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Contact;