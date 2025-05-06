import React, { useState } from 'react';

const MediaForum = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ username: '', content: '', file: null });

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
    if (!formData.username || (!formData.content && !formData.file)) return;

    const newPost = {
      id: Date.now(),
      username: formData.username,
      content: formData.content,
      file: formData.file ? URL.createObjectURL(formData.file) : null,
      fileType: formData.file ? formData.file.type : null,
      fileName: formData.file ? formData.file.name : null,
    };

    setPosts([newPost, ...posts]);
    setFormData({ username: '', content: '', file: null });
  };

  const renderFile = (type, url, name) => {
    if (type?.startsWith('image/')) {
      return <img src={url} alt="upload" className="mt-3 max-h-64 rounded-lg shadow-md" />;
    } else if (type?.startsWith('video/')) {
      return <video controls src={url} className="mt-3 max-h-64 rounded-lg shadow-md" />;
    } else {
      return (
        <a
          href={url}
          download={name}
          className="mt-3 inline-block text-olive-700 hover:underline"
        >
          📎 Download {name}
        </a>
      );
    }
  };

  return (
    <div className="min-h-screen bg-olive-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl border border-olive-200">
        <h1 className="text-4xl font-bold text-olive-800 text-center mb-8">🍃 Media Forum</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Your name"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-olive-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
          />
          <textarea
            name="content"
            placeholder="What's on your mind?"
            value={formData.content}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-olive-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
          />
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full text-sm text-gray-600"
          />
          <button
            type="submit"
            className="w-full bg-olive-700 hover:bg-olive-800 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Post
          </button>
        </form>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-5 border border-olive-200 bg-olive-50 rounded-xl shadow-sm"
            >
              <h2 className="font-semibold text-olive-800">{post.username}</h2>
              <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
              {post.file && renderFile(post.fileType, post.file, post.fileName)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaForum;
