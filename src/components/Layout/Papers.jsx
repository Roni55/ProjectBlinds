import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


 const Papers = ({styles }) => {
  return (
    <Paper style={styles}>
       <Typography variant="body1" gutterBottom>
      That's a crooked tree. We'll send him to Washington. Those great
      big fluffy clouds. Use absolutely no pressure. Just like an
      angel's wing.
      </Typography>
    </Paper>
  )
 }

 // Paper.propTypes = {

// }

export default Papers;


