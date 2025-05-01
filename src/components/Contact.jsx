import React from "react";
import { motion } from "framer-motion";
import Navbar from './Navbar';
import './Contact.css';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35, // smoother, slower stagger
      delayChildren: 0.5
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1] // buttery smooth ease
    }
  }
};

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="lava-background" />
      <Navbar />
      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="contact-heading" variants={cardVariants}>
          Contact Information
        </motion.h1>

        <motion.div className="contact-item" variants={cardVariants}>
          <h2>General Inquiries</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:info@thenashvillefoodproject.org">info@thenashvillefoodproject.org</a><br />
            <strong>Phone:</strong> <a href="tel:6154600172">(615) 460-0172</a><br />
            <strong>Address:</strong> 5904 California Avenue, Nashville, TN 37209
          </p>
        </motion.div>

        <motion.div className="contact-item" variants={cardVariants}>
          <h2>Media Inquiries</h2>
          <p>
            <strong>Contact:</strong> Sarah Henning<br />
            <strong>Email:</strong> <a href="mailto:sarahhenning@thenashvillefoodproject.org">sarahhenning@thenashvillefoodproject.org</a>
          </p>
        </motion.div>

        <motion.div className="contact-item" variants={cardVariants}>
          <h2>Speaker Requests</h2>
          <p>
            <strong>Contact:</strong> Allison Thayer<br />
            <strong>Email:</strong> <a href="mailto:allison@thenashvillefoodproject.org">allison@thenashvillefoodproject.org</a><br />
            <strong>Note:</strong> Please provide at least two weeks' notice for any interview requests intended to support a school project.
          </p>
        </motion.div>

        <motion.div className="contact-item" variants={cardVariants}>
          <h2>Food Donations</h2>
          <p>
            <strong>Contact:</strong> David Frease<br />
            <strong>Email:</strong> <a href="mailto:davidf@thenashvillefoodproject.org">davidf@thenashvillefoodproject.org</a><br />
            <strong>Note:</strong> Donations are accepted by appointment only. Our greatest needs are raw protein, fresh produce, and healthy pantry staples.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
