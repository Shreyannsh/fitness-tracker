import "./homePage.css";

import { Link } from "react-router-dom";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "IS_ACTIVE", payload: "" });
  }, []);

  return (
    <div className="homePage">
      <div className="upperSection">
        <div className="welcomeText">
          {/* <h1>Train insane or remain the same. </h1> */}
          <h1>Excuses don't burn calories.</h1>
          <h1>Excercise does.</h1>
          {/* <h1 className="welcomeMsg">Fitness Tracker for you.</h1> */}
        </div>
        <div className="btnSection">
          <Link to="/dashboard" className="startBtn">
            START JOURNEY
          </Link>
        </div>
      </div>

      <p className="description">
        Keep your fitness goals track upto date by maintaining your excerise
        detials and food intake. Fitness tracker will tell you how much calories
        you need to achieve you goals.
      </p>
    </div>
  );
}

export default HomePage;
