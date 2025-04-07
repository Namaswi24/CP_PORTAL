import React, { useState } from "react";
import "./Home.css";
import backgroundImage from "../../assets/background.jpg";

const Home = () => {
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <div className="home-container">

        <form className="home-form">
          <h2>{currState}</h2>
          
          {currState === "Sign up" && (
            <input type="text" placeholder="Username" className="form-input" required />
          )}
          
          <input type="email" placeholder="Email address" className="form-input" required />
          <input type="password" placeholder="Password" className="form-input" required />
          
          <button type="submit">
            {currState === "Sign up" ? "Create Account" : "Login Now"}
          </button>

          <div className="home-term">
            <input type="checkbox" /> 
            <p>Agree to the terms of use & privacy policy.</p>
          </div>

          <div className="home-toggle">
            {currState === "Sign up" ? (
              <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
            ) : (
              <p>Don't have an account? <span onClick={() => setCurrState("Sign up")}>Sign up</span></p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
