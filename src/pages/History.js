import React from 'react';
import './History.css';

function History() {
  return (
    <div className="history fade-in">
      <div className="container">
        <section className="hero-section">
          <h1 className="hero-title">Our Rich History</h1>
          <p className="hero-subtitle">From humble beginnings in 1895 to a global phenomenon.</p>
        </section>

        <div className="history-content">
          <section className="timeline-section">
            <h2 className="section-title">Milestones</h2>
            <div className="timeline">
              {/* 1895 Milestone */}
              <div className="timeline-item">
                <div className="timeline-year">1895</div>
                <div className="timeline-content card">
                  <img src="/images/history/vintage-game.jpg" alt="Early Volleyball Game" className="history-img" />
                  <h3>The Beginning of "Mintonette"</h3>
                  <p>William G. Morgan invents the sport in Holyoke, Massachusetts, designed as a less rough alternative to basketball for older members of the YMCA.</p>
                </div>
              </div>
              {/* 1947 Milestone */}
              <div className="timeline-item">
                <div className="timeline-year">1947</div>
                <div className="timeline-content card">
                  <img 
                    src="/images/history/fivb-founding.jpg" 
                    alt="FIVB Founding in Paris" 
                    className="history-img" 
                    onError={(e) => e.target.style.display='none'}
                  />
                  <h3>FIVB Founded</h3>
                  <p>The Fédération Internationale de Volleyball (FIVB) was founded in Paris, France, to govern the sport globally.</p>
                </div>
              </div>
              {/* 1964 Milestone */}
              <div className="timeline-item">
                <div className="timeline-year">1964</div>
                <div className="timeline-content card">
                  <img 
                    src="/images/history/olympics-1964.jpg" 
                    alt="1964 Tokyo Olympics Volleyball" 
                    className="history-img"
                    onError={(e) => e.target.style.display='none'}
                   />
                  <h3>Olympic Debut</h3>
                  <p>Volleyball is officially introduced as an Olympic sport at the Tokyo Games, cementing its status on the world stage.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="legends-section">
            <h2 className="section-title">Legends of the Game</h2>
            <div className="legends-grid">
              {/* Karch Kiraly - UPDATED */}
              <div className="legend-card card">
                <div className="legend-img-wrapper">
                    {/* Make sure you have public/images/players/kiraly.jpg */}
                    <img src="/images/players/kiraly.jpg" alt="Karch Kiraly" className="legend-img" onError={(e) => e.target.src = 'https://placehold.co/150x150?text=No+Image'}/>
                </div>
                <h3>🇺🇸 Karch Kiraly</h3>
                <p>The only player to win Olympic gold in both indoor and beach volleyball.</p>
              </div>

              {/* Giba */}
              <div className="legend-card card">
                <div className="legend-img-wrapper">
                     <img src="/images/players/giba.png" alt="Giba" className="legend-img" />
                </div>
                <h3>🇧🇷 Giba</h3>
                <p>A Brazilian icon who redefined dynamism and leadership on the court.</p>
              </div>

              {/* Regla Torres - UPDATED */}
              <div className="legend-card card">
                <div className="legend-img-wrapper">
                    {/* Make sure you have public/images/players/torres.jpg */}
                    <img src="/images/players/torres.jpg" alt="Regla Torres" className="legend-img" onError={(e) => e.target.src = 'https://placehold.co/150x150?text=No+Image'}/>
                </div>
                <h3>🇨🇺 Regla Torres</h3>
                <p>Voted the best female player of the 20th century, dominating the net for Cuba.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default History;