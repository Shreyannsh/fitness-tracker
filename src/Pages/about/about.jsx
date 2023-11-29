import { useEffect } from "react";
import "./about.css";
import { useDispatch } from "react-redux";

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "IS_ACTIVE", payload: "about" });
  }, []);

  return (
    <div className="aboutPage">
      <h1>About</h1>
      <h3>Dashboard</h3>
      <p>
        - Dashboard shows 4 calculated values calories burnt, calories consumed,
        calories to be burnt from exercise tracking, food tracking ,goal
        tracking respectively and calories left to be burnt to achieve goal.
      </p>
      <h3>Excercise Tracking</h3>
      <p>- Add excercise option is available on this page.</p>
      <p>- List of all added excercises will be listed here.</p>
      <p>
        - Any particular excercise can be removed if required with option to
        remove.
      </p>
      <h3>Food Tracking</h3>
      <p>- Add food item option is available on this page.</p>
      <p>- List of all added food items will be listed here.</p>
      <p>
        - Any particular food item can be removed if required with option to
        remove.
      </p>
      <h3>Goal Tracking</h3>
      <p>- Add goal option is available on this page.</p>
      <p>- List of all added goals will be listed here.</p>
      <p>
        - Any particular goal can be removed if required with option to remove.
      </p>
    </div>
  );
}

export default About;
