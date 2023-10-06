const initialState = {
  dashboard: {
    totalCaloriesBurnt: 0,
    totalCaloriesConsumed: 0,
    totalCaloriesGoal: 0,
    remainingCaloriesToGoal: 0,
    error: "",
  },
  exerciseList: [],
  foodList: [],
  goalList: [],
};

const trackingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_EXERCISE_LIST":
      return {
        ...state,
        exerciseList: action.payload,
      };

    case "FETCHED_FOOD_LIST":
      return {
        ...state,
        foodList: action.payload,
      };

    case "FETCHED_GOAL_LIST":
      return {
        ...state,
        goalList: action.payload,
      };

    case "ADD_EXERCISE":
      return {
        ...state,
        exerciseList: [...state.exerciseList, action.payload],
      };

    case "ADD_FOOD":
      return { ...state, foodList: [...state.foodList, action.payload] };

    case "ADD_GOAL":
      return {
        ...state,
        goalTracking: [...state.goalTracking, action.payload],
      };

    case "REMOVE_EXCERCISE":
      const updatedExerciseList = state.exerciseList.filter(
        ({ name }) => name !== action.name
      );
      return {
        ...state,
        exerciseList: updatedExerciseList,
      };

    case "REMOVE_FOOD":
      const updatedFoodList = state.foodList.filter(
        ({ name }) => name !== action.name
      );
      return {
        ...state,
        exerciseList: updatedFoodList,
      };

    case "REMOVE_EXCERCISE":
      const updatedGoalList = state.exerciseList.filter(
        ({ name }) => name !== action.name
      );
      return {
        ...state,
        exerciseList: updatedGoalList,
      };

    case "ERROR":
      return { ...state, error: action.payload };

    //cases for dashboard to be written

    default:
      return state;
  }
};

export default trackingReducer;
