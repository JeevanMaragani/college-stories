import React, { useState } from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  // State to track likes, reactions, and comments
  const [likes, setLikes] = useState(0);
  const [reactions, setReactions] = useState(0);
  const [showCommentForm, setShowCommentForm] = useState(false); // Toggle comment form
  const [comment, setComment] = useState(''); // Current comment input
  const [comments, setComments] = useState([]); // Store all comments for this post

  // Handlers for the buttons
  const handleLike = () => setLikes(likes + 1);
  const handleReact = () => setReactions(reactions + 1);
  const handleShare = () => {
    alert(`Link copied: www.example.com/posts/${post.id}`);
  };

  // Toggle comment form visibility
  const handleComment = () => {
    setShowCommentForm(!showCommentForm);
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]); // Add new comment to the array
      setComment(''); // Clear the input field
      setShowCommentForm(false); // Close the form after submitting
    }
  };

  return (
    <div className={`post-card post-category-${post.category.toLowerCase()}`}>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
      <div className="post-meta">
        <span className="post-category">{post.category}</span>
        <div className="post-actions">
          <button className="like-btn" onClick={handleLike}>
            Like ({likes})
          </button>
          {/*<button className="react-btn" onClick={handleReact}>
            React ({reactions})
          </button>*/}
          <button className="share-btn" onClick={handleShare}>
            Share
          </button>
          <button className="comment-btn" onClick={handleComment}>
            Comment
          </button>
        </div>
      </div>

      {/* Comment Form */}
      {showCommentForm && (
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here..."
            required
          />
          <button type="submit">Submit Comment</button>
        </form>
      )}

      {/* Display Comments */}
      {comments.length > 0 && (
        <div className="comment-section">
          <h4>Comments ({comments.length})</h4>
          <ul>
            {comments.map((cmt, index) => (
              <li key={index}>{cmt}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostCard;
