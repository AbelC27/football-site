import React from 'react';
import './History.css';

function History() {
  return (
    <div className="history fade-in">
      <div className="container">
        <section className="hero-section">
          <h1 className="hero-title">Volleyball History</h1>
          <p className="hero-subtitle">From 1895 to the global phenomenon of today.</p>
        </section>

        <div className="history-content">
          <section className="timeline-section">
            <h2 className="section-title">Key Milestones</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">1895</div>
                <div className="timeline-content card">
                  <h3>The Beginning</h3>
                  <p>William G. Morgan invents "Mintonette" in Holyoke, Massachusetts.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">1964</div>
                <div className="timeline-content card">
                  <h3>Olympic Debut</h3>
                  <p>Volleyball introduced as an official sport at the Tokyo Games.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Historic Video Section */}
          <section className="video-section">
            <h2 className="section-title">Historic Match: London 2012 Final</h2>
            <div className="video-wrapper">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/2M_V7qqesSg" 
                title="London 2012 Final" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <section className="legends-section">
            <h2 className="section-title">Legends of the Game</h2>
            <div className="legends-grid">
              <div className="legend-card card">
                <div className="legend-img-wrapper">
                    {/* Placeholder for Karch */}
                    <div className="legend-placeholder">🇺🇸</div>
                </div>
                <h3>Karch Kiraly</h3>
                <p>The only player to win Olympic gold in both indoor and beach volleyball.</p>
              </div>
              <div className="legend-card card">
                <div className="legend-img-wrapper">
                     <img src="/images/players/giba.png" alt="Giba" className="legend-img" />
                </div>
                <h3>🇧🇷 Giba</h3>
                <p>Led Brazil to 3 World Championships and an Olympic Gold in the 2000s.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default History;