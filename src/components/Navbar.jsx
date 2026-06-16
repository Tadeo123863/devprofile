import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">DevProfile</Link>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/editor" onClick={() => setIsOpen(false)}>Editor</Link>
          <Link to="/preview" onClick={() => setIsOpen(false)}>Previsualización</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>Acerca de</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;