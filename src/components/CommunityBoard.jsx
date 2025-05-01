import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CommunityBoard.css';

const CommunityBoard = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    // Handle text file for event title and description
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

    const fileType = file.type.split('/')[0]; // Get the file type (image, video)

    if (fileType === 'image') {
      return <img className="event-image-preview" src={URL.createObjectURL(file)} alt="Event preview" />;
    }

    if (fileType === 'video') {
      return <video className="event-video-preview" controls src={URL.createObjectURL(file)} />;
    }

    return <p>File preview is not supported for this type.</p>;
  };

  return (
    <motion.div
      className="community-board"
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 60 }}
    >
      <motion.h1
        className="community-board-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Community Board
      </motion.h1>

      <div className="event-form">
        <input type="file" accept=".txt, .jpg, .jpeg, .png, .mp4, .mov, .avi" onChange={handleFileUpload} />
      </div>

      <div className="event-board">
        <motion.h2
          className="event-board-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          
        </motion.h2>

        <motion.div
          className="event-card"
          key={eventTitle}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>{eventTitle || 'Your event title will appear here'}</h3>
          <p>{eventDescription || 'Your event description will appear after uploading a file.'}</p>
          {renderMediaPreview()}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CommunityBoard;
