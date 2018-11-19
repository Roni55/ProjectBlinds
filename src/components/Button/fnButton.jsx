import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import withRoot from '../withRoot';
import Button from '@material-ui/core/Button';
//install node-sass
import buttonSkewed from "./buttonSkewed.css";
import LinkTitle from "./LinkTitle"

//   <div>    
//   <button onClick={() => alert("hello world")}>Hello Application</button>
// </div> /*}

{/* <div className="each">
<a href="#" className="btn">
<span>What a button!</span>
</a>  rgb(159,168,218)   main color 
</div> */}



const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    height: 50,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.light,
    boxShadow: '0 3px 5px 2px rgb(140,158,255) ',
    
  },
});

class FnButton extends Component {
 
  render() {
    const { classes, theme, label} = this.props;
    return (
      <div className="each">
      <div className='btn' >
      <Button  className='button-text, button-fixedwidth' className={classes.root}  style={{ width: '100%', height: 70,    position: 'relative', verticalAalign: 'middle', display: 'inline-block', padding:10, marginLeft:5, justifyContent: 'space-around'}} >
        {label}
      </Button>
      </div>
      </div>
    )
  }
}

export default withStyles(styles)(FnButton);
