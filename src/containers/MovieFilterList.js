import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getAllMovies } from "../store/actions/movies";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid/Grid";
import MovieList from "../components/MovieList";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";

const styles = theme => ({
  grid: {
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
});

class MovieFilterList extends Component {
  state = {
    filterString: ""
  };

  componentDidMount() {
    this.props.getMoviesList();
  }

  handleInput = event => {
    this.setState({ filterString: event.target.value });
  };

  render() {
    const { movies, classes, error } = this.props;
    const filteredMovies = movies.filter(movie => {
      return movie.title
        .toLowerCase()
        .includes(this.state.filterString.toLowerCase());
    });
    return (
      <div>
        <Grid container className={classes.grid}>
          <Grid item md={6} sm={12}>
            <TextField
              id="filtering"
              label="Search by name"
              type="text"
              margin="normal"
              onChange={this.handleInput}
              style={{
                width: "100%",
                marginTop: -50,
                marginBottom: 30
              }}
            />
          </Grid>
        </Grid>
        {error && (
          <Typography paragraph align="center" color="error">
            Sorry! Something went wrong! Error: {error}
          </Typography>
        )}
        <MovieList movies={filteredMovies} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.movies,
    error: state.movies.error
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getMoviesList: () => dispatch(getAllMovies())
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(MovieFilterList);
