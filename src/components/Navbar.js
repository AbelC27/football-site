import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import SearchBar from './SearchBar';

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          🏐 Volleyball World
        </Link>

        <div className="nav-search-desktop">
          <SearchBar />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/teams"
              className={location.pathname === '/teams' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Teams
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/players"
              className={location.pathname === '/players' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Players
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/news"
              className={location.pathname === '/news' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item nav-search-mobile">
            <SearchBar />
          </li>
          <li className="nav-item">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
