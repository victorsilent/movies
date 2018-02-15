import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Grid from "material-ui/Grid/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    backgroundColor: "#fff"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary
  }
});
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>
                  Word of the Day
                </Typography>
                <Typography type="headline" component="h2" />
                <Typography className={classes.pos}>adjective</Typography>
                <Typography component="p">
                  well meaning and kindly.<br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>
                  Word of the Day
                </Typography>
                <Typography type="headline" component="h2" />
                <Typography className={classes.pos}>adjective</Typography>
                <Typography component="p">
                  well meaning and kindly.<br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
