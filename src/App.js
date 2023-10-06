import "./App.css";

import { Link, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/dashboard";
import ExerciseTracking from "./Pages/exerciseTracking";
import FoodTracking from "./Pages/foodTracking";
import GoalTracking from "./Pages/goalTracking";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <nav className="navbar">
        <h2>Fitness Tracker</h2>
        <Link to="/">Dashboard</Link>
        <Link to="excercise">Exercise Tracking</Link>
        <Link to="food">Food Tracking</Link>
        <Link to="goal">Goal Tracking</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/excercise" element={<ExerciseTracking />} />
        <Route path="/food" element={<FoodTracking />} />
        <Route path="/goal" element={<GoalTracking />} />
      </Routes>
    </div>
  );
}

export default App;
