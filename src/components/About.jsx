import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Navbar from './Navbar';
import './About.css';  // Import the custom About.css

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        <motion.h1 
          className="about-heading" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Us
        </motion.h1>

        <motion.p 
          className="about-description" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Welcome to TNFP Core! We are dedicated to streamlining communication and providing an efficient platform
          for teams to manage and edit notifications. Our platform empowers businesses to keep their communication
          organized and on point. Our team is passionate about tech and innovation, and we strive to bring you
          the most seamless experience possible. Learn more about our mission, values, and the people behind TNFP Core.
        </motion.p>

        <motion.a 
          href="/contact" 
          className="about-button"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          Contact Us
        </motion.a>
      </div>
    </div>
  );
};

export default About;
