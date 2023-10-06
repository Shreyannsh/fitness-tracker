import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_FOOD } from "../actions";

const FoodTracking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.foodList);

  const [name, setName] = useState("");
  const [protein, setProtein] = useState(0);
  const [calories, setCalories] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [fat, setFat] = useState(0);

  const addFoodFunction = () => {
    dispatch();
    //add action for adding food
  };

  const removeFunction = () => {
    dispatch();
    //add action for removing excercise
  };

  useEffect(() => {
    dispatch(FETCH_FOOD());
  }, []);

  return (
    <div>
      <label for="name">Food Name</label>
      <input
        name="name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <label for="calories">Calories</label>
      <input
        name="calories"
        value={calories}
        type="number"
        onChange={(e) => setCalories(e.target.value)}
      />

      <label for="calories">Protein (in grams) </label>
      <input
        name="calories"
        value={protein}
        type="number"
        onChange={(e) => setProtein(e.target.value)}
      />

      <label for="calories"> Carbohydrates (in grams) </label>
      <input
        name="calories"
        value={carbohydrates}
        type="number"
        onChange={(e) => setCarbohydrates(e.target.value)}
      />

      <label for="calories"> Fats (in grams) </label>
      <input
        name="calories"
        value={fat}
        type="number"
        onChange={(e) => setFat(e.target.value)}
      />

      <button onClick={() => addFoodFunction()}>Add Food</button>

      <div>
        <h1>Food List</h1>
      </div>

      <div>
        {state.map(({ foodName, calories, protein, carbohydrate, fat }) => (
          <li>
            <p>
              <b>{foodName}</b>
            </p>
            <p>Calories - {calories} kcal</p>
            <p>Protien - {protein} gms</p>
            <p>Carbohydrates - {carbohydrate} gms</p>
            <p>Fat - {fat} gms</p>
            <button onClick={() => removeFunction()}>Remove</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default FoodTracking;
