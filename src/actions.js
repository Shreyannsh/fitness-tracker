import axios from "axios";

import { toast } from "react-toastify";

const baseURL = process.env.REACT_APP_BASE_URL;
//console.log(baseURL);

export const FETCH_EXCERCISES = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const response = await fetch(
      `https://fiitness-app-backend-bbuu.vercel.app/v1/api/exercises/exercises`
    );
    const data = await response.json();
    dispatch({ type: "STOP_LOADING" });
    if (data.success) {
      dispatch({ type: "FETCHED_EXERCISE_LIST", payload: data.data });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const FETCH_FOOD = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const response = await fetch(
      "https://fiitness-app-backend-bbuu.vercel.app/v1/api/foods"
    );

    const data = await response.json();

    dispatch({ type: "STOP_LOADING" });
    if (data.success) {
      dispatch({ type: "FETCHED_FOOD_LIST", payload: data.data });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const FETCH_GOAL = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const response = await fetch(
      "https://fiitness-app-backend-bbuu.vercel.app/v1/api/goals"
    );

    const data = await response.json();
    dispatch({ type: "STOP_LOADING" });

    if (data.success) {
      dispatch({ type: "FETCHED_GOAL_LIST", payload: data.data });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const ADD_EXCERCISE = (excercise) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

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

    dispatch({ type: "STOP_LOADING" });

    if (data.success) {
      toast.success("Exercise added");
      dispatch({ type: "ADD_EXERCISE", payload: data.data });
    }
    // const response = await axios.post(
    //   "https://fiitness-app-backend-bbuu.vercel.app/v1/api/exercises/add-exercise",
    //   {
    //     ...excercise,
    //   }
    // );
    // .then(function (response) {
    //   console.log(response);
    // });

    // console.log(response.data.data);

    // if (response.data.success) {
    //   dispatch({ type: "ADD_EXCERCISE", payload: response.data.data });
    // }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const ADD_FOOD = (newFood) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const response = await fetch(
      "https://fiitness-app-backend-bbuu.vercel.app/v1/api/foods/add-food",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFood),
      }
    );

    const data = await response.json();
    dispatch({ type: "STOP_LOADING" });
    if (data.success) {
      toast.success("Food added");
      dispatch({ type: "ADD_FOOD", payload: data.data });
    }
  } catch (error) {
    dispatch({ type: "ERROR", action: error });
  }
};

export const ADD_GOAL = (newGoal) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const response = await fetch(
      "https://fiitness-app-backend-bbuu.vercel.app/v1/api/goals/add-goal",
      {
        // ...newGoal,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGoal),
      }
    );

    const data = await response.json();
    dispatch({ type: "STOP_LOADING" });
    if (data.success) {
      toast.success("Goal added");
      dispatch({ type: "ADD_GOAL", payload: data.data });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const REMOVE_EXCERCISE = (excerciseId) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const response = await axios.delete(
      `https://fiitness-app-backend-bbuu.vercel.app/v1/api/exercises/${excerciseId}`
    );
    dispatch({ type: "STOP_LOADING" });
    if (response.status === 204) {
      toast.success("Exercise removed");
      dispatch({ type: "REMOVE_EXCERCISE", payload: excerciseId });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const REMOVE_FOOD = (foodId) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const response = await axios.delete(
      `https://fiitness-app-backend-bbuu.vercel.app/v1/api/foods/${foodId}`
    );
    dispatch({ type: "STOP_LOADING" });
    if (response.status === 204) {
      toast.success("Food removed");
      dispatch({ type: "REMOVE_FOOD", payload: foodId });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const REMOVE_GOAL = (goalId) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const response = await axios.delete(
      `https://fiitness-app-backend-bbuu.vercel.app/v1/api/goals/${goalId}`
    );

    dispatch({ type: "STOP_LOADING" });

    if (response.status === 204) {
      toast.success("Goal removed");
      dispatch({ type: "REMOVE_GOAL", payload: goalId });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
