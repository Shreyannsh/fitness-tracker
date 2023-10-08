import "./App.css";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/dashboard/dashboard";
import ExerciseTracking from "./Pages/excerciseTracking/exerciseTracking";
import FoodTracking from "./Pages/foodTracking/foodTracking";
import GoalTracking from "./Pages/goalTracking/goalTracking";
import Navbar from "./Components/navbar/navbar";

import Header from "./Components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

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
