import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Volunteer.css';
import veggiesImage from '../assets/tnfpvegetables.webp';

const Volunteer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="volunteer-form-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.img
        src={veggiesImage}
        alt="Vegetables - The Nashville Food Project"
        className="veggies-image"
        loading="lazy"
        animate={
          prefersReducedMotion
            ? {}
            : { rotate: [0, 5, -5, 5, -5, 0], scale: [1, 1.02, 1, 1.02, 1] }
        }
        transition={
          prefersReducedMotion
            ? {}
            : { repeat: Infinity, duration: 6, ease: 'easeInOut' }
        }
      />

      <AnimatePresence>
        {!isSubmitted ? (
          <motion.form
            className="volunteer-form"
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="volunteer-form-heading"
              variants={childVariants}
            >
              Register to Volunteer
            </motion.h2>

            <motion.div className="form-group" variants={childVariants}>
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={childVariants}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={childVariants}>
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={childVariants}>
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
              whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
              transition={
                prefersReducedMotion
                  ? {}
                  : { type: 'spring', stiffness: 400, damping: 10 }
              }
            >
              Submit
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="thank-you-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Thank You for Supporting The Nashville Food Project!</h2>
            <p>Your registration has been submitted successfully. We’ll get in touch with you soon!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Volunteer;
