
import React from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      backgroundColor: '#8C9EFF',
    },
    slant: {
      transform: 'skew(25)',
    },
  
};
 // color="secondary"
  function SlantButton(props) {
    const { classes } = props;
    return (
      <div className={classes.slant}>
            <Button className={classes.root}>Login</Button>
      </div>
    );
  }
  
  
  
  export default withStyles(styles)(SlantButton);
