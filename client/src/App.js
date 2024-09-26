import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Confess from './pages/Confess';
import Communities from './pages/Communities';
import './App.css'; // Import the updated CSS file for styling

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    console.log('New confession added:', newPost);
    const postWithMetadata = {
      ...newPost,
      likes: 0,
      date: Date.now(),
    };
    setPosts((prevPosts) => [...prevPosts, postWithMetadata]);
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
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/confess">Confess</Link></li>
              <li><Link to="/communities">Communities</Link></li>
              <li><Link to="/">Home</Link></li>
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

        {/* Floating Action Button for Confession */}
        <div className="fab">
          <Link to="/confess">
            <button className="fab-button">+</button>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
