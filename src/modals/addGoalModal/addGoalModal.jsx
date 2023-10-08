import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_GOAL } from "../../actions";

import "./addGoalModal.css";

export default function AddGoalModal(props) {
  const dispatch = useDispatch();
  const [newGoal, setNewGoal] = useState({
    goalName: "",
    description: "",
    targetDate: 0,
    targetCalories: 0,
  });

  const setDateFunc = (date) => {
    const cDate = new Date(date);
    const realDate = cDate.toISOString();
    setNewGoal({
      ...newGoal,
      targetDate: realDate,
    });
  };

  const addGoalFunction = () => {
    dispatch(ADD_GOAL(newGoal));
    props.onClose();
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="parentGoal">
      <div className="innerGoal">
        <span className="closeBtn" onClick={() => props.onClose()}>
          X
        </span>
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
      </div>
    </div>
  );
}
