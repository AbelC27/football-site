import React, { useState } from 'react';
import { FaQuestionCircle, FaTimes } from 'react-icons/fa';
import './HelpButton.css';

function HelpButton() {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <>
      <button className="help-button" onClick={toggleHelp} aria-label="Help">
        <FaQuestionCircle />
      </button>

      {showHelp && (
        <div className="help-modal">
          <div className="help-content">
            <button className="help-close" onClick={toggleHelp} aria-label="Close help">
              <FaTimes />
            </button>
            <h2>Help & Navigation Guide</h2>
            <div className="help-section">
              <h3>🏠 Home</h3>
              <p>Browse featured content, image carousel, and latest volleyball updates.</p>
            </div>
            <div className="help-section">
              <h3>🏐 Teams</h3>
              <p>Explore top volleyball teams and their statistics.</p>
            </div>
            <div className="help-section">
              <h3>👤 Players</h3>
              <p>View information about top volleyball players worldwide.</p>
            </div>
            <div className="help-section">
              <h3>📰 News</h3>
              <p>Stay updated with latest volleyball news and articles.</p>
            </div>
            <div className="help-section">
              <h3>📧 Contact</h3>
              <p>Get in touch with us through our contact form.</p>
            </div>
            <div className="help-section">
              <h3>🔍 Search</h3>
              <p>Use the search bar to quickly find teams, players, or news.</p>
            </div>
            <div className="help-section">
              <h3>🌓 Theme Toggle</h3>
              <p>Switch between light and dark mode using the sun/moon icon.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HelpButton;
