import React from 'react';
import PostCard from '../components/PostCard';
import './ExplorePage.css';

const Explore = ({ posts = [] }) => {
  return (
    <div className="explore-container">
      <h2>Explore Stories</h2>

      {/* Confession Cards */}
      <div className="confession-cards">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostCard key={index} post={post} /> // Render each post using PostCard component
          ))
        ) : (
          <p>No confessions available.</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
