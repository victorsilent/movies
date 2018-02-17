import React from "react";
import { withStyles } from "material-ui/styles";
import MovieCard from "../shared/MovieCard";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    backgroundColor: "#fff"
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MovieCard></MovieCard>
      </div>
    );
  }
}

export default withStyles(styles)(App);
