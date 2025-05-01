import React, { useState } from 'react';
import './MenuMaker.css';  // Assuming you added the styles in a separate file

const MenuMaker = () => {
  // State to store menu items for each day
  const [menu, setMenu] = useState({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
  });

  // Handle input change
  const handleInputChange = (day, value) => {
    setMenu({
      ...menu,
      [day]: value,
    });
  };

  // Handle form submission (for sending to staff)
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle the actual sending logic
    alert('Menu Sent!');
  };

  // Function to print the menu
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="menu-maker-container">
      <h1 className="menu-title">Weekly Menu</h1>

      <form onSubmit={handleSubmit}>
        {/* Menu Row for Days */}
        <div className="menu-row">
          {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
            <div className="menu-day" key={day}>
              <div className="menu-day-label">{day.charAt(0).toUpperCase() + day.slice(1)}</div>
              <textarea
                className="menu-day-input"
                value={menu[day]}
                onChange={(e) => handleInputChange(day, e.target.value)}
                placeholder={`Enter menu for ${day.charAt(0).toUpperCase() + day.slice(1)}`}
              />
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="buttons">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="print-btn" onClick={handlePrint}>
            Print
          </button>
        </div>
      </form>

     
    </div>
  );
};

export default MenuMaker;
