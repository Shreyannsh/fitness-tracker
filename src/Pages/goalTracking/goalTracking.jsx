import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_GOAL, FETCH_GOAL, REMOVE_GOAL } from "../../actions";

const GoalTracking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.goalList);
  //console.log(state, "goalState");

  const [newGoal, setNewGoal] = useState({
    goalName: "",
    description: "",
    targetDate: 0,
    targetCalories: 0,
  });

  //  console.log(newGoal);

  const setDateFunc = (date) => {
    // console.log(date, "inputDtae");
    const cDate = new Date(date);
    // console.log(cDate, "cDate");
    const realDate = cDate.toISOString();
    // console.log(realDate, "realDate");
    setNewGoal({
      ...newGoal,
      targetDate: realDate,
    });
  };

  const addGoalFunction = () => {
    dispatch(ADD_GOAL(newGoal));
    //add action for adding excercise
  };
  const removeFunction = (goalId) => {
    dispatch(REMOVE_GOAL(goalId));
    //add action for removing excercise
  };

  useEffect(() => {
    dispatch(FETCH_GOAL());
  }, []);

  return (
    <div>
      <label htmlFor="name">Goal Name</label>
      <input
        name="name"
        value={newGoal.goalName}
        type="text"
        onChange={(e) => setNewGoal({ ...newGoal, goalName: e.target.value })}
      />
      <label htmlFor="description">Goal Description</label>
      <input
        name="description"
        value={newGoal.description}
        type="text"
        onChange={(e) =>
          setNewGoal({ ...newGoal, description: e.target.value })
        }
      />
      <label htmlFor="date">Target Date</label>
      <input
        name="date"
        //  value={newGoal.targetDate}
        type="date"
        onChange={(e) => setDateFunc(e.target.value)}
      />
      <label htmlFor="targetCaloriesValue">Target Calories Value</label>
      <input
        name="targetCaloriesValue"
        value={newGoal.targetCalories}
        type="number"
        onChange={(e) =>
          setNewGoal({ ...newGoal, targetCalories: parseInt(e.target.value) })
        }
      />
      {/* <label htmlFor="statusSelect">Status</label>
      <select
        id="statusSelect"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="inProgress">In Progress</option>
        <option value="achieved">Achieved</option>
        <option value="abandoned">Abandoned</option>
      </select> */}
      <button onClick={() => addGoalFunction()}>Add goal</button>

      <div>
        <h1>Goal List</h1>
      </div>

      <div>
        {state?.map(
          ({
            _id,
            goalName,
            description,
            targetDate,
            targetCalories,
            status,
          }) => (
            <li key={_id}>
              <p>{goalName}</p>
              <p>Description: {description}</p>
              <p>Date: {targetDate}</p>
              <p>Calories: {targetCalories} cals</p>
              <p>Status: {status}</p>
              <button onClick={() => removeFunction(_id)}>Remove</button>
            </li>
          )
        )}
      </div>
    </div>
  );
};

export default GoalTracking;
