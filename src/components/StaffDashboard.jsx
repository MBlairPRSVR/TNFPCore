import React, { useEffect } from 'react';
import './StaffDashboard.css';

const StaffDashboard = () => {
  useEffect(() => {
    const quotes = document.querySelectorAll('.quote-text');
    let index = 0;

    const showNextQuote = () => {
      quotes.forEach(q => q.classList.remove('active'));
      quotes[index].classList.add('active');
      index = (index + 1) % quotes.length;
    };

    const interval = setInterval(showNextQuote, 13000);
    showNextQuote();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="left-section">
        <div className="cards-row">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
        </div>

        <div className="nav-buttons">
          <button className="nav-button">Overview</button>
          <button className="nav-button">Reports</button>
          <button className="nav-button">Settings</button>
        </div>

        <div className="quote-box">
          <h2>Daily Quote</h2>
          <div className="quote-text active">
            “Success is not final, failure is not fatal: it is the courage to continue that counts.”
            <footer>- Winston Churchill</footer>
          </div>
          <div className="quote-text">
            “The only limit to our realization of tomorrow is our doubts of today.”
            <footer>- Franklin D. Roosevelt</footer>
          </div>
          <div className="quote-text">
            “Believe you can and you're halfway there.”
            <footer>- Theodore Roosevelt</footer>
          </div>
        </div>
      </div>

      <div className="right-section">
        {/* Compact pie chart or additional info can go here */}
      </div>
    </div>
  );
};

export default StaffDashboard;
