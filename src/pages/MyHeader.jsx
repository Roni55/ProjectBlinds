import React from 'react'

import PropTypes from 'prop-types'
import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";
import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from "./ButtonAppBar";
import { withStyles } from '@material-ui/core/styles';
import ComponentProperty from "./ComponentProperty"
import classNames from 'classnames';
import withRoot from '../withRoot';
import FullWidthTabs from './FullWidthTabs'


const styles = (theme) => ({
  appBar: {
    position: 'relative',
  },
});
export const MyHeader = () => {
  //const { classes } = props; className={classes.appBar} 
  return (
    <div>
      <ScrollableTabsButtonForce />
      <FullWidthTabs />
      <ComponentProperty />
      
    </div>
  )
}
MyHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withRoot(withStyles(styles)(MyHeader));