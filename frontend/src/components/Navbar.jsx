import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CP Practice Portal</div>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/daily-challenge">Daily Challenge</Link>
        <Link to="/problems">Problems</Link>
        <Link to="/contests">Contests</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
