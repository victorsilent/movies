import React from "react";
import Grid from "material-ui/Grid/Grid";
import MovieCard from "./shared/MovieCard";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  grid: {
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
});

const MovieList = ({ classes, movies }) => {
  return (
    <div>
      <Grid className={classes.grid} container spacing={16}>
        {movies.map(movie => {
          return (
            <Grid sm={12} md={6} lg={6} item key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(MovieList);
