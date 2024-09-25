import React, { useState } from 'react';
import PostCard from '../components/PostCard'; // Import PostCard component
import './ExplorePage.css'; // Optional: If there's additional styling

const Explore = ({ posts = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');  // State for search input
  const [filterCategory, setFilterCategory] = useState(''); // State for category filter

  // Filter posts based on search term and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.story.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="explore-container">
      <h2>Explore Stories</h2>

      {/* Search and Filter Inputs */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Admiration">Admiration</option>
          <option value="Career Advice">Career Advice</option>
          <option value="Funny Story">Funny Story</option>
          <option value="Confession">Confession</option>
          <option value="Embarrassing Moments">Embarrassing Moments</option>
          <option value="Relationship">Relationship</option>
          <option value="Academic Struggles">Academic Struggles</option>
        </select>
      </div>

      {/* Confession Cards */}
      <div className="confession-cards">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <PostCard key={index} post={post} /> // Pass filtered posts to PostCard
          ))
        ) : (
          <p>No posts match your search or category.</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
