import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashboard from "./Pages/dashboard/dashboard";
import ExerciseTracking from "./Pages/excerciseTracking/exerciseTracking";
import FoodTracking from "./Pages/foodTracking/foodTracking";
import GoalTracking from "./Pages/goalTracking/goalTracking";
import Navbar from "./Components/navbar/navbar";
import Header from "./Components/header/header";
import { useSelector } from "react-redux";

import Loader from "./Components/loader/loader";

function App() {
  const loading = useSelector((state) => state.loading);

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Navbar />
      <Loader loading={loading} />
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
