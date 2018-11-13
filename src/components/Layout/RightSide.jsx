import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Papers from './Papers'


const style = {
     Paper: { padding: 40, margin: 30, marginTop: 15 ,height: 600,
       }
  }

const RightSide = props => {
  return (
      <Grid container  >
          <Grid item xs={6} >
              <Papers /> 
              
          </Grid>
          <Grid item xs={6} >
              <Papers />
              
          </Grid>
      </Grid>
                     
  )
}



// Sides.propTypes = {

// }

export default RightSide;
