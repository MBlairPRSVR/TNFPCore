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
import NotFound from './components/NotFound'; // NotFound component for undefined routes
import MenuMaker from './components/MenuMaker'; // MenuMaker component
import './index.css'; // Ensure the correct path for your CSS file
import Preplist from './components/PrepList';
import CommunityBoard from "./components/CommunityBoard";


<Routes>
  <Route path="/community-board" element={<CommunityBoard />} />
</Routes>


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
  <Route path="/menu-maker" element={<MenuMaker />} />
  <Route path="/preplist" element={<Preplist />} />
  <Route path="/community-board" element={<CommunityBoard />} /> {/* ✅ Add this here */}
  <Route path="*" element={<NotFound />} />
</Routes>

    </Router>
  );
};

export default App;
