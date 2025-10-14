import React from 'react';
import './News.css';

function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'World Championship Final: Historic Victory',
      category: 'World Championship',
      date: 'March 15, 2025',
      excerpt: 'An incredible match that will be remembered for generations as one team secures their record-breaking title.',
      image: '/images/teams/italywin.jpg',
      author: 'John Smith'
    },
    {
      id: 2,
      title: 'Transfer Market: Record-Breaking Deal',
      category: 'Transfers',
      date: 'March 10, 2025',
      excerpt: 'A volleyball superstar makes a surprising move to a new club, breaking transfer records in the process.',
      image: '/images/teams/volleyball-transfers.webp',
      author: 'Emma Johnson'
    },
    {
      id: 3,
      title: 'Olympic Qualifiers: Dramatic Finish',
      category: 'International',
      date: 'March 8, 2025',
      excerpt: 'Last-minute points secure Olympic qualification for several nations in an action-packed tournament.',
      image: '/images/teams/Paris2024.jpg',
      author: 'Michael Brown'
    },
    {
      id: 4,
      title: 'Rising Stars: Youth Program Success',
      category: 'Youth Volleyball',
      date: 'March 5, 2025',
      excerpt: 'Young talents emerge from top programs, showcasing the future of world volleyball.',
      image: '/images/teams/academy.jpg',
      author: 'Sarah Wilson'
    },
    {
      id: 5,
      title: 'Tactical Revolution: New Playing Style',
      category: 'Analysis',
      date: 'March 1, 2025',
      excerpt: 'Top coaches introduce innovative tactics that are changing the way volleyball is played.',
      image: '/images/teams/tactic.jpg',
      author: 'David Lee'
    },
    {
      id: 6,
      title: 'Arena Technology: The Future is Here',
      category: 'Technology',
      date: 'February 28, 2025',
      excerpt: 'New arena innovations enhance fan experience with cutting-edge technology.',
      image: '/images/teams/arena.jpg',
      author: 'Lisa Anderson'
    }
  ];

  return (
    <div className="news fade-in">
      <div className="container">
        <h1 className="section-title">Latest Volleyball News</h1>
        <p className="page-description">
          Stay updated with the latest news, transfers, and analysis from the world of volleyball.
        </p>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <article key={article.id} className="news-card card">
              <div className="news-image">
                <img src={article.image} alt={article.title} />
                <span className="news-category">{article.category}</span>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">{article.date}</span>
                  <span className="news-author">By {article.author}</span>
                </div>
                <h2 className="news-title">{article.title}</h2>
                <p className="news-excerpt">{article.excerpt}</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </article>
          ))}
        </div>

        <section className="video-news-section">
          <h2 className="section-title">Video Highlights</h2>
          <div className="video-grid">
            <div className="video-item card">
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/mCC67iioF8Q"
                  title="Volleyball Highlights 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>Top Spikes of the Month</h3>
            </div>
            <div className="video-item card">
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/hlSB3CoRYtk"
                  title="Volleyball Highlights 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>Best Blocks & Digs</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default News;
