import { motion } from 'framer-motion';
import { useState } from 'react';

const EmailRegistrationModal = ({ isOpen, onClose }) => {
  const [staff, setStaff] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [registeredStaff, setRegisteredStaff] = useState([]);

  const handleChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisteredStaff([...registeredStaff, staff]);
    setStaff({ name: '', email: '', phone: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <motion.div
        className="relative max-w-lg w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-xl hover:text-red-400"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center">Register Staff</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={staff.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={staff.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={staff.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-olive text-white font-semibold rounded hover:bg-olive-dark transition"
          >
            Register
          </button>
        </form>

        {registeredStaff.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Registered Staff</h3>
            <ul className="space-y-1 text-sm">
              {registeredStaff.map((s, i) => (
                <li key={i}>
                  {s.name} — {s.email} {s.phone && `(${s.phone})`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default EmailRegistrationModal;
