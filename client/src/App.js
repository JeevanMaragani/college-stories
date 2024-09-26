import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Confess from './pages/Confess';
import Communities from './pages/Communities';
import './App.css'; // Import the updated CSS file for styling
import { faHome, faSearch, faUsers, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [posts, setPosts] = useState([]);

  // Add new posts with metadata (likes, date)
  const addPost = (newPost) => {
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
              {/* Reordered Links: Home first */}
              <li><Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link></li>
              <li><Link to="/explore"><FontAwesomeIcon icon={faSearch}/> Explore</Link></li>
              <li><Link to="/communities"><FontAwesomeIcon icon={faUsers}/> Communities</Link></li>
              <li className="confess-link"><Link to="/confess"><FontAwesomeIcon icon={faComment}/> Confess</Link></li> {/* Hidden on mobile but visible on web */}
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
            <button className="fab-button">
              +
              <span className="fab-tooltip">Submit Confession</span>
            </button>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
