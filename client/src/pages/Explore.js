import React from 'react';
import PostCard from '../components/PostCard'; // Import PostCard component
import './ExplorePage.css'; // Optional: If there's additional styling

const Explore = ({ posts }) => {
  return (
    <div className="explore-container">
      <h2>Explore Stories</h2>
      <div className="confession-cards">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostCard key={index} post={post} /> // Pass post to PostCard
          ))
        ) : (
          <p>No posts yet. Be the first to confess!</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
