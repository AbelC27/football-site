import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import './Home.css';

function Home() {
  return (
    <div className="home fade-in">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Welcome to the Volleyball Family</h1>
          <p className="hero-subtitle">Join our passionate community of fans, players, and enthusiasts.</p>
        </div>
      </section>

      <ImageCarousel />

      <div className="container">
        <section className="features-section">
          <h2 className="section-title">Explore the Sport</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">🏐</div>
              <h3>Top Teams</h3>
              <p>Discover the world's most prestigious teams and their amazing stories.</p>
              <Link to="/teams" className="btn btn-primary">Meet the Teams</Link>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">👤</div>
              <h3>Star Players</h3>
              <p>Get to know the legends and rising stars shaping the game today.</p>
              <Link to="/players" className="btn btn-primary">See Players</Link>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🏆</div>
              <h3>Tournaments</h3>
              <p>Follow the biggest global competitions and match results.</p>
              <Link to="/tournaments" className="btn btn-primary">View Events</Link>
            </div>
          </div>
        </section>

        {/* New Community Section */}
        <section className="community-invite fade-in">
          <div className="invite-content">
            <h2>Ready to Join the Rally? 🏐</h2>
            <p>Whether you're a pro player or just watched your first match, there's a place for you here. Dive into the stats, watch the highlights, and become part of our community.</p>
          </div>
        </section>

        <section className="video-section">
          <h2 className="section-title">Featured Highlights</h2>
          <div className="video-wrapper card">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/pMp3sV24mrU"
              title="Volleyball Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;