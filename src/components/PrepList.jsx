import React, { useState, useEffect } from 'react';
import './PrepList.css';

const PrepList = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if localStorage has a saved theme preference
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setDarkMode(savedMode === 'dark');
    }
  }, []);

  useEffect(() => {
    // Toggle theme classes on the body tag
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);

    // Save the theme preference to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className="page-wrapper">
      <div className="notebook-container">
        <h1
          contentEditable
          suppressContentEditableWarning
          className="title editable-text"
        >
          Prep List
        </h1>

        <div
          contentEditable
          suppressContentEditableWarning
          className="editable-textarea"
        >
          Write your prep list here for the kitchen staff...
        </div>

        <div className="bottom-toolbar">
          <button className="print-button" onClick={() => window.print()}>
            🖨️ Print This
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrepList;
