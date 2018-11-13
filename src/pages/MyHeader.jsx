import React from 'react'

import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from "./ButtonAppBar";
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';
import withRoot from '../withRoot';



const styles = (theme) => ({
  appBar: {
    position: 'relative',
  },
});
export const MyHeader = () => {
  //const { classes } = props; className={classes.appBar} 
  return (
    <div>  
     <h1> Present MyHeader</h1>
       
    </div>
  )
}
MyHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withRoot(withStyles(styles)(MyHeader));