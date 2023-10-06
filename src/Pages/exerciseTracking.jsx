import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_EXCERCISES } from "../actions";

const ExerciseTracking = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.exerciseList);
  console.log(state, "state");
  const error = useSelector((state) => state.error);

  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [caloriesBurnt, setCaloriesBurnt] = useState(0);

  const addExcerciseFunction = () => {
    dispatch();
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
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <label for="duration">Duration (in mins) </label>
      <input
        name="duration"
        value={duration}
        type="number"
        onChange={(e) => setDuration(e.target.value)}
      />

      <label for="calories">Calories Burned</label>
      <input
        name="calories"
        value={caloriesBurnt}
        type="number"
        onChange={(e) => setCaloriesBurnt(e.target.value)}
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
