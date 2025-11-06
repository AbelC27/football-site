import React from 'react';
import './Rules.css';

function Rules() {
  return (
    <div className="rules fade-in">
      <div className="container">
        <section className="hero-section">
          <h1 className="hero-title">Volleyball 101</h1>
          <p className="hero-subtitle">New to the game? Let's get you court-side ready!</p>
        </section>

        <section className="rules-section">
          <h2 className="section-title">The Court Map</h2>
          {/* Using your new court image */}
          <div className="court-image-wrapper fade-in">
              <img 
                src="/images/rules/simple-court.png" 
                alt="Volleyball Court Diagram" 
                className="court-img"
              />
          </div>
          <div className="court-diagram card">
            <div className="court-info">
              <h3>Key Dimensions</h3>
              <ul>
                <li><strong>Full Court:</strong> 18m x 9m (59' x 29.5')</li>
                <li><strong>Attack Line:</strong> 3m (10') from the net</li>
              </ul>
            </div>
            <div className="court-info">
              <h3>Net Height</h3>
              <ul>
                <li><strong>Men's Net:</strong> 2.43m (7' 11⅝")</li>
                <li><strong>Women's Net:</strong> 2.24m (7' 4⅛")</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rules-section">
          <h2 className="section-title">Who Does What?</h2>
          <div className="positions-grid">
            <div className="position-card card setter">
              <h3>👐 The Setter</h3>
              <p>The team's quarterback. They run the offense and decide who gets the ball next. Usually the most vocal leader.</p>
            </div>
            <div className="position-card card libero">
              <h3>🛡️ The Libero</h3>
              <p>The defensive specialist. They wear a different color jersey, are experts at digging spikes, and can't attack at the net.</p>
            </div>
            <div className="position-card card outside">
              <h3>⚡ Outside Hitter</h3>
              <p>The primary attacker. They hit from the left side, get the most sets, and are key passers in defense.</p>
            </div>
            <div className="position-card card middle">
              <h3>🧱 Middle Blocker</h3>
              <p>The first line of defense. They jump to block every play and hit quick attacks from the center of the net.</p>
            </div>
            <div className="position-card card opposite">
              <h3>💣 Opposite</h3>
              <p>The powerhouse. They play opposite the setter and focus almost entirely on hitting hard from the front and back row.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Rules;