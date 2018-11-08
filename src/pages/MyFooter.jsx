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
         {/* Footer */}
      <footer >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>      
      {/* End footer */}
        <ScrollableTabsButtonForce />
      </div>
    )
}


MyFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRoot(withStyles(styles)(MyFooter));