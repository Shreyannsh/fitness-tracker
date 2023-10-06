const baseURL = process.env.REACT_APP_BASE_URL;
//console.log(baseURL);

export const FETCH_EXCERCISES = () => async (dispatch) => {
  try {
    const response = await fetch(
      `https://fiitness-app-backend-bbuu.vercel.app/v1/api/exercises/exercises`
    );
    const data = await response.json();

    console.log(data.data);

    if (data.success) {
      dispatch({ type: "FETCHED_EXERCISE_LIST", payload: data.data });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
