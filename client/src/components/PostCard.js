import React, { useState } from 'react';
import './PostCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faComment } from '@fortawesome/free-solid-svg-icons'; // Import icons

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false); // To control the animation state
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Handlers for the buttons
  const handleLike = () => {
    setLikes(likes + 1);
    setIsLiked(true); // Trigger the animation
    setTimeout(() => setIsLiked(false), 600); // Remove animation after 600ms
  };

  const handleShare = () => {
    alert(`Link copied: www.example.com/posts/${post.id}`);
  };

  const handleComment = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
      setShowCommentForm(false);
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
          <FontAwesomeIcon
            icon={faHeart}
            className={`icon-btn like-btn ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
          />
          <FontAwesomeIcon
            icon={faShareAlt}
            className="icon-btn share-btn"
            onClick={handleShare}
          />
          <FontAwesomeIcon
            icon={faComment}
            className="icon-btn comment-btn"
            onClick={handleComment}
          />
        </div>
      </div>

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
