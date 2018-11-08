import React from 'react'
import { SideMain } from './SideMenu'
import PropTypes from 'prop-types'
import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";
import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from "./ButtonAppBar";
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import withRoot from '../withRoot';
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'

const styles = (theme) => ({
  centralizedContainer: {
    display: 'flex',
    flexDirection: 'column',
    webkitBoxAlign: 'center',
    alignItems: 'center',
     margin: 20,
  },
});

//  const { classes } = props;
//className={classes.centralizedContainer}

class Layouts extends React.Component {
  
    render() {
        return (
            <div >
            <MyHeader />
            {this.props.children}
            <div>
              </div>
            <MyFooter />
            
            </div>
        )
    }
}

Layouts.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRoot(withStyles(styles)(Layouts));