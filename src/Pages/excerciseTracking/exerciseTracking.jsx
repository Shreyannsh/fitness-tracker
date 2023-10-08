import "./exerciseTracking.css";

import { RiDeleteBin5Line } from "react-icons/ri";

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
      <AddExerciseModal onClose={() => setShow(false)} show={show} />

      <div>
        <h1>Excercise List</h1>
      </div>

      <div className="exerciseList">
        <button
          className="exercise addExerciseBtn"
          onClick={() => setShow(true)}
        >
          Add Excercise
        </button>
        {state?.map(({ _id, name, duration, caloriesBurned }) => (
          <li key={_id} className="exercise">
            <p>{name}</p>
            <p>{duration} mins</p>
            <p>{caloriesBurned} calories burnt</p>
            <span onClick={() => removeFunction(_id)}>
              <RiDeleteBin5Line className="removeBtn" />
            </span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ExerciseTracking;
