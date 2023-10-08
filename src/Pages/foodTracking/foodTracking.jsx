import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FOOD, FETCH_FOOD, REMOVE_FOOD } from "../../actions";

const FoodTracking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.foodList);

  const [newFood, setNewFood] = useState({
    foodName: "",
    calories: 0,
    protien: 0,
    carbohydrate: 0,
    fat: 0,
  });

  // const [name, setName] = useState("");
  // const [protein, setProtein] = useState(0);
  // const [calories, setCalories] = useState(0);
  // const [carbohydrates, setCarbohydrates] = useState(0);
  // const [fat, setFat] = useState(0);

  const addFoodFunction = () => {
    console.log(newFood);
    dispatch(ADD_FOOD(newFood));
  };

  const removeFunction = (foodId) => {
    dispatch(REMOVE_FOOD(foodId));
    //add action for removing excercise
  };

  useEffect(() => {
    dispatch(FETCH_FOOD());
  }, []);

  return (
    <div>
      <label htmlFor="foodName">Food Name</label>
      <input
        id="foodName"
        value={newFood.foodName}
        type="text"
        onChange={(e) => setNewFood({ ...newFood, foodName: e.target.value })}
      />

      <label htmlFor="calories">Calories</label>
      <input
        id="calories"
        value={newFood.calories}
        type="number"
        onChange={(e) =>
          setNewFood({ ...newFood, calories: parseInt(e.target.value) })
        }
      />

      <label htmlFor="protein">Protein (in grams) </label>
      <input
        name="protein"
        value={newFood.protien}
        type="number"
        onChange={(e) =>
          setNewFood({ ...newFood, protien: parseInt(e.target.value) })
        }
      />

      <label htmlFor="carbohydrates"> Carbohydrates (in grams) </label>
      <input
        name="carbohydrates"
        value={newFood.carbohydrate}
        type="number"
        onChange={(e) =>
          setNewFood({ ...newFood, carbohydrate: parseInt(e.target.value) })
        }
      />

      <label htmlFor="fats"> Fats (in grams) </label>
      <input
        name="fats"
        value={newFood.fat}
        type="number"
        onChange={(e) =>
          setNewFood({ ...newFood, fat: parseInt(e.target.value) })
        }
      />

      <button onClick={() => addFoodFunction()}>Add Food</button>

      <div>
        <h1>Food List</h1>
      </div>

      <div>
        {state.map(
          ({ _id, foodName, calories, protein, carbohydrate, fat }) => (
            <li key={_id}>
              <p>
                <b>{foodName}</b>
              </p>
              <p>Calories - {calories} kcal</p>
              <p>Protien - {protein} gms</p>
              <p>Carbohydrates - {carbohydrate} gms</p>
              <p>Fat - {fat} gms</p>
              <button onClick={() => removeFunction(_id)}>Remove</button>
            </li>
          )
        )}
      </div>
    </div>
  );
};

export default FoodTracking;
