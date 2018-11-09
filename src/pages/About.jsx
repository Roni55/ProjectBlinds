import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import cheese from '../cheese.svg'

const styles = {
  root: {
    width: '100%',
      maxWidth: '500',
      margin: '0 .4em',
    textAlign: 'center',
  },
};

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <img src={cheese.svg} width="100" height="50"/>
      <Typography component="h2" variant="h1" gutterBottom>
        Blinds 
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Blinds
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Blinds
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Blinds
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Blinds
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Blinds
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
      That's a crooked tree. We'll send him to Washington. Those great
      big fluffy clouds. Use absolutely no pressure. Just like an
      angel's wing. Let your imagination be your guide. Happy painting,
      God bless. I really believe that if you practice enough you could
      paint the 'Mona Lisa' with a two-inch brush. We must be quiet,
      soft and gentle. It's hard to see things when you're too close.
      Take a step back and look. You have to make these big decisions.
      Trees grow in all kinds of ways. They're not all perfectly
      straight. Not every limb is perfect.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" gutterBottom>
        overline text
      </Typography>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);


