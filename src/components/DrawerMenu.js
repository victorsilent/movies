import React from "react";
import { Link } from "react-router-dom";
import { List, ListItemIcon, ListItem, ListItemText } from "material-ui";
import Divider from "material-ui/Divider";
import StarIcon from "material-ui-icons/Star";

const drawer = (classes = {}) => (
  <div className={classes.list}>
    <List>
      <Link to="/about" className={classes.listItem}>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
      <Link to="/" className={classes.listItem}>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
    </List>
  </div>
);

export default drawer;
