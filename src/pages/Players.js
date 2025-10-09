import React from 'react';
import './Players.css';

function Players() {
  const players = [
    {
      name: 'Wilfredo León',
      position: 'Outside Hitter',
      nationality: 'Poland',
      age: 31,
      club: 'PGE Skra Bełchatów',
      goals: '8,500+ Points',
      image: '/images/players/Leon.jpg'
    },
    {
      name: 'Giba',
      position: 'Outside Hitter',
      nationality: 'Brazil',
      age: 48,
      club: 'Retired',
      goals: '12,000+ Points',
      image: '/images/players/giba.png'
    },
    {
      name: 'Earvin Ngapeth',
      position: 'Outside Hitter',
      nationality: 'France',
      age: 33,
      club: 'Modena Volley',
      goals: '7,500+ Points',
      image: '/images/players/Earvin-Ngapeth.webp'
    },
    {
      name: 'Matthew Anderson',
      position: 'Opposite',
      nationality: 'USA',
      age: 37,
      club: 'Zenit Kazan',
      goals: '9,000+ Points',
      image: '/images/players/Matt.png'
    },
    {
      name: 'Bruno Rezende',
      position: 'Setter',
      nationality: 'Brazil',
      age: 38,
      club: 'Sada Cruzeiro',
      goals: '5,000+ Assists',
      image: '/images/players/bruno.webp'
    },
    {
      name: 'Ivan Zaytsev',
      position: 'Outside Hitter',
      nationality: 'Italy',
      age: 35,
      club: 'Vero Volley Monza',
      goals: '8,000+ Points',
      image: '/images/players/Ivan Zaytsev.jpg'
    }
  ];

  return (
    <div className="players fade-in">
      <div className="container">
        <h1 className="section-title">Top Volleyball Players</h1>
        <p className="page-description">
          Discover the world's greatest volleyball talents and their remarkable achievements.
        </p>

        <div className="players-grid">
          {players.map((player, index) => (
            <div key={index} className="player-card card">
              <div className="player-image">
                <img src={player.image} alt={player.name} />
                <div className="player-overlay">
                  <span className="player-position">{player.position}</span>
                </div>
              </div>
              <div className="player-info">
                <h2>{player.name}</h2>
                <div className="player-stats">
                  <div className="stat-item">
                    <span className="stat-label">Nationality</span>
                    <span className="stat-value">{player.nationality}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Age</span>
                    <span className="stat-value">{player.age}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Club</span>
                    <span className="stat-value">{player.club}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Career Stats</span>
                    <span className="stat-value highlight">{player.goals}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="players-table-section">
          <h2 className="section-title">Players Statistics</h2>
          <div className="table-wrapper">
            <table className="players-table">
              <thead>
                <tr>
                  <th>Player Name</th>
                  <th>Position</th>
                  <th>Nationality</th>
                  <th>Age</th>
                  <th>Current Club</th>
                  <th>Career Stats</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index}>
                    <td data-label="Player Name">{player.name}</td>
                    <td data-label="Position">{player.position}</td>
                    <td data-label="Nationality">{player.nationality}</td>
                    <td data-label="Age">{player.age}</td>
                    <td data-label="Current Club">{player.club}</td>
                    <td data-label="Career Goals"><strong>{player.goals}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Players;
