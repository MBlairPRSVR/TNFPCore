import React, { useState } from 'react';

const groups = ['Staff', 'Registered Volunteers', 'Culinary Chef'];

const MessageSender = () => {
  const [recipient, setRecipient] = useState('Staff');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message) {
      console.log(`Sending to ${recipient}:`, message);
      // API logic here
    }
  };

  return (
    <div className="message-sender">
      <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
        {groups.map((group) => <option key={group}>{group}</option>)}
      </select>
      <textarea
        rows="4"
        placeholder="Enter message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send Message</button>
    </div>
  );
};

export default MessageSender;
