import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Services.css';

// Import the background image
import backgroundImage from '../assets/tnfpvegetables.webp';

const services = [
  {
    title: "Community Meals",
    description: "We prepare and share nourishing meals to strengthen communities and support our neighbors facing food insecurity."
  },
  {
    title: "Urban Agriculture",
    description: "We grow fresh produce in community gardens and urban farms to supply local food access and education."
  },
  {
    title: "Food Recovery",
    description: "We rescue surplus food from businesses and farms to reduce waste and provide healthy meals to people in need."
  },
  {
    title: "Education & Outreach",
    description: "We host cooking classes, gardening workshops, and food justice events to build skills and raise awareness."
  }
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    pauseOnHover: false
  };

  return (
    <div className="services-container">
      {/* Apply background image with animation */}
      <motion.div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
        initial={{ scale: 1.1 }}  // Initial zoomed-in state
        animate={{ scale: 1 }}    // Zoom out to normal state
        transition={{ duration: 3, ease: "easeOut" }} // Smooth transition
      />

      <div className="overlay-content">
        <Navbar />

        {/* Title Section */}
        <motion.h1
          className="services-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Our Services
        </motion.h1>

        {/* Carousel Section */}
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {services.map((service, index) => (
              <motion.div
                className="service-card"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* CTA Button Section */}
        <div className="access-community-board-btn">
          <Link to="/community-board">
            <motion.button
              className="access-community-board"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Access Community Board
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
