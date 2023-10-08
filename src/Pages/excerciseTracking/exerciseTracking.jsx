import "./exerciseTracking.css";

import { useDispatch, useSelector } from "react-redux";
import { REMOVE_EXCERCISE } from "../../actions";

import AddExerciseModal from "../../modals/addExcerciseModal/addExcerciseModal";
import { useState } from "react";

const ExerciseTracking = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const state = useSelector((state) => state.exerciseList);
  const error = useSelector((state) => state.error);

  const removeFunction = (excerciseId) => {
    dispatch(REMOVE_EXCERCISE(excerciseId));
  };

  return (
    <div className="excercisePage">
      <button onClick={() => setShow(true)}>Add excercise</button>
      <AddExerciseModal onClose={() => setShow(false)} show={show} />

      <div>
        <h1>Excercise List</h1>
      </div>

      <div>
        {state?.map(({ _id, name, duration, caloriesBurned }) => (
          <li key={_id}>
            <p>{name}</p>
            <p>{duration} mins</p>
            <p>{caloriesBurned} calories burnt</p>
            <button onClick={() => removeFunction(_id)}>Remove</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ExerciseTracking;