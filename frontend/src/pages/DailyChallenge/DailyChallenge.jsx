import React from "react";
import "./DailyChallenge.css";

const DailyChallenge = () => {
  return (
    <div className="daily-challenge">
      <div className="daily-container">
        <h2>Daily Challenge</h2>
        <div className="challenge-box">
          <h3>Today's Problem</h3>
          <p><strong>Title:</strong> Two Sum</p>
          <p><strong>Platform:</strong> LeetCode</p>
          <a href="https://leetcode.com/problems/two-sum" target="_blank" rel="noreferrer">Solve Now</a>
          <button className="btn-solved">Mark as Solved</button>
        </div>
        <p className="streak-info">🔥 Streak: 3 Days</p>
      </div>
    </div>
  );
};

export default DailyChallenge;
