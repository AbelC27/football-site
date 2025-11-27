import React, { useState } from 'react';
import './Players.css';

function Players() {
  // Keep track of which cards are flipped
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const players = [
    {
      name: 'Wilfredo Leon',
      team: 'Poland 🇵🇱',
      position: 'Outside Hitter',
      image: '/images/players/Leon.jpg',
      // New data for the back of the card
      stats: {
        nickname: "Lion King",
        vertical: "3.74m",
        serveSpeed: "138 km/h",
        funFact: "Holds the world record for fastest serve."
      }
    },
    {
      name: 'Bruno Rezende',
      team: 'Brazil 🇧🇷',
      position: 'Setter',
      image: '/images/players/bruno.webp',
      stats: {
        nickname: "Bruninho",
        sets_per_match: "45+",
        leadership: "100%",
        funFact: "Has won over 30 major titles with Brazil."
      }
    },
    {
      name: 'Earvin N\'Gapeth',
      team: 'France 🇫🇷',
      position: 'Outside Hitter',
      image: '/images/players/Earvin-NGapeth.webp',
      stats: {
        nickname: "Magic Man",
        style_points: "∞",
        signature_move: "No-look hook",
        funFact: "Famous for scoring match points backwards."
      }
    },
    {
      name: 'Ivan Zaytsev',
      team: 'Italy 🇮🇹',
      position: 'Opposite',
      image: '/images/players/Ivan Zaytsev.jpg',
      stats: {
        nickname: "The Tsar",
        power: "Extreme",
        hair_style: "Iconic Mohawk",
        funFact: "His father was an Olympic Champion for USSR."
      }
    },
    {
      name: 'Matt Anderson',
      team: 'USA 🇺🇸',
      position: 'Opposite / OH',
      image: '/images/players/Matt.png',
      stats: {
        nickname: "Matty",
        consistency: "Legendary",
        olympic_medals: "1 (Bronze)",
        funFact: "Has played professionally in Korea, Italy, and Russia."
      }
    },
    {
      name: 'Zhu Ting',
      team: 'China 🇨🇳',
      position: 'Outside Hitter',
      image: '/images/players/zhu-ting.jpg',
      stats: {
        nickname: "MVP Queen",
        olympic_medals: "1 (Gold)",
        world_titles: "2",
        funFact: "Named MVP of every major tournament she played in 2015-2019."
      }
    },
    {
      name: 'Paola Egonu',
      team: 'Italy 🇮🇹',
      position: 'Opposite',
      image: '/images/players/paola-egonu.jpg',
      stats: {
        nickname: "The Powerhouse",
        spike_height: "3.44m",
        scoring: "Elite",
        funFact: "Holds the record for most points in a single Olympic match (47 points)."
      }
    },
    {
      name: 'Tijana Bošković',
      team: 'Serbia 🇷🇸',
      position: 'Opposite',
      image: '/images/players/tijana-boskovic.jpg',
      stats: {
        nickname: "Tia",
        world_titles: "2",
        attack_power: "Devastating",
        funFact: "Led Serbia to back-to-back World Championship titles in 2018 and 2022."
      }
    }
  ];

  return (
    <div className="players fade-in">
      <div className="container">
        <section className="hero-section">
          <h1 className="hero-title">Meet the Stars</h1>
          <p className="hero-subtitle">Click on a player card to see their secret stats! ✨</p>
        </section>

        <div className="players-grid">
          {players.map((player, index) => (
            <div 
              key={index} 
              className={`player-card-container ${flippedCards[index] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="player-card-inner">
                {/* FRONT OF CARD */}
                <div className="player-card-front card">
                  <div className="player-image-wrapper">
                    <img src={player.image} alt={player.name} className="player-image" />
                  </div>
                  <div className="player-info">
                    <h3>{player.name}</h3>
                    <span className="player-team">{player.team}</span>
                    <div className="player-position">{player.position}</div>
                  </div>
                  <div className="click-hint">👆 Click to flip</div>
                </div>

                {/* BACK OF CARD */}
                <div className="player-card-back card">
                  <h3>{player.stats.nickname}</h3>
                  <div className="stats-list">
                    {Object.entries(player.stats).map(([key, value]) => {
                      if (key === 'nickname' || key === 'funFact') return null;
                      // Format key from camelCase to Normal Text
                      const label = key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
                      return (
                        <div key={key} className="stat-item">
                          <span className="stat-label">{label}:</span>
                          <span className="stat-value">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="fun-fact">
                    <strong>Did you know?</strong>
                    <p>{player.stats.funFact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Players;