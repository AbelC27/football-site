import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found fade-in">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-icon">🏐</div>
          <h1>404</h1>
          <h2>Oops! Out of Bounds!</h2>
          <p>Looks like this ball went out of play. The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home Court
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
