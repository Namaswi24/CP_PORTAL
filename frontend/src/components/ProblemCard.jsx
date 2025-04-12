import React from "react";
import "./ProblemCard.css";

const ProblemCard = ({ title, platform, difficulty, tags, url }) => {
  return (
    <div className="problem-card">
      <h3>{title}</h3>
      <p><strong>Platform:</strong> {platform}</p>
      <p><strong>Difficulty:</strong> {difficulty}</p>
      <p><strong>Tags:</strong> {tags.join(", ")}</p>
      <a href={url} target="_blank" rel="noreferrer">Solve Now</a>
    </div>
  );
};

export default ProblemCard;
