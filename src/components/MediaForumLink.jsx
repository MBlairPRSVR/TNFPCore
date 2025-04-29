import React, { useState } from 'react';

const MediaForum = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ username: '', content: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.content) return;

    const newPost = {
      id: Date.now(),
      username: formData.username,
      content: formData.content,
    };

    setPosts([newPost, ...posts]);
    setFormData({ username: '', content: '' });
  };

  return (
    <div className="media-forum p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Media Forum</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          name="username"
          placeholder="Your name"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <textarea
          name="content"
          placeholder="What's on your mind?"
          value={formData.content}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          rows={4}
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Post
        </button>
      </form>

      <div className="posts space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow-sm bg-white">
            <h2 className="font-semibold">{post.username}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaForum;
