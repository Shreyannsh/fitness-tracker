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
import HomePage from "./Pages/homePage/homePage";
import About from "./Pages/about/about";

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
      <div className="mainPages">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/excercise" element={<ExerciseTracking />} />
          <Route path="/food" element={<FoodTracking />} />
          <Route path="/goal" element={<GoalTracking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
