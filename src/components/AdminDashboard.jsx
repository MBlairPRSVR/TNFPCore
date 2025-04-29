import React from 'react';
import FileUploader from './FileUploader';
import MessageSender from './MessageSender';
import MediaForumLink from './MediaForumLink';
import './AdminDashboard.css'; // or the path to your CSS file


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Panel</h1>

      <section>
        <h2>Upload Files</h2>
        <FileUploader />
      </section>

      <section>
        <h2>Send Messages</h2>
        <MessageSender />
      </section>

      <section>
        <h2>Communicate</h2>
        <MediaForumLink />
      </section>
    </div>
  );
};

export default AdminDashboard;
