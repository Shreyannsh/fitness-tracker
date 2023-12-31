import "./foodTracking.css";
import "../../commonPageCss.css";

import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FOOD, FETCH_FOOD } from "../../reducer/actions";

import AddFoodModal from "../../modals/addFoodModal/addFoodModal";
import { useState, useEffect } from "react";

const FoodTracking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.foodList);
  const loading = useSelector((state) => state.loading);
  const [show, setShow] = useState(false);

  const totalCaloriesConsumed = state?.reduce(
    (acc, crr) => acc + crr.calories,
    0
  );

  const removeFunction = (foodId) => {
    dispatch(REMOVE_FOOD(foodId));
  };

  useEffect(() => {
    dispatch({ type: "IS_ACTIVE", payload: "food" });
    dispatch(FETCH_FOOD());
  }, []);

  return (
    <div className="pageParent">
      <AddFoodModal onClose={() => setShow(false)} show={show} />

      <div className="title">
        <h1>Food List</h1>
        <div className="caloricValue">
          <p>{totalCaloriesConsumed}</p>
          <p>Total calories consumed</p>
        </div>
      </div>

      <div className="list">
        <button className="addNewBtn" onClick={() => setShow(true)}>
          Add Food
        </button>
        {state.length <= 0 && loading === false ? (
          <div className="emptyListTextBox">
            <h1 className="emptyListText">EMPTY LIST !</h1>
          </div>
        ) : (
          state.map(
            ({ _id, foodName, calories, protein, carbohydrate, fat }) => (
              <li key={_id} className=" individualComponent food">
                <p>
                  <b>{foodName}</b>
                </p>
                <p>Calories - {calories} kcal</p>
                <p>Protien - {protein} gms</p>
                <p>Carbohydrates - {carbohydrate} gms</p>
                <p>Fat - {fat} gms</p>
                <span onClick={() => removeFunction(_id)}>
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

export default FoodTracking;
