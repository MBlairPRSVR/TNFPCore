import React from "react";
import { motion } from "framer-motion";
import Navbar from './Navbar';
import './Contact.css'; // Import custom Contact.css for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-content">
        <motion.h1
          className="contact-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="contact-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h2>General Inquiries</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:info@thenashvillefoodproject.org">info@thenashvillefoodproject.org</a><br />
            <strong>Phone:</strong> <a href="tel:6154600172">(615) 460-0172</a><br />
            <strong>Address:</strong> 5904 California Avenue, Nashville, TN 37209
          </p>
        </motion.div>

        <motion.div
          className="contact-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <h2>Media Inquiries</h2>
          <p>
            <strong>Contact:</strong> Sarah Henning<br />
            <strong>Email:</strong> <a href="mailto:sarahhenning@thenashvillefoodproject.org">sarahhenning@thenashvillefoodproject.org</a>
          </p>
        </motion.div>

        <motion.div
          className="contact-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <h2>Speaker Requests</h2>
          <p>
            <strong>Contact:</strong> Allison Thayer<br />
            <strong>Email:</strong> <a href="mailto:allison@thenashvillefoodproject.org">allison@thenashvillefoodproject.org</a><br />
            <strong>Note:</strong> Please provide at least two weeks' notice for any interview requests intended to support a school project.
          </p>
        </motion.div>

        <motion.div
          className="contact-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        >
          <h2>Food Donations</h2>
          <p>
            <strong>Contact:</strong> David Frease<br />
            <strong>Email:</strong> <a href="mailto:davidf@thenashvillefoodproject.org">davidf@thenashvillefoodproject.org</a><br />
            <strong>Note:</strong> Donations are accepted by appointment only. Our greatest needs are raw protein, fresh produce, and healthy pantry staples.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
