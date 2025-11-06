import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollButtons from './components/ScrollButtons';
import HelpButton from './components/HelpButton';
// NEW IMPORT
import BackgroundDecorations from './components/BackgroundDecorations';
import { Analytics } from '@vercel/analytics/react';

// Pages
import Home from './pages/Home';
import Teams from './pages/Teams';
import Players from './pages/Players';
import News from './pages/News';
import Tournaments from './pages/Tournaments';
import History from './pages/History';
import Rules from './pages/Rules';
import Quiz from './pages/Quiz';

function App() {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Apply theme class to body whenever theme state changes
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className="App">
        {/* Add the new decorations here */}
        <BackgroundDecorations />
        
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players" element={<Players />} />
            <Route path="/news" element={<News />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/history" element={<History />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
        <ScrollButtons />
        <HelpButton />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;