import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={fadeInUp} className="about-title">
              Crafting Sustainable Solutions Since 1995
            </motion.h1>
            <motion.p variants={fadeInUp} className="about-subtitle">
              Pioneering eco-friendly kraft manufacturing with a commitment to quality and innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Story</h2>
            <p>
              Founded in 1995, Kraft Manufacture began with a simple vision: to create sustainable packaging 
              solutions that don't compromise on quality. What started as a small family-run operation has 
              grown into a leading manufacturer of eco-friendly kraft products.
            </p>
            <p>
              Our journey has been guided by three core principles: sustainability, innovation, and craftsmanship. 
              We believe that great packaging should protect both the product and the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          
          <div className="values-grid">
            {[
              {
                title: "Sustainability",
                description: "We use 100% renewable materials and implement eco-friendly practices in every step of our manufacturing process.",
                icon: "🌍"
              },
              {
                title: "Quality",
                description: "Every product undergoes rigorous quality checks to ensure durability, strength, and perfect finish.",
                icon: "⭐"
              },
              {
                title: "Innovation",
                description: "Continuous research and development to create better, more sustainable packaging solutions.",
                icon: "💡"
              },
              {
                title: "Customer Focus",
                description: "Custom solutions tailored to meet specific client needs with exceptional service.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Team
          </motion.h2>
          
          <div className="team-grid">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                bio: "With 25+ years in sustainable manufacturing"
              },
              {
                name: "Michael Chen",
                role: "Production Director",
                bio: "Expert in kraft paper technology"
              },
              {
                name: "Emma Rodriguez",
                role: "Sustainability Officer",
                bio: "Leading our green initiatives"
              },
              {
                name: "David Wilson",
                role: "Sales Director",
                bio: "Building client relationships since 2005"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-avatar">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;