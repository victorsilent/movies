import React from "react";
import { Route, Switch } from "react-router";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import Navbar from "./Navbar";
import App from "./pages/App";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import classNames from "classnames";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Fade = props => (
  <CSSTransition {...props} timeout={300} exit={false} classNames="fade" />
);
const drawerWidth = 240;
const styles = theme => ({
  content: {
    flex: "flex: 1 1 100%",
    padding: theme.spacing.unit * 2,
    paddingTop: 56,
    margin: 0,
    marginTop: 40,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  contentShift: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth
    }
  }
});

const MyRoot = props => {
  const { classes, drawerIsOpen, location } = props;
  return (
    <div className={classes.root}>
      <Navbar />
      <div
        className={classNames(classes.content, {
          [classes.contentShift]: drawerIsOpen
        })}
      >
        <TransitionGroup className="todo-list">
          <Fade key={location.pathname}>
            <Switch localtion={location}>
              <Route exact path="/" component={App} />
              <Route path="/about/:name" component={About} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </Fade>
        </TransitionGroup>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    drawerIsOpen: state.ui.drawerIsOpen,
    location: state.router.location
  };
}

export default compose(withStyles(styles), connect(mapStateToProps, null))(
  MyRoot
);
