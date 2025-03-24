import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ProblemList from './pages/ProblemList/ProblemList.jsx';
import DailyChallenge from './pages/DailyChallenge/DailyChallenge.jsx';
import Favorites from './pages/Favorites/Favorites.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/problems" element={<ProblemList />} />
        <Route path="/daily-challenge" element={<DailyChallenge />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
