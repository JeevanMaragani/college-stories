import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Confess from './pages/Confess';
import Communities from './pages/Communities';
import './App.css'; // Import the CSS file for styling

function App() {
  const [posts, setPosts] = useState([
    { title: 'Confession 1', story: 'This is the first confession.', category: 'Admiration' },
    { title: 'Confession 2', story: 'Another story about college.', category: 'Relationships' },
    { title: 'Confession 3', story: 'Struggling with academics.', category: 'Academic Struggles' },
    { title: 'Confession 4', story: 'A funny moment in class.', category: 'Funny Story' },
    { title: 'Confession 5', story: 'Career advice from an alum.', category: 'Career Advice' }
  ]);

  // Ensure that new posts are added to the top of the list
  const addPost = (newPost) => {
    console.log('New confession added:', newPost);
    setPosts((prevPosts) => {
      console.log('Previous posts:', prevPosts);
      return [newPost, ...prevPosts]; // Add new posts to the top of the list
    });
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
