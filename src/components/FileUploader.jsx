import React, { useState } from 'react';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);
  const handleSubmit = () => {
    if (file) {
      console.log("Uploading:", file);
      // upload logic goes here
    }
  };

  return (
    <div className="file-uploader">
      <input type="file" accept="image/*,video/*,.pdf" onChange={handleChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default FileUploader;
