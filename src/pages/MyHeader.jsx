// import React from 'react'
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from "./ButtonAppBar";
import { withStyles } from '@material-ui/core/styles'; import WrapLink from "../components/Button/WrapLink"; 
import classNames from 'classnames';
import withRoot from '../withRoot';
//import data from './Json/data.json'
import PrimaryNav from '../components/PrimaryNav'


const styles = (theme) => ({
  appBar: {
    position: 'relative',
  },
});
export const MyHeader = () => {
  //const { classes } = props; className={classes.appBar} 
  return (
    <Fragment>
        <PrimaryNav />
        {/* <Tab label="All" />
        {data.map(group =>
        <Tab key={group} label={group} />
        )}
        </Tabs> */}
      
       
      </Fragment>
  )
}
MyHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withRoot(withStyles(styles)(MyHeader));