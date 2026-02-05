import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Products.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: "Premium Kraft Paper",
      category: "paper",
      description: "High-strength, unbleached kraft paper for various packaging needs",
      features: ["100% Recyclable", "Custom Sizes", "Water Resistant"],
      price: "From $45/roll"
    },
    {
      id: 2,
      name: "Kraft Bags",
      category: "bags",
      description: "Eco-friendly shopping and carry bags with custom printing",
      features: ["Reinforced Handles", "Custom Printing", "Multiple Sizes"],
      price: "From $0.25/bag"
    },
    {
      id: 3,
      name: "Kraft Boxes",
      category: "boxes",
      description: "Custom-sized boxes for shipping and product packaging",
      features: ["Custom Dimensions", "Recyclable", "Easy Assembly"],
      price: "From $0.85/box"
    },
    {
      id: 4,
      name: "Kraft Envelopes",
      category: "envelopes",
      description: "Durable mailing envelopes with security features",
      features: ["Self-sealing", "Padded Options", "Security Window"],
      price: "From $0.15/envelope"
    },
    {
      id: 5,
      name: "Kraft Tape",
      category: "accessories",
      description: "Reinforced kraft paper tape for sealing packages",
      features: ["Water Activated", "Strong Adhesion", "Eco-friendly"],
      price: "From $3.50/roll"
    },
    {
      id: 6,
      name: "Custom Printed Kraft",
      category: "paper",
      description: "Kraft paper with custom branding and designs",
      features: ["Full Color Printing", "Brand Logo", "Pattern Options"],
      price: "Custom Quote"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'paper', label: 'Kraft Paper' },
    { id: 'bags', label: 'Bags' },
    { id: 'boxes', label: 'Boxes' },
    { id: 'envelopes', label: 'Envelopes' },
    { id: 'accessories', label: 'Accessories' }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

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
      className="products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <motion.div
            className="products-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Products</h1>
            <p>Sustainable kraft solutions for every packaging need</p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          <motion.div
            className="filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <motion.div 
            className="products-grid"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="product-image">
                  <div className={`product-category ${product.category}`}>
                    {product.category}
                  </div>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    {product.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <motion.button 
                      className="inquire-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Inquire Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="custom-solutions">
        <div className="container">
          <motion.div
            className="custom-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Need Custom Solutions?</h2>
            <p>We specialize in creating tailored kraft packaging for unique requirements.</p>
            <motion.button 
              className="custom-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Custom Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;