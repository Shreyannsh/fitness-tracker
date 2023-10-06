const baseURL = process.env.REACT_APP_BASE_URL;
//console.log(baseURL);

export const FETCH_EXCERCISES = () => async (dispatch) => {
  try {
    const response = await fetch(
      `https://fiitness-app-backend-bbuu.vercel.app/v1/api/exercises/exercises`
    );
    const data = await response.json();

    if (data.success) {
      dispatch({ type: "FETCHED_EXERCISE_LIST", payload: data.data });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const FETCH_FOOD = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fiitness-app-backend-bbuu.vercel.app/v1/api/foods"
    );

    const data = await response.json();

    dispatch({ type: "FETCHED_FOOD_LIST", payload: data.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const FETCH_GOAL = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fiitness-app-backend-bbuu.vercel.app/v1/api/goals"
    );
    const data = response.json();
    console.log(data);
    dispatch({ type: "FETCHED_GOAL_LIST", payload: data.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const ADD_EXCERCISE = (excercise) => async (dispatch) => {
  try {
    console.log(excercise);
    const response = await fetch(
      "https://fiitness-app-backend-bbuu.vercel.app/v1/api/exercises/add-exercise",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(excercise),
      }
    );
    const data = await response.json();
    console.log(data);

    dispatch({ type: "ADD_EXCERCISE", payload: data.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
