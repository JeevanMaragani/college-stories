import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Confess from './pages/Confess';
import Communities from './pages/Communities';

function App() {
  const [posts, setPosts] = useState([]); // Initialize an empty posts array

  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Add the new post to the existing posts
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/confess">Confess</Link></li>
            <li><Link to="/communities">Communities</Link></li>
          </ul>
        </nav>

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
