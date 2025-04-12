import React from "react";
import "./StreakCard.css";

const StreakCard = ({ streak, problem, onSolve }) => {
  return (
    <div className="streak-card">
      <h3>🔥 Daily Challenge</h3>
      <p><strong>Title:</strong> {problem.title}</p>
      <p><strong>Platform:</strong> {problem.platform}</p>
      <a href={problem.url} target="_blank" rel="noreferrer">Solve Now</a>
      <button onClick={onSolve}>Mark as Solved</button>
      <p className="streak-info">🔥 Streak: {streak} Days</p>
    </div>
  );
};

export default StreakCard;
