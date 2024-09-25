import React, { useState, useEffect } from 'react';
import './Confess.css'; //<-- Link to your css file

const Confess = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [category, setCategory] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState(''); // State for confirmation message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  // Automatically generate a title based on the selected category
  useEffect(() => {
    if (category) {
      switch (category) {
        case 'Admiration':
          setTitle('An Admirable Story');
          break;
        case 'Career Advice':
          setTitle('Career Insights');
          break;
        case 'Funny Story':
          setTitle('A Funny College Moment');
          break;
        case 'Confession':
          setTitle('A College Confession');
          break;
        case 'Embarrassing Moments':
          setTitle('An Embarrassing Incident');
          break;
        case 'Relationship':
          setTitle('A Relationship Experience');
          break;
        case 'Academic Struggles':
          setTitle('Challenges in Academics');
          break;
        default:
          setTitle('');
      }
    }
  }, [category]); // Runs when the category changes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ensure the user selects a category before submission
    if (!category) {
      setErrorMessage('Please select a category before submitting your confession.');
      return;
    }

    if (story.trim() && category) {
      const newPost = {
        title: title || 'An Anonymous Confession', // Default title if none is provided
        story,
        category,
      };
      console.log('Form submission:', newPost);
      addPost(newPost); // Call the addPost function passed from App.js
      setTitle(''); // Clear title after submission
      setStory(''); // Clear story after submission
      setCategory(''); // Clear category after submission
      setConfirmationMessage('Your confession has been successfully submitted!');
      setErrorMessage(''); // Clear any error message
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
          onChange={(e) => setTitle(e.target.value)} // Allow the user to overwrite the auto-generated title
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
          required // This will force the user to select a category
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

        {/* Show error message if no category is selected */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

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
