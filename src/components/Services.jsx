import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from './Navbar';
import './Services.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  }),
};

const Services = () => {
  const [showServices, setShowServices] = useState(false);
  const [servicesData, setServicesData] = useState([]);

  // Fetch services data from an API or external source
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services'); // replace with your actual API endpoint
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
    
    // Show services after 45 seconds
    const timer = setTimeout(() => setShowServices(true), 45000); // 45s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="services-container">
      <Navbar />
      <motion.h1 
        className="services-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Our Services
      </motion.h1>

      {showServices && (
        <div className="services-content">
          {servicesData.length > 0 ? (
            servicesData.map((service, i) => (
              <motion.div
                key={i}
                className="service-item"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </motion.div>
            ))
          ) : (
            <p>Loading services...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
