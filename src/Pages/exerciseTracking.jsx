import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_EXCERCISES, ADD_EXCERCISE } from "../actions";

const ExerciseTracking = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.exerciseList);
  const error = useSelector((state) => state.error);

  const [newExcercise, setNewExcercise] = useState({
    name: "",
    duration: 0,
    caloriesBurnt: 0,
  });

  // const [name, setName] = useState("");
  // const [duration, setDuration] = useState(0);
  // const [caloriesBurnt, setCaloriesBurnt] = useState(0);
  // const typeValue = 0; // just added to do API call as on backend there will be 4 arguments;

  const addExcerciseFunction = () => {
    dispatch(ADD_EXCERCISE(newExcercise));
    //add action for adding excercise
  };

  const removeFunction = () => {
    dispatch();
    //add action for removing excercise
  };

  useEffect(() => {
    dispatch(FETCH_EXCERCISES());
  }, []);

  return (
    <div>
      <label for="name">Excersize Name</label>
      <input
        name="name"
        value={newExcercise.name}
        type="text"
        onChange={(e) =>
          setNewExcercise({ ...newExcercise, name: e.target.value })
        }
      />

      <label for="duration">Duration (in mins) </label>
      <input
        name="duration"
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
        onChange={(e) =>
          setNewExcercise({
            ...newExcercise,
            caloriesBurnt: parseInt(e.target.value * newExcercise.duration),
          })
        }
      >
        <option value="0"> Excercise type</option>
        <option value="9.0">Endurance Exercise</option>
        <option value="6.0">Strength training</option>
        <option value="8.0">Balance Exercise</option>
        <option value="2.7">Flexibility Exercise</option>
      </select>

      <label for="calories">Calories Burned</label>
      <input
        name="calories"
        value={newExcercise.caloriesBurnt}
        type="number"
        placeholder="calories burnt"
        readOnly
      />

      <button onClick={() => addExcerciseFunction()}>Add excercise</button>

      <div>
        <h1>Excercise List</h1>
      </div>

      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          state?.map(({ name, duration, caloriesBurned }) => (
            <li>
              <p>{name}</p>
              <p>{duration} mins</p>
              <p>{caloriesBurned} calories burnt</p>
              <button onClick={() => removeFunction()}>Remove</button>
            </li>
          ))
        )}
      </div>
    </div>
  );
};

export default ExerciseTracking;
