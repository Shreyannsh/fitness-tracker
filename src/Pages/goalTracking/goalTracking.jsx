import "./goalTracking.css";
import "../../commonPageCss.css";

import { RiDeleteBin5Line } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { REMOVE_GOAL, FETCH_GOAL } from "../../reducer/actions";

import AddGoalModal from "../../modals/addGoalModal/addGoalModal";
import { useState, useEffect } from "react";

const GoalTracking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.goalList);
  const loading = useSelector((state) => state.loading);

  const [show, setShow] = useState(false);

  const totalCaloriesGoal = state?.reduce(
    (acc, crr) => acc + crr.targetCalories,
    0
  );

  const removeFunction = (goalId) => {
    dispatch(REMOVE_GOAL(goalId));
  };

  useEffect(() => {
    dispatch({ type: "IS_ACTIVE", payload: "goal" });
    dispatch(FETCH_GOAL());
  }, []);

  return (
    <div className="pageParent">
      <AddGoalModal onClose={() => setShow(false)} show={show} />

      <div className="title">
        <h1>Goal List</h1>
        <div className="caloricValue">
          <p>{totalCaloriesGoal}</p>
          <p>Total calories goal</p>
        </div>
      </div>

      <div className="list">
        <button className="addNewBtn" onClick={() => setShow(true)}>
          Add Goal
        </button>
        {state.length <= 0 && loading === false ? (
          <div className="emptyListTextBox">
            <h1 className="emptyListText">EMPTY LIST !</h1>
          </div>
        ) : (
          state?.map(
            ({
              _id,
              goalName,
              description,
              targetDate,
              targetCalories,
              status,
            }) => {
              const datee = targetDate.split("T");
              return (
                <li key={_id} className="goal individualComponent">
                  <p className="name">
                    <b>{goalName}</b>
                  </p>
                  <p>Description: {description}</p>
                  <p>Date: {datee[0]}</p>
                  <p>Calories: {targetCalories} cals</p>
                  <p>Status: {status}</p>
                  <span onClick={() => removeFunction(_id)}>
                    {" "}
                    <RiDeleteBin5Line className="removeBtn" />
                  </span>
                </li>
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default GoalTracking;
