// MediaForum.jsx
import React, { useState, useEffect, useRef } from 'react';
import './mediaforum.css';

const MediaForum = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ username: '', content: '', file: null });
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.content) return;

    const newPost = {
      id: Date.now(),
      username: formData.username,
      content: formData.content,
      file: formData.file ? URL.createObjectURL(formData.file) : null,
      fileType: formData.file ? formData.file.type : null
    };

    setPosts([newPost, ...posts]);
    setFormData({ username: '', content: '', file: null });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="media-forum-container">
      <h1 className="media-header">🌀 Media Forum 1998 💾</h1>
      <div className="media-clock">{time.toLocaleTimeString()}</div>

      <div className="media-posts">
        {posts.map((post) => (
          <div key={post.id} className="media-post animate-slide-in">
            <h2 className="media-username">{post.username}</h2>
            <p className="media-content">{post.content}</p>
            {post.file && post.fileType?.startsWith('image') && (
              <img src={post.file} alt="upload" className="media-upload" />
            )}
            {post.file && post.fileType?.startsWith('audio') && (
              <audio controls className="media-upload">
                <source src={post.file} type={post.fileType} />
                Your browser does not support audio.
              </audio>
            )}
            {post.file && post.fileType?.startsWith('video') && (
              <video controls className="media-upload">
                <source src={post.file} type={post.fileType} />
                Your browser does not support video.
              </video>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="media-form">
        <input
          type="text"
          name="username"
          placeholder="Screen Name"
          value={formData.username}
          onChange={handleChange}
          className="media-input"
        />
        <textarea
          ref={textareaRef}
          name="content"
          placeholder="Type your message here..."
          value={formData.content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="media-textarea"
          rows={2}
        />
        <input
          type="file"
          name="file"
          ref={fileInputRef}
          onChange={handleChange}
          className="media-file-input"
        />
        <div className="media-buttons">
          <button type="submit" className="media-button">🚀 Blast Off</button>
          <button type="button" className="media-button">📹 Video</button>
          <button type="button" className="media-button">💬 DM</button>
        </div>
      </form>
    </div>
  );
};

export default MediaForum;
