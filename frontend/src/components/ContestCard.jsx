import React from "react";
import "./ContestCard.css";

const ContestCard = ({ name, platform, startTime, duration, link }) => {
  return (
    <div className="contest-card">
      <h3>{name}</h3>
      <p><strong>Platform:</strong> {platform}</p>
      <p><strong>Start Time:</strong> {startTime}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <a href={link} target="_blank" rel="noreferrer">Register</a>
    </div>
  );
};

export default ContestCard;
