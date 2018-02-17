import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import Typography from 'material-ui/Typography';
import CardContent from 'material-ui/Card/CardContent';
const styles = {}
const MovieCard = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
          Lizard
        </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(MovieCard);