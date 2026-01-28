import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Capital<span>Cuts</span>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/products" 
            className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
