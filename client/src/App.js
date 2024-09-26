import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Confess from './pages/Confess';
import Communities from './pages/Communities';
import './App.css'; // Import the updated CSS file for styling

function App() {
  // Start with an empty posts array instead of hardcoded confessions
  const [posts, setPosts] = useState([]);

  // Correctly add new posts with 'likes' and 'date' properties
  const addPost = (newPost) => {
    console.log('New confession added:', newPost);
    const postWithMetadata = {
      ...newPost,
      likes: 0, // Initialize likes to 0
      date: Date.now() // Store the current timestamp
    };
    setPosts((prevPosts) => [...prevPosts, postWithMetadata]); // Add new posts to the END of the list
  };

  return (
    <Router>
      <div>
        {/* Header with large title and navigation links */}
        <header>
          <h1>College Stories</h1> {/* Large, bold title */}
          <nav>
            <ul>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/confess">Confess</Link></li>
              <li><Link to="/communities">Communities</Link></li>
              <li><Link to="/">Home</Link></li> {/* Home link placed last */}
            </ul>
          </nav>
        </header>

        {/* Page Routes */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore posts={posts} />} />
            <Route path="/confess" element={<Confess addPost={addPost} />} />
            <Route path="/communities" element={<Communities />} />
          </Routes>
        </div>

        {/* Optional Footer */}
        <footer>
          <p>&copy; {new Date().getFullYear()} College Stories</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
