import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import mingPhoto from '../assets/ming.jpg';

const About = () => {
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
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
              Crafting Sustainable Solutions Since 1996
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
            <h1>About Glades</h1>
            <h2>The Glades Greiner Group</h2>

            <p>
              Founded in 1996 in Singapore; Currently a Key Supplier to the major QSR's
              and Institutional Food Companies in China, New Zealand, Australia and
              Philippines. The company employs approximately 900 people working at
              the four factories in China and Philippines.
            </p>

            <p>
              The company specializes in supplying the top Quick Service Restaurants
              (QSR) and Institutional / Retail Packaging. Glades have expanded into
              plastic thermoforming and injection molded products and paper cups and
              lids.
            </p>

            <p>
              Our journey has been guided by three core principles: sustainability,
              innovation, and craftsmanship. We believe that great packaging should
              protect both the product and the planet.
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
                description:
                  "We use 100% renewable materials and implement eco-friendly practices.",
                icon: "🌍"
              },
              {
                title: "Quality",
                description:
                  "Every product undergoes rigorous quality checks.",
                icon: "⭐"
              },
              {
                title: "Innovation",
                description:
                  "Continuous R&D to create better packaging solutions.",
                icon: "💡"
              },
              {
                title: "Customer Focus",
                description:
                  "Custom solutions tailored to client needs.",
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
                name: "Jammil Espitola",
                role: "CEO & Founder",
                bio: "25+ years in sustainable manufacturing",
                hasPhoto: false
              },
              {
                name: "Lee Ming Ho",
                role: "Porman",
                bio: "Expert in utos, sando gang, skrr skrr",
                hasPhoto: true,
                photoSrc: mingPhoto
              },
              {
                name: "John Carlo Pacunini",
                role: "Sustainability Officer",
                bio: "Leading green initiatives",
                hasPhoto: false
              },
              {
                name: "Jason Bourne",
                role: "Sales Director",
                bio: "Building client relationships",
                hasPhoto: false
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
                  {member.hasPhoto ? (
                    <img
                      src={member.photoSrc}
                      alt={member.name}
                      className="team-photo"
                    />
                  ) : (
                    <span>{member.name.charAt(0)}</span>
                  )}
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
