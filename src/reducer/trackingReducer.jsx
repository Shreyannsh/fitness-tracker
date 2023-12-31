const initialState = {
  exerciseList: [],
  foodList: [],
  goalList: [],
  error: "",
  loading: false,
  isActive: "",
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
        goalList: [...state.goalList, action.payload],
      };

    case "REMOVE_EXCERCISE":
      const updatedExerciseList = state.exerciseList.filter(
        ({ _id }) => _id !== action.payload
      );

      return {
        ...state,
        exerciseList: updatedExerciseList,
      };

    case "REMOVE_FOOD":
      const updatedFoodList = state.foodList.filter(
        ({ _id }) => _id !== action.payload
      );
      return {
        ...state,
        foodList: updatedFoodList,
      };

    case "REMOVE_GOAL":
      const updatedGoalList = state.goalList.filter(
        ({ _id }) => _id !== action.payload
      );
      return {
        ...state,
        goalList: updatedGoalList,
      };

    case "START_LOADING":
      return { ...state, loading: true };

    case "STOP_LOADING":
      return { ...state, loading: false };

    case "IS_ACTIVE":
      return { ...state, isActive: action.payload };

    case "ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default trackingReducer;
