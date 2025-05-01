import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  const goToMenuMaker = () => {
    navigate('/menu-maker');
  };

  const openMediaForum = () => {
    navigate('/mediaforum');
  };

  const openPrepList = () => {
    navigate('/preplist'); // make sure the route exists
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      <motion.div
        className="bg-white text-black rounded-2xl shadow-2xl p-8 w-full max-w-3xl mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Admin Dashboard</h2>

        {/* Buttons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToMenuMaker}
            className="py-3 px-6 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
          >
            Go to Menu Maker
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openMediaForum}
            className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            Open Media Forum
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openPrepList}
            className="py-3 px-6 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition"
          >
            Open Prep List 📝
          </motion.button>
        </div>

        {/* Message Staff */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Send Direct Message to Staff</h3>
          <form onSubmit={handleSendMessage} className="space-y-4">
            <textarea
              className="w-full h-24 p-3 border rounded-lg resize-none bg-gray-200 text-black"
              placeholder="Type your message here..."
              required
            />
            <div className="flex items-center gap-4 flex-wrap">
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-6 rounded-xl hover:bg-purple-700 transition"
              >
                Send Message
              </button>
              <button
                type="button"
                onClick={handleFileUpload}
                className="bg-gray-300 text-black py-2 px-4 rounded-xl hover:bg-gray-400 transition"
              >
                Upload File
              </button>
              <input
                type="file"
                multiple
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </div>
          </form>
        </div>

        {/* Video Call Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Start a Video Call</h3>
          <p className="text-sm text-gray-600 mb-4">(Feature coming soon - integrate with WebRTC, Jitsi, or Zoom SDK)</p>
          <button className="bg-red-600 text-white py-2 px-6 rounded-xl hover:bg-red-700 transition">
            Launch Video Call
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
