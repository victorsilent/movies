import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import drawer from './DrawerMenu';
import { toggleDrawer } from '../store/actions/ui'
import classNames from 'classnames'
import Hidden from 'material-ui/Hidden/Hidden';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    backgroundColor: theme.palette.background.default,
  },
  drawerStyle: {
    width: drawerWidth,
    height: '100%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBar:{
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarOpen:{
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  content:{
    width: '100%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  listItem:{
    textDecoration: 'none',
  }
});

class Navbar extends React.Component{
  render (){
    const { classes, handleDrawer, drawerIsOpen } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classNames(classes.appBar, {[classes.appBarOpen]: drawerIsOpen})} position="static" color="secondary">
          <Toolbar>
            <IconButton onClick={handleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Dashboard Example
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden smUp>
          <Drawer classes={{paper: classes.drawerStyle}} type="temporary" open={drawerIsOpen} onClose={handleDrawer}>
            {drawer(classes)}
          </Drawer>
        </Hidden>

        <Hidden smDown>
          <Drawer classes={{paper: classes.drawerStyle}} type="persistent" open={drawerIsOpen} onClose={handleDrawer}>
              {drawer(classes)}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    drawerIsOpen: state.ui.drawerIsOpen
  }
}
function mapDispatchToProps(dispatch){
  return {
    handleDrawer: () => dispatch(toggleDrawer())
  }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Navbar);
