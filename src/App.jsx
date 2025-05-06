import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import MediaForum from './components/MediaForum';
import NotFound from './components/NotFound'; // 404 fallback
import MenuMaker from './components/MenuMaker';
import Preplist from './components/PrepList';
import CommunityBoard from './components/CommunityBoard';
import './index.css'; // Global styles
import Volunteer from './components/Volunteer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Remove the dashboard routes since they are deleted */}
        <Route path="/mediaforum" element={<MediaForum />} />
        <Route path="/menu-maker" element={<MenuMaker />} />
        <Route path="/preplist" element={<Preplist />} />
        <Route path="/community-board" element={<CommunityBoard />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
