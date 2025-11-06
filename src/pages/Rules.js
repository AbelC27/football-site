import React from 'react';
import './Rules.css';

function Rules() {
  return (
    <div className="rules fade-in">
      <div className="container">
        <section className="hero-section">
          <h1 className="hero-title">Rules & Basics</h1>
          <p className="hero-subtitle">Master the fundamentals of the game.</p>
        </section>

        {/* Video Guide */}
        <section className="video-section">
           <h2 className="section-title">Video Guide for Beginners</h2>
           <div className="video-wrapper">
             <iframe 
               width="560" 
               height="315" 
               src="https://www.youtube.com/embed/NnPLDOmdtkU" 
               title="Volleyball Rules Explained" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             ></iframe>
           </div>
        </section>

        <section className="rules-section">
          <h2 className="section-title">The Court</h2>
          {/* You should download a real court diagram and save it to public/images/court.jpg */}
          <div className="court-image-wrapper">
              <img 
                src="https://placehold.co/800x450/EEE/31343C.png?text=Volleyball+Court+Diagram" 
                alt="Volleyball Court Diagram" 
                className="court-img"
              />
          </div>
          <div className="court-diagram card">
            <div className="court-info">
              <h3>Dimensions</h3>
              <ul>
                <li><strong>Length:</strong> 18m</li>
                <li><strong>Width:</strong> 9m</li>
              </ul>
            </div>
            <div className="court-info">
              <h3>Net Height</h3>
              <ul>
                <li><strong>Men:</strong> 2.43m</li>
                <li><strong>Women:</strong> 2.24m</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rules-section">
          <h2 className="section-title">Player Positions</h2>
          <div className="positions-grid">
            <div className="position-card card setter">
              <h3>🖐️ Setter</h3>
              <p>The playmaker who runs the offense.</p>
            </div>
            <div className="position-card card libero">
              <h3>🛡️ Libero</h3>
              <p>Defensive specialist, wears a different jersey.</p>
            </div>
            <div className="position-card card outside">
              <h3>🏐 Outside Hitter</h3>
              <p>Primary attacker from the left side.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Rules;