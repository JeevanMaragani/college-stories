import React, { useState } from 'react';
import './PostCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const PostCard = ({ post }) => {
  const [reactions, setReactions] = useState({
    like: 0,
  });

  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Handler for selecting a reaction
  const handleLike = () => {
    setReactions({
      ...reactions,
      like: reactions.like + 1,
    });
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
          {/* Like button and count */}
          <div className="like-container">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="icon-btn like-btn"
              onClick={handleLike}
            />
            <span className="like-count">{reactions.like}</span>
          </div>

          {/* Share and Comment buttons */}
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
