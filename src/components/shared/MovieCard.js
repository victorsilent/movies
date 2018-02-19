import React, { Component } from "react";
import withStyles from "material-ui/styles/withStyles";
import Card from "material-ui/Card/Card";
import CardHeader from "material-ui/Card/CardHeader";
import Typography from "material-ui/Typography/Typography";
import CardContent from "material-ui/Card/CardContent";
import CardActions from "material-ui/Card/CardActions";
import Collapse from "material-ui/transitions/Collapse";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Button from "material-ui/Button/Button";
import Avatar from "material-ui/Avatar/Avatar";
import red from "material-ui/colors/red";
import cx from "classnames";
import { Divider } from "material-ui";

const styles = theme => ({
  movieYear: {
    display: "inline",
    lineHeight: 1.16667,
    marginLeft: 5
  },
  cardActions: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    fontSize: "1em",
    backgroundColor: red[500],
    height: 60,
    width: 60
  },
  btnCollapse: {
    transform: "rotate(0deg)"
  },
  hideCollapse: {
    transform: "rotate(180deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  grayButton: {
    color: "#616161"
  }
});

class MovieCard extends Component {
  state = {
    expanded: false
  };

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, movie } = this.props;
    return (
      <div>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {movie.rt_score}
              </Avatar>
            }
            title={
              <Typography
                className={classes.titleContainer}
                type="title"
                component="span"
              >
                {movie.title}
                <Typography
                  className={classes.movieYear}
                  color="textSecondary"
                  paragraph={true}
                  component="span"
                >
                  ({movie.release_date})
                </Typography>
              </Typography>
            }
            subheader={`Director: ${movie.director}, Producer: ${
              movie.producer
            }`}
          />
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{movie.description}</Typography>
            </CardContent>
          </Collapse>
          <Divider />
          <CardActions className={classes.cardActions}>
            <Button className={classes.grayButton} onClick={this.handleExpand}>
              Description
              <ExpandMoreIcon
                className={cx(
                  this.state.expanded
                    ? classes.hideCollapse
                    : classes.btnCollapse
                )}
              />
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(MovieCard);
