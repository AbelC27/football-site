import React, { useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import './Home.css';

function Home() {
  useEffect(() => {
    // Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }, []);

  return (
    <div className="home fade-in">
      <div className="container">
        <section className="hero-section">
          <h1 className="hero-title">Welcome to Volleyball World</h1>
          <p className="hero-subtitle">Your ultimate destination for everything volleyball</p>
        </section>

        <ImageCarousel />

        <section className="features-section">
          <h2 className="section-title">Explore Volleyball</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">🏐</div>
              <h3>Top Teams</h3>
              <p>Discover the world's most prestigious volleyball teams and their rich histories.</p>
              <a href="/teams" className="btn btn-primary">Explore Teams</a>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">👤</div>
              <h3>Star Players</h3>
              <p>Get to know the legendary players who have shaped the sport of volleyball.</p>
              <a href="/players" className="btn btn-primary">View Players</a>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">📰</div>
              <h3>Latest News</h3>
              <p>Stay updated with breaking news, transfer updates, and tournament highlights.</p>
              <a href="/news" className="btn btn-primary">Read News</a>
            </div>
          </div>
        </section>

        <section className="video-section">
          <h2 className="section-title">Featured Video</h2>
          <div className="video-wrapper">
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

        <section className="stats-section">
          <h2 className="section-title">Volleyball Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card card">
              <h3>220+</h3>
              <p>Professional Teams</p>
            </div>
            <div className="stat-card card">
              <h3>3,500+</h3>
              <p>Active Players</p>
            </div>
            <div className="stat-card card">
              <h3>900M</h3>
              <p>Volleyball Fans Worldwide</p>
            </div>
            <div className="stat-card card">
              <h3>222</h3>
              <p>FIVB Member Nations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
