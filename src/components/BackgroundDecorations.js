import React from 'react';
import './BackgroundDecorations.css';

function BackgroundDecorations() {
  return (
    <div className="background-decorations">
      {/* Left Margin Icons */}
      <div className="decoration floating-slow" style={{ top: '15%', left: '5%', animationDelay: '0s' }}>🏐</div>
      <div className="decoration floating-medium" style={{ top: '45%', left: '8%', animationDelay: '2s' }}>🖐️</div>
      <div className="decoration floating-fast" style={{ top: '75%', left: '4%', animationDelay: '1s' }}>👟</div>

      {/* Right Margin Icons */}
      <div className="decoration floating-medium" style={{ top: '20%', right: '5%', animationDelay: '1.5s' }}>🏆</div>
      <div className="decoration floating-slow" style={{ top: '55%', right: '7%', animationDelay: '3s' }}>🏐</div>
      <div className="decoration floating-fast" style={{ top: '85%', right: '5%', animationDelay: '0.5s' }}>🥇</div>
    </div>
  );
}

export default BackgroundDecorations;