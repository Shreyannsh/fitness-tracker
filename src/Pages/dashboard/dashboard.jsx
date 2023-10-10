import "./dashboard.css";

import { useDispatch, useSelector } from "react-redux";
import { FETCH_FOOD, FETCH_GOAL, FETCH_EXCERCISES } from "../../actions";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "IS_ACTIVE", payload: "dashboard" });
    dispatch(FETCH_EXCERCISES());
    dispatch(FETCH_FOOD());
    dispatch(FETCH_GOAL());
  }, []);

  const exerciseList = useSelector((state) => state.exerciseList);
  const foodList = useSelector((state) => state.foodList);
  const goalList = useSelector((state) => state.goalList);

  const totalCaloriesBurnt = exerciseList?.reduce(
    (acc, crr) => acc + crr.caloriesBurned,
    0
  );

  const totalCaloriesConsumed = foodList?.reduce(
    (acc, crr) => acc + crr.calories,
    0
  );

  const totalCaloriesGoal = goalList?.reduce(
    (acc, crr) => acc + crr.targetCalories,
    0
  );

  return (
    <div className="outer">
      <div className="dashboard">
        <div className="category">
          <p className="text a">{totalCaloriesBurnt}</p>
          <h3>Total Calories Burned</h3>
        </div>
        <div className="category">
          <p className="text b">{totalCaloriesConsumed}</p>
          <h3>Total Calories Consumed</h3>
        </div>

        <div className="category2">
          <p className="text c">{totalCaloriesGoal}</p>
          <h3>Total Calories Goal</h3>
        </div>
        <div className="category2">
          <p className="text d">
            {totalCaloriesGoal - (totalCaloriesConsumed - totalCaloriesBurnt)}
          </p>
          <h3>Total Calories to Goal</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
