import React from 'react';
import './Tournaments.css';

function Tournaments() {
  return (
    <div className="tournaments fade-in">
      <div className="container">
        <section className="hero-section">
          <h1 className="hero-title">World Competitions</h1>
          <p className="hero-subtitle">Follow the biggest stages in global volleyball.</p>
        </section>

        {/* Featured Event with Image Background */}
        <section className="featured-tournament">
          <h2>Next Major Event</h2>
          <div 
            className="featured-banner" 
            style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/teams/Paris2024.jpg")'}}
          >
            <div className="featured-content">
              <h3>Paris 2024 Olympic Games</h3>
              <p>The world's best teams converge in France for the ultimate prize.</p>
              <span className="tournament-date">📅 July 26 - August 11, 2024</span>
            </div>
          </div>
        </section>

        {/* New Video Section */}
        <section className="video-section">
           <h2 className="section-title">VNL 2023 Finals Highlights</h2>
           <div className="video-wrapper">
             <iframe 
               width="560" 
               height="315" 
               src="https://www.youtube.com/embed/SpecVq7_y8s" 
               title="VNL Highlights" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             ></iframe>
           </div>
        </section>
        
        <section className="tournament-category">
          <h2 className="section-title">International Competitions</h2>
          <div className="features-grid">
            <div className="feature-card card vnl-card">
              <div className="card-badge">Annual</div>
              <h3>🏐 VNL</h3>
              <p>The Volleyball Nations League features the top 16 national teams competing globally.</p>
            </div>
            <div className="feature-card card wch-card">
              <div className="card-badge">Every 4 Years</div>
              <h3>🌍 World Championships</h3>
              <p>The most prestigious FIVB tournament battling for global supremacy.</p>
            </div>
            <div className="feature-card card">
               <div className="card-badge">Club</div>
               <h3>🏆 CEV Champions League</h3>
               <p>The elite competition for the best volleyball clubs across Europe.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tournaments;