export const getAllMovies = () => dispatch => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: "FETCH_MOVIES_SUCCESS",
        movies: result
      });
    })
    .catch(err => {
      dispatch({
        type: "FETCH_MOVIES_ERROR",
        errorMessage: err.message
      });
    });
};
