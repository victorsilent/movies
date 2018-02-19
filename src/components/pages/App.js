import React from "react";
import { withStyles } from "material-ui/styles";
import MovieFilterList from "../../containers/MovieFilterList";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    backgroundColor: "#fafafa"
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MovieFilterList />
      </div>
    );
  }
}

export default withStyles(styles)(App);
