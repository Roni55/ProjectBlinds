import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chips from './Chips'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Crawl(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            New Blinds 
            </Typography>          
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
           
                   <Chips />   
         
        </Grid>
        <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                  Graphs
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
                  Data
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
                     Info
                      </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
          More graphs
                        
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
                      Tautoglolgy
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Crawl.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Crawl);