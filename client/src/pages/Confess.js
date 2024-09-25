import React, { useState } from 'react';
import './ConfessionForm.css'; // Make sure this CSS file exists for styling

const ConfessionForm = () => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [category, setCategory] = useState('Admiration');
  const [generatedTitle, setGeneratedTitle] = useState('');

  const categories = [
    'Admiration',
    'Career Advice',
    'Funny Story',
    'Confession',
    'Love',
    'Embarrassing Moments',
    'Campus Life',
    'Mental Health',
    'Roommate Stories',
    'Advice Requests',
    'Achievements',
    'Random Thoughts',
    'Hobbies and Passions',
    'Events'
  ];

  // Function to generate default title based on category
  const generateDefaultTitle = (category) => {
    switch (category) {
      case 'Admiration':
        return 'Anonymous Admiration';
      case 'Career Advice':
        return 'Seeking Career Guidance';
      case 'Funny Story':
        return 'A Funny Incident';
      case 'Confession':
        return 'An Anonymous Confession';
      case 'Love':
        return 'A Love Confession';
      case 'Embarrassing Moments':
        return 'An Embarrassing Story';
      case 'Campus Life':
        return 'A Campus Experience';
      case 'Mental Health':
        return 'Mental Health Thoughts';
      case 'Roommate Stories':
        return 'A Roommate Incident';
      case 'Advice Requests':
        return 'Seeking Advice';
      case 'Achievements':
        return 'Celebrating Achievements';
      case 'Random Thoughts':
        return 'A Random Thought';
      case 'Hobbies and Passions':
        return 'Sharing My Passion';
      case 'Events':
        return 'An Event Experience';
      default:
        return 'A Story';
    }
  };

  // Handle category change and auto-generate title
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    // If the user hasn't manually entered a title, generate one
    if (!title.trim()) {
      const defaultTitle = generateDefaultTitle(selectedCategory);
      setGeneratedTitle(defaultTitle);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalTitle = title.trim() ? title : generatedTitle;

    // Get existing confessions from local storage or an empty array
    const existingConfessions = JSON.parse(localStorage.getItem('confessions')) || [];

    // Add the new confession
    const newConfession = {
      title: finalTitle,
      story: story,
      category: category
    };

    // Save updated confessions list to local storage
    const updatedConfessions = [...existingConfessions, newConfession];
    localStorage.setItem('confessions', JSON.stringify(updatedConfessions));

    // Reset form
    setTitle('');
    setStory('');
    setCategory('Admiration');
    setGeneratedTitle('');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        Title (Optional):
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={generatedTitle || 'Title will be generated based on category'}
          autoComplete="off"
        />
      </label>

      <label>
        Your Story:
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Write your confession or story..."
          required
        />
      </label>

      <label>
        Choose Category:
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Submit Confession</button>
    </form>
  );
};

export default ConfessionForm;
