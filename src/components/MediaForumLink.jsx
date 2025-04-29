import React from 'react';
import { useNavigate } from 'react-router-dom';

const MediaForumLink = () => {
  const navigate = useNavigate();

  const goToMediaForum = () => {
    navigate('/mediaforum');
  };

  return (
    <div className="media-forum-link">
      <button onClick={goToMediaForum}>Go to MediaForum</button>
    </div>
  );
};

export default MediaForumLink;
