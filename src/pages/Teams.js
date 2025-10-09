import React from 'react';
import './Teams.css';

function Teams() {
  const teams = [
    {
      name: 'Brazil National Team',
      country: 'Brazil',
      founded: 1954,
      stadium: 'Maracanãzinho',
      titles: '3 World Championships',
      image: '/images/teams/brazil.jpg'
    },
    {
      name: 'USA Volleyball',
      country: 'United States',
      founded: 1928,
      stadium: 'Various Arenas',
      titles: '3 Olympic Gold Medals',
      image: '/images/teams/America.png'
    },
    {
      name: 'Italy National Team',
      country: 'Italy',
      founded: 1946,
      stadium: 'PalaLottomatica',
      titles: '3 World Championships',
      image: '/images/teams/Italia.jpg'
    },
    {
      name: 'Poland Volleyball',
      country: 'Poland',
      founded: 1957,
      stadium: 'Tauron Arena',
      titles: '3 World Championships',
      image: '/images/teams/Poland.jpg'
    },
    {
      name: 'Russia National Team',
      country: 'Russia',
      founded: 1948,
      stadium: 'CSKA Arena',
      titles: '4 Olympic Gold Medals',
      image: '/images/teams/Rusia.png'
    },
    {
      name: 'Serbia National Team',
      country: 'Serbia',
      founded: 1946,
      stadium: 'Stark Arena',
      titles: '1 World Championship',
      image: '/images/teams/Serbia.png'
    }
  ];

  return (
    <div className="teams fade-in">
      <div className="container">
        <h1 className="section-title">Top Volleyball Teams</h1>
        <p className="page-description">
          Explore the most successful and prestigious volleyball teams from around the world.
        </p>

        <div className="teams-grid">
          {teams.map((team, index) => (
            <div key={index} className="team-card card">
              <div className="team-image">
                <img src={team.image} alt={team.name} />
              </div>
              <div className="team-info">
                <h2>{team.name}</h2>
                <div className="team-details">
                  <p><strong>Country:</strong> {team.country}</p>
                  <p><strong>Founded:</strong> {team.founded}</p>
                  <p><strong>Stadium:</strong> {team.stadium}</p>
                  <p><strong>Major Titles:</strong> {team.titles}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="comparison-section">
          <h2 className="section-title">Team Comparison Table</h2>
          <div className="table-wrapper">
            <table className="teams-table">
              <thead>
                <tr>
                  <th>Team Name</th>
                  <th>Country</th>
                  <th>Founded</th>
                  <th>Arena</th>
                  <th>Major Titles</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr key={index}>
                    <td data-label="Team Name">{team.name}</td>
                    <td data-label="Country">{team.country}</td>
                    <td data-label="Founded">{team.founded}</td>
                    <td data-label="Stadium">{team.stadium}</td>
                    <td data-label="Titles">{team.titles}</td>
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

export default Teams;
