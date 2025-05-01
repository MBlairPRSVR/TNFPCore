import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './Hero.css';

const Hero = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = (role) => {
    setShowPasswordPrompt(true);
    setRedirectUrl(role);
  };

  const handlePasswordSubmit = () => {
    if (password === 'california') {
      navigate(`/${redirectUrl}/dashboard`);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

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
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.h1
          className="hero-heading typewriter-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Welcome to TNFP Core
        </motion.h1>

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

        {showPasswordPrompt && (
          <div className="password-prompt">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
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
