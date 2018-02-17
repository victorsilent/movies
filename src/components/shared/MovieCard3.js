import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import Typography from 'material-ui/Typography/Typography';
import CardContent from 'material-ui/Card/CardContent';
import Grid from 'material-ui/Grid/Grid';
import CardActions from 'material-ui/Card/CardActions';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button/Button';

const styles = theme => ({
  movieYear: {
    display: "inline",
    lineHeight: 1.16667,
    marginLeft: 5,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const MovieCard = (props) => {

  const { classes } = props;
  return (
    <div>
      <Grid container spacing={16}>
        <Grid sm={6} item>
          <Card>
            <CardHeader
              title={
                <Typography className={classes.titleContainer} type="title" component="span">
                    Meu Filme Novo
                    <Typography className={classes.movieYear} color="textSecondary" paragraph={true} component="span">
                      (1988)
                    </Typography>
                </Typography>
              }
              subheader="Produtor: José da Guerra, Diretor: Pedro de Souza"
            />
            <Collapse in={true} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Minim excepteur dolore excepteur deserunt nulla laborum do sunt quis duis adipisicing adipisicing.Minim excepteur dolore excepteur deserunt nulla laborum do sunt quis duis adipisicing adipisicing.Minim excepteur dolore excepteur deserunt nulla laborum do sunt quis duis adipisicing adipisicing.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions className={classes.cardActions}>
              <Button color="textSecondary" variant="raised">
                Show More
                <ExpandMoreIcon></ExpandMoreIcon>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(MovieCard);