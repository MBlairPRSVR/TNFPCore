import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Background image with fade-in */}
      <motion.div 
        className="background-image"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

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
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Welcome to <strong>TNFP Core</strong>! We are dedicated to streamlining communication and providing 
            an efficient platform for teams to manage and edit notifications. Our platform empowers businesses 
            to keep their communication organized and on point. Our team is passionate about tech and innovation, 
            and we strive to bring you the most seamless experience possible.
          </motion.p>

          <motion.a 
            href="/contact" 
            className="about-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
