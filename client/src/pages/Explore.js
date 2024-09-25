import React, { useState, useEffect } from 'react';
import './ExplorePage.css'; // Make sure to create and link the CSS file for styling

const ExplorePage = () => {
  const [confessions, setConfessions] = useState([]);

  // Simulating data fetch from local storage or backend
  useEffect(() => {
    const storedConfessions = JSON.parse(localStorage.getItem('confessions')) || [];
    setConfessions(storedConfessions);
  }, []);

  return (
    <div className="explore-container">
      <h1>Explore Stories</h1>
      {confessions.length === 0 ? (
        <p>No posts yet. Be the first to confess!</p>
      ) : (
        <div className="confession-cards">
          {confessions.map((confession, index) => (
            <div key={index} className="confession-card">
              <h3>{confession.title}</h3>
              <p>{confession.story}</p>
              <span className="category-label">{confession.category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
