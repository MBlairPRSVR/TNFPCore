import React, { useState } from "react";
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
    <div className="hero-container" id="home">
      <div className="hero-content">
        <h1 className="hero-heading typewriter-heading">
          Welcome to TNFP Core
        </h1>
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
    </div>
  );
};

export default Hero;
