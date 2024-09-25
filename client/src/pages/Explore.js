import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import './ExplorePage.css';

const Explore = ({ posts = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');  // State for search term
  const [filterCategory, setFilterCategory] = useState('');  // State for category filter
  const [sortOrder, setSortOrder] = useState('recent');  // State for sorting (recent or popular)

  // Filter posts based on search term and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.story.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort posts based on selected sort order
  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortOrder === 'recent') {
      return b.date - a.date;  // Assuming 'date' is a timestamp
    } else if (sortOrder === 'popular') {
      return b.likes - a.likes;  // Assuming 'likes' is a count
    }
    return 0;
  });

  return (
    <div className="explore-container">
      <h2>Explore Stories</h2>

      {/* Search, Filter, and Sort Inputs */}
      <div className="search-filter-sort">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  // Update search term
        />

        {/* Filter by Category */}
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

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          className="sort-dropdown"  // Add class for styling
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Confession Cards */}
      <div className="confession-cards">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post, index) => (
            <PostCard key={index} post={post} />  // Render filtered and sorted posts
          ))
        ) : (
          <p>No confessions available.</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
