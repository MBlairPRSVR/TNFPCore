import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import './Hero.css'; // Import the custom CSS

const Hero = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const navigate = useNavigate(); // Change from useHistory to useNavigate

  // Handle button click for Admin or Staff
  const handleButtonClick = (role) => {
    setShowPasswordPrompt(true);
    setRedirectUrl(role);
  };

  // Handle password submission and redirection
  const handlePasswordSubmit = () => {
    if (password === 'california') {
      if (redirectUrl === 'admin') {
        navigate('/admin/dashboard'); // Change history.push to navigate
      } else if (redirectUrl === 'staff') {
        navigate('/staff/dashboard'); // Change history.push to navigate
      }
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="hero-container"
      id="home"
    >
      <div className="hero-overlay"></div> {/* Adding overlay */ }
      <div className="hero-content">
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          Welcome to TNFP Core
        </motion.h1>

        {/* Buttons for Admin and Staff */}
        <div className="hero-buttons">
          <button
            className="hero-button admin-button"
            onClick={() => handleButtonClick('admin')}
          >
            Admin
          </button>
          <button
            className="hero-button staff-button"
            onClick={() => handleButtonClick('staff')}
          >
            Staff
          </button>
        </div>

        {/* Password Prompt */}
        {showPasswordPrompt && (
          <div className="password-prompt">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress} // Add onKeyDown event listener
            />
            <button onClick={handlePasswordSubmit}>Submit</button>
            {error && <p className="error-message">{error}</p>}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Hero;
