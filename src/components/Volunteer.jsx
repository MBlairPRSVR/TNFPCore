import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Volunteer.css'; // For custom styling of the form
import veggiesImage from '../assets/tnfpvegetables.webp'; // ✅ import your image

const Volunteer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    
    <motion.div
      className="volunteer-form-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
       <motion.img
  src={veggiesImage}
  alt="Vegetables - The Nashville Food Project"
  className="veggies-image"
  animate={{ rotate: [0, 5, -5, 5, -5, 0], scale: [1, 1.02, 1, 1.02, 1] }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut"
  }}
/>
 
      {!isSubmitted ? (
        <form className="volunteer-form" onSubmit={handleSubmit}>
          <motion.h2
            className="volunteer-form-heading"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Register to Volunteer
          </motion.h2>

          <motion.div
            className="form-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <label>Message (Optional)</label>
            <textarea
              placeholder="Why do you want to volunteer?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Submit
          </motion.button>
        </form>
      ) : (
        <motion.div
          className="thank-you-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Thank You for Supporting The Nashville Food Project!</h2>
          <p>Your registration has been submitted successfully. We’ll get in touch with you soon!</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Volunteer;
