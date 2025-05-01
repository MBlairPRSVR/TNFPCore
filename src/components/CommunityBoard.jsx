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

      <motion.button
        className="volunteer-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/volunteer')}
      >
        Volunteer
      </motion.button>
    </motion.div>
  );
};

export default CommunityBoard;
