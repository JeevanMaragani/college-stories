import React, { useState } from 'react';
import './PostCard.css'; // Ensure your PostCard.css contains the correct styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const PostCard = ({ post }) => {
  // Initialize states for likes, comments, form visibility, and new comment
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [newComment, setNewComment] = useState('');

  // Handle like and unlike functionality
  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]); // Add the new comment to the list
      setNewComment(''); // Clear the input field
    }
  };

  // Handle post sharing
  const handleShare = () => {
    navigator.clipboard.writeText(`www.example.com/posts/${post.id}`); // Simulate post URL copy
    alert('Link copied!'); // Notify the user
  };

  return (
    <div className="post-card">
      {/* Render the title, story, and category */}
      <h3>{post.title || 'An Anonymous Confession'}</h3>
      <p>{post.story}</p>
      <span>{post.category}</span>

      {/* Like, Comment, and Share buttons */}
      <div className="post-actions">
        <div className="action-buttons">
          {/* Like button with dynamic count */}
          <button className={`like-btn ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} />
            <span className="like-count">{likes}</span>
          </button>

          {/* Comment button showing the comment count */}
          <button className="comment-btn" onClick={() => setShowCommentForm(!showCommentForm)}>
            <FontAwesomeIcon icon={faComment} />
            <span className="comment-count">{comments.length}</span>
          </button>

          {/* Share button to copy the post URL */}
          <button className="share-btn" onClick={handleShare}>
            <FontAwesomeIcon icon={faShare} />
          </button>
        </div>
      </div>

      {/* Comment Form: Visible when comment button is clicked */}
      {showCommentForm && (
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      {/* Display Comments */}
      {comments.length > 0 && (
        <div className="comment-section">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
