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

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter(p => p.category === activeFilter);

  return (
    <div className="products-page">

      <section className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Sustainable kraft solutions for every packaging need</p>
        </div>
      </section>

      <section className="filters-section">
        <div className="container filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                className="product-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="product-image">
                  <span className="product-category">{product.category}</span>
                </div>

                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="product-features">
                    {product.features.map((f, i) => (
                      <span key={i} className="feature-tag">{f}</span>
                    ))}
                  </div>

                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="inquire-btn">Inquire Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
