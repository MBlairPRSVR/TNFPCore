import React, { useState } from 'react';
import styles from './MenuMaker.module.css'; // Import CSS Module

const MenuMaker = () => {
  const [menu, setMenu] = useState({
    monday: ['', ''],
    tuesday: ['', ''],
    wednesday: ['', ''],
    thursday: ['', ''],
    friday: ['', ''],
  });

  const [dates, setDates] = useState({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
  });

  // Handle menu input change
  const handleInputChange = (day, index, value) => {
    const updatedMenu = { ...menu };
    updatedMenu[day][index] = value;
    setMenu(updatedMenu);
  };

  // Handle date input change
  const handleDateChange = (day, value) => {
    setDates({ ...dates, [day]: value });
  };

  // Add input box
  const addBox = (day) => {
    const updatedMenu = { ...menu };
    updatedMenu[day].push('');
    setMenu(updatedMenu);
  };

  // Print functionality
  const handlePrint = () => {
    window.print();
  };

  // Handle Enter key for submit
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('Submitted menu:', { menu, dates });
    }
  };

  return (
    <div className={styles['menu-maker-module']} onKeyDown={handleKeyDown}>
      <h1 className={styles['menu-title']}>TNFP Weekly Menu</h1>

      <form>
        <div className={styles['menu-table']}>
          {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
            <div className={styles['menu-day']} key={day}>
              <div className={styles['menu-day-label']}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </div>

              <input
                type="date"
                className={styles['date-picker']}
                value={dates[day]}
                onChange={(e) => handleDateChange(day, e.target.value)}
              />

              {menu[day].map((item, index) => (
                <textarea
                  key={index}
                  className={styles['menu-day-input']}
                  value={item}
                  onChange={(e) => handleInputChange(day, index, e.target.value)}
                  placeholder={`Item ${index + 1}`}
                />
              ))}

              <button type="button" className={styles['add-box-btn']} onClick={() => addBox(day)}>
                Add Box
              </button>
            </div>
          ))}
        </div>

        <div className={styles['buttons']}>
          <button type="button" className={styles['menu-btn']}>
            Submit
          </button>
          <button type="button" className={styles['menu-btn']} onClick={handlePrint}>
            Print
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuMaker;
