import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import StaffDashboard from './components/StaffDashboard';
import MediaForum from './components/MediaForum';
import NotFound from './components/NotFound'; // Import the NotFound component

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
        <Route path="/mediaforum" element={<MediaForum />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for undefined paths */}
      </Routes>
    </Router>
  );
};

export default App;
