import React from 'react';

function Home() {
  return (
    <div>
      <h1 className="welcome-title">Welcome to College Stories</h1>
      <div className="home-featured-stories">
        <div className="featured-story">
          <h3>Featured Story 1</h3>
          <p>This is a featured confession or story.</p>
        </div>
        <div className="featured-story">
          <h3>Featured Story 2</h3>
          <p>Another featured confession or story.</p>
        </div>
        <div className="featured-story">
          <h3>Featured Story 3</h3>
          <p>Yet another story, adding to the home page.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
