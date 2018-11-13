import React from 'react'
import PropTypes from 'prop-types'
import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import withRoot from '../withRoot';



const styles = (theme) => ({
footer: {
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing.unit * 6,
},
});

//  const { classes } = props;
//className={classes.footer}   className={classes.footer}
export const MyFooter = () => { 
    return (
      <div >
        <ScrollableTabsButtonForce />
      </div>
    )
}

MyFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRoot(withStyles(styles)(MyFooter));