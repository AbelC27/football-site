import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './ScrollButtons.css';

function ScrollButtons() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButtons && (
        <div className="scroll-buttons">
          <button className="scroll-btn scroll-up" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
          <button className="scroll-btn scroll-down" onClick={scrollToBottom} aria-label="Scroll to bottom">
            <FaArrowDown />
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollButtons;
