import React from 'react';
import './Tournaments.css';

function Tournaments() {
  return (
    <div className="tournaments fade-in">
      <div className="container">
        <section className="hero-section">
          <h1 className="hero-title">World Competitions</h1>
          <p className="hero-subtitle">Feel the energy of the biggest stages in global volleyball.</p>
        </section>

        {/* Featured Event using your new stadium image */}
        <section className="featured-tournament">
          <h2>Next Major Event</h2>
          <div 
            className="featured-banner" 
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url("/images/tournaments/stadium-crowd.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="featured-content">
              <h3>Experience the Thrill Live</h3>
              <p>Join thousands of fans at the next big championship season.</p>
              <span className="tournament-date">📅 Coming in 2025</span>
            </div>
          </div>
        </section>

        <section className="tournament-category">
          <h2 className="section-title">International Competitions</h2>
          <div className="features-grid">
            {/* VNL Card using your new logo */}
            <div className="feature-card card vnl-card">
              <div className="card-badge">Annual</div>
              <img src="/images/tournaments/vnl-logo.png" alt="VNL Logo" className="tournament-logo" />
              <h3>Volleyball Nations League</h3>
              <p>The world's top 16 national teams battling it out across the globe every summer.</p>
            </div>
            <div className="feature-card card wch-card">
              <div className="card-badge">Premier</div>
              <div className="tournament-icon">🌍</div>
              <h3>World Championships</h3>
              <p>The most prestigious FIVB tournament where legends are born every four years.</p>
            </div>
            <div className="feature-card card">
               <div className="card-badge">Elite Club</div>
               <div className="tournament-icon">🏆</div>
               <h3>Champions League</h3>
               <p>The highest level of club volleyball featuring Europe's absolute best teams.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tournaments;