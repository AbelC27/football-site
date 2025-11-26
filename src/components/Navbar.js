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

  // Helper to check if link is active
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
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
            <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/teams" className={isActive('/teams')} onClick={closeMenu}>Teams</Link>
          </li>
          <li className="nav-item">
            <Link to="/players" className={isActive('/players')} onClick={closeMenu}>Players</Link>
          </li>
          <li className="nav-item">
            <Link to="/tournaments" className={isActive('/tournaments')} onClick={closeMenu}>Tournaments</Link>
          </li>
          <li className="nav-item">
            <Link to="/rules" className={isActive('/rules')} onClick={closeMenu}>Rules</Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className={isActive('/history')} onClick={closeMenu}>History</Link>
          </li>
           {/* NEW QUIZ LINK */}
           <li className="nav-item">
            <Link to="/quiz" className={isActive('/quiz')} onClick={closeMenu}>Quiz</Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className={isActive('/news')} onClick={closeMenu}>News</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link>
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