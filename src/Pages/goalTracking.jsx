import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_GOAL } from "../actions";

const GoalTracking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.goalList);
  console.log(state);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState();
  const [targetCaloriesValue, setTargetCaloriesValue] = useState(0);
  const [status, setStatus] = useState("");

  const addGoalFunction = () => {
    dispatch();
    //add action for adding excercise
  };
  const removeFunction = () => {
    dispatch();
    //add action for removing excercise
  };

  useEffect(() => {
    dispatch(FETCH_GOAL());
  }, []);

  return (
    <div>
      <label for="name">Goal Name</label>
      <input
        name="name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <label for="description">Goal Description</label>
      <input
        name="description"
        value={description}
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label for="date">Target Date</label>
      <input
        name="date"
        value={targetDate}
        type="date"
        onChange={(e) => setTargetDate(e.target.value)}
      />
      <label for="targetCaloriesValue">Target Calories Value</label>
      <input
        name="targetCaloriesValue"
        value={targetCaloriesValue}
        type="number"
        onChange={(e) => setTargetCaloriesValue(e.target.value)}
      />
      <label htmlFor="statusSelect">Status</label>
      <select
        id="statusSelect"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="inProgress">In Progress</option>
        <option value="achieved">Achieved</option>
        <option value="abandoned">Abandoned</option>
      </select>
      <button onClick={() => addGoalFunction()}>Add goal</button>

      <div>
        <h1>Goal List</h1>
      </div>

      <div>
        {state?.map(
          ({ name, description, date, targetCaloriesValue, status }) => (
            <li>
              <p>{name}</p>
              <p>{description}</p>
              <p>{date}</p>
              <p>{targetCaloriesValue}</p>
              <p>{status}</p>
              <button onClick={() => removeFunction()}>Remove</button>
            </li>
          )
        )}
      </div>
    </div>
  );
};

export default GoalTracking;
