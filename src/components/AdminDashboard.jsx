import React, { useState } from 'react';
import FileUploader from './FileUploader';
import MessageSender from './MessageSender';
import MediaForumLink from './MediaForumLink';
import EmailRegistrationModal from './EmailRegistrationModal';  // Keep this import
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <section>
        <h2>Register Staff</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-olive text-white font-semibold rounded hover:bg-olive-dark transition"
        >
          Open Registration Form
        </button>
      </section>

      {/* Staff Registration Modal */}
      <EmailRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AdminDashboard;
