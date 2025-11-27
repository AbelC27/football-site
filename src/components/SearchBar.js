import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchableContent = [
    { title: 'Brazil National Team', type: 'Team', page: '/teams' },
    { title: 'USA Volleyball', type: 'Team', page: '/teams' },
    { title: 'Italy National Team', type: 'Team', page: '/teams' },
    { title: 'Poland Volleyball', type: 'Team', page: '/teams' },
    { title: 'Russia National Team', type: 'Team', page: '/teams' },
    { title: 'Wilfredo León', type: 'Player', page: '/players' },
    { title: 'Giba', type: 'Player', page: '/players' },
    { title: 'Karch Kiraly', type: 'Player', page: '/players' },
    { title: 'Earvin Ngapeth', type: 'Player', page: '/players' },
    { title: 'World Championship', type: 'News', page: '/news' },
    { title: 'Transfer News', type: 'News', page: '/news' },
    { title: 'Contact Us', type: 'Page', page: '/contact' },
    { title: 'Home', type: 'Page', page: '/' },
  ];

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = searchableContent.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.type.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
    setShowResults(true);
  };

  const handleResultClick = (page) => {
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
    window.location.href = page;
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => searchTerm && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="search-input"
        />
      </div>
      {showResults && searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="search-result-item"
              onClick={() => handleResultClick(result.page)}
            >
              <span className="result-title">{result.title}</span>
              <span className="result-type">{result.type}</span>
            </div>
          ))}
        </div>
      )}
      {showResults && searchTerm && searchResults.length === 0 && (
        <div className="search-results">
          <div className="search-result-item no-results">
            No results found
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
