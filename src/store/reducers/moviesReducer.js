const initialState = {
  movies: [],
  error: false
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.movies
      };
    case "FETCH_MOVIES_ERROR":
      return {
        ...state,
        error: action.errorMessage
      };
    default:
      return state;
  }
};

export default moviesReducer;
