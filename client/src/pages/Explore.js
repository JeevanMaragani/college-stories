import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import './ExplorePage.css';

const Explore = ({ posts = [] }) => {
  const [visiblePosts, setVisiblePosts] = useState(5); // Start by displaying 5 posts
  const [searchTerm, setSearchTerm] = useState('');  
  const [filterCategory, setFilterCategory] = useState('');

  // Filter posts based on search term and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.story.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  console.log('Filtered posts:', filteredPosts);
  console.log('Visible posts:', visiblePosts);

  // Load more posts when user reaches the bottom of the page
  const loadMorePosts = () => {
    if (visiblePosts < filteredPosts.length) {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5); // Load 5 more posts
    }
  };

  // Detect when user reaches the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const bottomReached = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50;
      if (bottomReached) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visiblePosts, filteredPosts.length]);

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
        {filteredPosts.slice(0, visiblePosts).map((post, index) => (
          <PostCard key={index} post={post} /> // Display only the visible posts
        ))}

        {visiblePosts >= filteredPosts.length && <p>No more stories to load.</p>}
      </div>
    </div>
  );
};

export default Explore;
