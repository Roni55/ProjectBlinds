import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonAppBar from "./ButtonAppBar";
import LabelBottomNavigation from "./LabelBottomNavigation";
import withRoot from '../withRoot';
import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";
import About from "./About";
import { SideMenu, SideMain } from "./SideMenu";

import { Link } from 'react-router-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom';



const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
      marginTop: theme.spacing.unit * 4,     
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    },
    centralizedContainer: {
        display: 'flex',
        flexDirection: 'column',
        webkitBoxAlign: 'center',
        alignItems: 'center',
         margin: 20,
      },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

});

const cards = [1, 2, 3, 4, 5, 6];

function MyMain(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.centralizedContainer}>
              {/* Hero unit */}
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              This Main
            </Typography>
            <LabelBottomNavigation />
        </div> This End
      </main>
    </React.Fragment>
  );
}

MyMain.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRoot(withStyles(styles)(MyMain));


