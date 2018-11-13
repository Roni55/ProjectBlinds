import React from 'react'
import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import withRoot from '../withRoot';
import Button from '@material-ui/core/Button';
//install node-sass
import buttonSkewed from "./buttonSkewed.css";


//   <div>    
//   <button onClick={() => alert("hello world")}>Hello Application</button>
// </div> /*}

export default function fnButton() {
  return (
    <div className='btn'>
      <Button className='button-text' >
        OK
      </Button>
    </div>
  )
}

{/* <div className="each">
<a href="#" className="btn">
<span>What a button!</span>
</a>
</div> */}

//export default withRoot(withStyles(styles)(fnButton));
