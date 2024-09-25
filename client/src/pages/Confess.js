import React, { useState } from 'react';
import './Confess.css'; //<-- Link to your css file

const Confess = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [category, setCategory] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState(''); // State for confirmation message

  const handleSubmit = (e) => {
    e.preventDefault();
    if (story.trim() && category) {
      const newPost = {
        title: title || 'An Anonymous Confession', // Generate default title if not provided
        story,
        category,
      };
      addPost(newPost); // Call the addPost function passed from App.js to add the new confession
      setTitle('');
      setStory('');
      setCategory('');
      setConfirmationMessage('Your confession has been successfully submitted!'); // Set confirmation message
    }
  };

  return (
    <div className="confess-container">
      <h1>Submit Confession</h1>
      <form onSubmit={handleSubmit} className="confess-form">
        <label htmlFor="title">Title (Optional):</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title (optional)"
        />

        <label htmlFor="story">Your Story:</label>
        <textarea
          id="story"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Write your confession or story..."
          required
        ></textarea>

        <label htmlFor="category">Choose Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Admiration">Admiration</option>
          <option value="Career Advice">Career Advice</option>
          <option value="Funny Story">Funny Story</option>
          <option value="Confession">Confession</option>
          <option value="Embarrassing Moments">Embarrassing Moments</option>
          <option value="Relationship">Relationship</option>
          <option value="Academic Struggles">Academic Struggles</option>
        </select>

        <button type="submit">Submit Confession</button>
      </form>

      {/* Display confirmation message */}
      {confirmationMessage && (
        <p className="confirmation-message">{confirmationMessage}</p>
      )}
    </div>
  );
};

export default Confess;
