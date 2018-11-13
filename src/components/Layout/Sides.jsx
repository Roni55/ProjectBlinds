import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing.unit * 2,
//   },
// });
const style = {
  Pager: { padding: 40, margin: 10, marginBottom: 15 }
};
const sides = props => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper style={style.Pager}>Left Page</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={style.Pager}>Left Page</Paper>
      </Grid>
    </Grid>
  );
};

sides.propTypes = {};

export default sides;
