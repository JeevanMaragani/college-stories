import React from 'react';
import PostCard from '../components/PostCard';

const Explore = ({ posts }) => {
  return (
    <div>
      <h1>Explore Stories</h1>
      <div className="post-grid">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts yet. Be the first to confess!</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
