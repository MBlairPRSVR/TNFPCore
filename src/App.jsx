// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // Import the About page
import Services from './components/Services'; // Import the Services page
import Contact from './components/Contact'; // Import the Contact page
import AdminDashboard from './components/AdminDashboard'; // Import Admin Dashboard
import StaffDashboard from './components/StaffDashboard'; // Import Staff Dashboard
import MediaForum from './components/MediaForum'; // Import MediaForum page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        <Route path="/mediaforum" element={<MediaForum />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
