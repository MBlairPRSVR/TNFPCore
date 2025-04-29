// Navbar.jsx
import { Link } from 'react-router-dom'; // For routing links
import './Navbar.css'; // Import custom styles (you'll create this)

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">About</Link>
        </li>
        <li>
          <Link to="/services" className="nav-item">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">Contact</Link>
        </li>
        {/* Add Admin and Staff buttons */}
        <li>
          <Link to="/admin" className="nav-item">Admin</Link>
        </li>
        <li>
          <Link to="/staff" className="nav-item">Staff</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
