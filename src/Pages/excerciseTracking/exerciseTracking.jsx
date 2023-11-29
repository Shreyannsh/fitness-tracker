import "./exerciseTracking.css";
import "../../commonPageCss.css";

import { RiDeleteBin5Line } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { REMOVE_EXCERCISE, FETCH_EXCERCISES } from "../../reducer/actions";

import AddExerciseModal from "../../modals/addExcerciseModal/addExcerciseModal";
import { useState, useEffect } from "react";

const ExerciseTracking = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const state = useSelector((state) => state.exerciseList);
  const loading = useSelector((state) => state.loading);

  const removeFunction = (excerciseId) => {
    dispatch(REMOVE_EXCERCISE(excerciseId));
  };

  useEffect(() => {
    dispatch({ type: "IS_ACTIVE", payload: "excercise" });
    dispatch(FETCH_EXCERCISES());
  }, []);

  console.log(state.length, loading);

  return (
    <div className="pageParent">
      <AddExerciseModal onClose={() => setShow(false)} show={show} />
      <div className="title">
        <h1>Excercise List</h1>
      </div>

      <div className="list">
        <button className="addNewBtn" onClick={() => setShow(true)}>
          Add Excercise
        </button>
        {state.length <= 0 && loading === false ? (
          <div className="emptyListTextBox">
            <h1 className="emptyListText">EMPTY LIST !</h1>
          </div>
        ) : (
          state?.map(({ _id, name, duration, caloriesBurned }) => (
            <li key={_id} className="individualComponent exercise">
              <p>
                <b>{name}</b>
              </p>
              <p>{duration} mins</p>
              <p>{caloriesBurned} calories burnt </p>
              <p></p>
              <span onClick={() => removeFunction(_id)}>
                <RiDeleteBin5Line className="removeBtn" />
              </span>
            </li>
          ))
        )}
      </div>
    </div>
  );
};

export default ExerciseTracking;
