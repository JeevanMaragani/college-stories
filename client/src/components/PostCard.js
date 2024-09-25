import React, { useState } from 'react';
import './PostCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Icons for share, comment, like

const PostCard = ({ post }) => {
  const [reactions, setReactions] = useState({
    like: 0,
    love: 0,
    haha: 0,
    wow: 0,
    sad: 0,
    angry: 0,
  });

  const [showReactionPopup, setShowReactionPopup] = useState(false); // For showing the popup on hover/click
  const [selectedReaction, setSelectedReaction] = useState('like'); // To track the selected reaction
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Handler for showing reaction popup
  const handleShowReactions = () => {
    setShowReactionPopup(true);
  };

  // Handler for hiding reaction popup
  const handleHideReactions = () => {
    setTimeout(() => setShowReactionPopup(false), 200); // Small delay to allow reaction selection
  };

  // Handler for selecting a reaction
  const handleReactionSelect = (type) => {
    setReactions({
      ...reactions,
      [type]: reactions[type] + 1,
    });
    setSelectedReaction(type); // Update the selected reaction
    setShowReactionPopup(false); // Hide the reaction popup after selecting
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
          {/* Like button with reactions popup */}
          <div
            className="like-container"
            onMouseEnter={handleShowReactions} // Show on hover
            onMouseLeave={handleHideReactions} // Hide on leave
          >
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="icon-btn like-btn"
              onClick={() => handleReactionSelect('like')}
            />
            <span>{reactions[selectedReaction]}</span>

            {/* Reaction Popup */}
            {showReactionPopup && (
              <div className="reaction-popup">
                <span
                  className="reaction"
                  role="img"
                  aria-label="like"
                  onClick={() => handleReactionSelect('like')}
                >
                  👍
                </span>
                <span
                  className="reaction"
                  role="img"
                  aria-label="love"
                  onClick={() => handleReactionSelect('love')}
                >
                  ❤️
                </span>
                <span
                  className="reaction"
                  role="img"
                  aria-label="haha"
                  onClick={() => handleReactionSelect('haha')}
                >
                  😂
                </span>
                <span
                  className="reaction"
                  role="img"
                  aria-label="wow"
                  onClick={() => handleReactionSelect('wow')}
                >
                  😲
                </span>
                <span
                  className="reaction"
                  role="img"
                  aria-label="sad"
                  onClick={() => handleReactionSelect('sad')}
                >
                  😢
                </span>
                <span
                  className="reaction"
                  role="img"
                  aria-label="angry"
                  onClick={() => handleReactionSelect('angry')}
                >
                  😡
                </span>
              </div>
            )}
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
