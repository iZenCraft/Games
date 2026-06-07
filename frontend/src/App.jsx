import React, { useState } from 'react';
import './App.css';

function App() {
  const [gameTitle] = useState('Cloud Gaming Platform');
  const [games] = useState([
    { id: 1, name: 'Game 1', status: 'Available' },
    { id: 2, name: 'Game 2', status: 'Available' },
    { id: 3, name: 'Game 3', status: 'Coming Soon' }
  ]);
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="app-container">
      <header className="header">
        <h1>🎮 {gameTitle}</h1>
        <p>Stream and play games from the cloud</p>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Welcome to Cloud Gaming</h2>
          <p>Experience low-latency gaming with GPU-accelerated streaming</p>
        </section>

        <section className="games-section">
          <h2>Available Games</h2>
          <div className="games-grid">
            {games.map(game => (
              <div 
                key={game.id} 
                className="game-card"
                onClick={() => setSelectedGame(game)}
              >
                <div className="game-card-content">
                  <h3>{game.name}</h3>
                  <p>Status: {game.status}</p>
                  {game.status === 'Available' && (
                    <button className="play-button">▶️ Play Now</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedGame && (
          <section className="stream-player">
            <h2>Now Playing: {selectedGame.name}</h2>
            <div className="player-area">
              <div className="video-placeholder">
                <p>🎬 Video Stream Area</p>
                <p>WebRTC Stream will appear here</p>
              </div>
              <button 
                className="close-button"
                onClick={() => setSelectedGame(null)}
              >
                Close
              </button>
            </div>
          </section>
        )}

        <section className="features">
          <h2>Why Cloud Gaming?</h2>
          <ul>
            <li>✅ Ultra-low latency (&lt;50ms)</li>
            <li>✅ GPU-accelerated streaming</li>
            <li>✅ Multi-device support</li>
            <li>✅ Scalable infrastructure</li>
            <li>✅ High-quality graphics</li>
            <li>✅ No downloads needed</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>Cloud Gaming Platform © 2026 | Made with ❤️ by iZenCraft</p>
      </footer>
    </div>
  );
}

export default App;
