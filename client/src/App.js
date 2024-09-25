import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Confess from './pages/Confess';
import Communities from './pages/Communities';
import './App.css'; // Import the CSS file for styling

function App() {
  // Start with an empty posts array instead of hardcoded confessions
  const [posts, setPosts] = useState([]); 

  // Correctly add new posts
  const addPost = (newPost) => {
    console.log('New confession added:', newPost);
    setPosts((prevPosts) => [...prevPosts, newPost]); // Add new posts to the END of the list
  };

  return (
    <Router>
      <div>
        {/* Fixed Header */}
        <header>
          <div className="logo">
            <Link to="/">College Stories</Link>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/confess">Confess</Link></li>
              <li><Link to="/communities">Communities</Link></li>
            </ul>
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore posts={posts} />} />
          <Route path="/confess" element={<Confess addPost={addPost} />} />
          <Route path="/communities" element={<Communities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
