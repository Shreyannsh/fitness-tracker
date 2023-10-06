import { useSelector } from "react-redux";

const Dashboard = () => {
  const state = useSelector((state) => state.dashboard);

  return (
    <div className="dashboard">
      <div className="category">
        <p>{state.totalCaloriesBurnt}</p>
        <h3>Total Calories Burned</h3>
      </div>
      <div className="category">
        <p>{state.totalCaloriesConsumed}</p>
        <h3>Total Calories Consumed</h3>
      </div>

      <div className="category">
        <p>{state.totalCaloriesGoal}</p>
        <h3>Total Calories Goal</h3>
      </div>
      <div className="category">
        <p>{state.remainingCaloriesToGoal}</p>
        <h3>Total Calories to Goal</h3>
      </div>
    </div>
  );
};

export default Dashboard;
