import "../../commonModalCss.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_EXCERCISE } from "../../actions";

import { toast } from "react-toastify";

export default function AddExerciseModal(props) {
  const dispatch = useDispatch();
  const [newExcercise, setNewExcercise] = useState({
    name: "",
    duration: 0,
    calories: 0,
  });

  const addExcerciseFunction = () => {
    if (
      newExcercise.name !== "" &&
      newExcercise.duration !== 0 &&
      newExcercise.calories !== 0
    ) {
      dispatch(ADD_EXCERCISE(newExcercise));
      props.onClose();
    } else {
      toast.error("missing fields!");
    }
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="parent">
      <div className="inner">
        <span className="closeBtn" onClick={() => props.onClose()}>
          X
        </span>
        <label htmlFor="exerciseName">Excersize Name</label>
        <input
          className="input"
          id="exerciseName"
          value={newExcercise.name}
          type="text"
          onChange={(e) =>
            setNewExcercise({ ...newExcercise, name: e.target.value })
          }
        />

        <label htmlFor="duration">Duration (in mins) </label>
        <input
          className="input"
          id="duration"
          value={newExcercise.duration}
          type="number"
          onChange={(e) =>
            setNewExcercise({
              ...newExcercise,
              duration: parseInt(e.target.value),
            })
          }
        />

        <select
          className="input"
          onChange={(e) =>
            setNewExcercise({
              ...newExcercise,
              calories: parseInt(e.target.value * newExcercise.duration),
            })
          }
        >
          <option value="0"> Excercise type</option>
          <option value="9.0">Endurance Exercise</option>
          <option value="6.0">Strength training</option>
          <option value="8.0">Balance Exercise</option>
          <option value="2.7">Flexibility Exercise</option>
        </select>

        <label htmlFor="caloriesBurned">Calories Burned</label>
        <input
          className="input"
          id="caloriesBurned"
          value={newExcercise.calories}
          type="number"
          placeholder="calories burnt"
          readOnly
        />

        <button className="addBtn" onClick={() => addExcerciseFunction()}>
          Add excercise
        </button>
      </div>
    </div>
  );
}
