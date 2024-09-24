import React, { useState } from 'react';

const Confess = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      category,
    };
    addPost(newPost); // Pass new post to parent
    setTitle('');
    setContent('');
    setCategory('');
  };

  return (
    <div>
      <h1>Confess Your Story</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your confession or story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Choose Category</option>
            <option value="Admiration">Admiration</option>
            <option value="Career">Career Advice</option>
            <option value="Funny">Funny Story</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Confess;
