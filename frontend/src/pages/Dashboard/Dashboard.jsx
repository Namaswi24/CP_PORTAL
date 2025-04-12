import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-container">
          <h2>Welcome back, User!</h2>
          <div className="dashboard-stats">
            <div className="stat-box">
              <h3>Problems Solved</h3>
              <p>57</p>
            </div>
            <div className="stat-box">
              <h3>Favourites</h3>
              <p>12</p>
            </div>
            <div className="stat-box">
              <h3>Current Streak</h3>
              <p>3 days</p>
            </div>
          </div>
          <div className="dashboard-links">
            <button>Go to Daily Challenge</button>
            <button>View Contests</button>
            <button>Unsolved Problems</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
