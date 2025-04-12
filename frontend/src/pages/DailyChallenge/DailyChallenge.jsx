import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import StreakCard from "../../components/StreakCard/StreakCard";
import "./DailyChallenge.css";

const DailyChallenge = () => {
  const streak = 3;
  const problem = {
    title: "Two Sum",
    platform: "LeetCode",
    url: "https://leetcode.com/problems/two-sum",
  };

  const handleSolve = () => {
    // Logic to update streak, maybe send to backend
    alert("Problem marked as solved! 🔥");
  };

  return (
    <>
      <Navbar />
      <div className="daily-challenge">
        <div className="daily-container">
          <h2>Daily Challenge</h2>
          <StreakCard streak={streak} problem={problem} onSolve={handleSolve} />
        </div>
      </div>
    </>
  );
};

export default DailyChallenge;
