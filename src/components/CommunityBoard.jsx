import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CommunityBoard.css';

const CommunityBoard = () => {
  const [eventTitle, setEventTitle] = React.useState('');
  const [eventDescription, setEventDescription] = React.useState('');
  const [file, setFile] = React.useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    if (selectedFile.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        const lines = content.split('\n');
        setEventTitle(lines[0] || 'Untitled Event');
        setEventDescription(lines.slice(1).join('\n') || 'No description provided.');
      };
      reader.readAsText(selectedFile);
    }
  };

  const renderMediaPreview = () => {
    if (!file) return null;
    const fileType = file.type.split('/')[0];

    if (fileType === 'image') {
      return <img className="event-image-preview" src={URL.createObjectURL(file)} alt="Event preview" />;
    }

    if (fileType === 'video') {
      return <video className="event-video-preview" controls src={URL.createObjectURL(file)} />;
    }

    return <p>File preview not supported.</p>;
  };

  return (
    <motion.div 
      className="community-board-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="olive-overlay" />
      
      <motion.h1
        className="community-board-title"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        🍇 TNFP Community Board 🍷
      </motion.h1>

      <motion.div 
        className="community-upload-card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <input
          className="file-input"
          type="file"
          accept=".txt, .jpg, .jpeg, .png, .mp4, .mov, .avi"
          onChange={handleFileUpload}
        />
        <div className="event-details">
          {renderMediaPreview()}
        </div>
      </motion.div>

      <motion.button
        className="volunteer-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/volunteer')}
      >
        Become a Volunteer 🌿
      </motion.button>
    </motion.div>
  );
};

export default CommunityBoard;
