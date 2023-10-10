import "./goalTracking.css";

import { RiDeleteBin5Line } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { REMOVE_GOAL, FETCH_GOAL } from "../../actions";

import AddGoalModal from "../../modals/addGoalModal/addGoalModal";
import { useState, useEffect } from "react";

const GoalTracking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.goalList);

  const [show, setShow] = useState(false);

  const removeFunction = (goalId) => {
    dispatch(REMOVE_GOAL(goalId));
  };

  useEffect(() => {
    dispatch({ type: "IS_ACTIVE", payload: "goal" });
    dispatch(FETCH_GOAL());
  }, []);

  return (
    <div className="goalPage">
      <AddGoalModal onClose={() => setShow(false)} show={show} />

      <div className="title">
        <h1>Goal List</h1>
      </div>

      <div className="goalList">
        <button className="goal addGoalBtn" onClick={() => setShow(true)}>
          Add Goal
        </button>
        {state.length <= 0 ? (
          <h1 className="emptyListText">EMPTY LIST !</h1>
        ) : (
          state?.map(
            ({
              _id,
              goalName,
              description,
              targetDate,
              targetCalories,
              status,
            }) => (
              <li key={_id} className="goal">
                <p>
                  <b>{goalName}</b>
                </p>
                <p>Description: {description}</p>
                <p>Date: {targetDate}</p>
                <p>Calories: {targetCalories} cals</p>
                <p>Status: {status}</p>
                <span onClick={() => removeFunction(_id)}>
                  {" "}
                  <RiDeleteBin5Line className="removeBtn" />
                </span>
              </li>
            )
          )
        )}
      </div>
    </div>
  );
};

export default GoalTracking;
