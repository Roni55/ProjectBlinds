import React from 'react'
import { SideMain } from './SideMenu'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from "./ButtonAppBar";
import { withStyles } from '@material-ui/core/styles';
import ComponentProperty from "./ComponentProperty"
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
          <ButtonAppBar position="static" />
          <ComponentProperty />
          <SideMain />
    </div>
  )
}
MyHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withRoot(withStyles(styles)(MyHeader));