import React, { useState } from "react";
import styles from "./Feedbacks.module.css";

const Feedbacks = () => {
  const [feedback, setFeedback] = useState("");
  const [comments, setComments] = useState(["Good", "Great experience!"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() !== "") {
      setComments([...comments, feedback]);
      setFeedback(feedback);
      console.log(feedback);
    }
  };

  return (
    <div className={styles.feedbackContainer}>
      <h2 className={styles.heading}>Share Your Feedback</h2>

      <form onSubmit={handleSubmit} className={styles.feedbackForm}>
        <textarea
          className={styles.textarea}
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>

      <div className={styles.commentsSection}>
        <h3 className={styles.subheading}>User Feedback</h3>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className={styles.commentBox}>
              <p>{comment}</p>
            </div>
          ))
        ) : (
          <p className={styles.noComments}>
            No feedback yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default Feedbacks;
