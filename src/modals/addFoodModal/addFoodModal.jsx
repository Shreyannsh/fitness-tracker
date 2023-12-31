import "../../commonModalCss.css";

import { useDispatch } from "react-redux";

import { ADD_FOOD } from "../../reducer/actions";
import { useState } from "react";

import { toast } from "react-toastify";

export default function AddFoodModal(props) {
  const dispatch = useDispatch();

  const [newFood, setNewFood] = useState({
    foodName: "",
    calories: 0,
    protien: 0,
    carbohydrate: 0,
    fat: 0,
  });

  const addFoodFunction = () => {
    const values = Object.values(newFood);
    const emptyEntry = values.reduce((acc, crr) => {
      if (crr === "" || crr === 0) {
        acc = true;
      } else {
        acc = false;
      }
      return acc;
    }, false);

    if (!emptyEntry) {
      dispatch(ADD_FOOD(newFood));
      props.onClose();
    } else {
      toast.error("Missing Fields!");
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
        <label htmlFor="foodName">Food Name</label>
        <input
          className="input"
          id="foodName"
          value={newFood.foodName}
          type="text"
          onChange={(e) => setNewFood({ ...newFood, foodName: e.target.value })}
        />

        <label htmlFor="calories">Calories</label>
        <input
          className="input"
          id="calories"
          value={newFood.calories}
          type="number"
          onChange={(e) =>
            setNewFood({ ...newFood, calories: parseInt(e.target.value) })
          }
        />

        <label htmlFor="protein">Protein (in grams) </label>
        <input
          className="input"
          name="protein"
          value={newFood.protien}
          type="number"
          onChange={(e) =>
            setNewFood({ ...newFood, protien: parseInt(e.target.value) })
          }
        />

        <label htmlFor="carbohydrates"> Carbohydrates (in grams) </label>
        <input
          className="input"
          name="carbohydrates"
          value={newFood.carbohydrate}
          type="number"
          onChange={(e) =>
            setNewFood({ ...newFood, carbohydrate: parseInt(e.target.value) })
          }
        />

        <label htmlFor="fats"> Fats (in grams) </label>
        <input
          className="input"
          name="fats"
          value={newFood.fat}
          type="number"
          onChange={(e) =>
            setNewFood({ ...newFood, fat: parseInt(e.target.value) })
          }
        />

        <button className="addBtn" onClick={() => addFoodFunction()}>
          Add Food
        </button>
      </div>
    </div>
  );
}
