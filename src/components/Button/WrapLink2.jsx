
import React from 'react'
import PropTypes from 'prop-types'
// import FnButton from "./FnButton";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const menus = ["home", "meta", "hreflang", "results", "stats"];

const WrapLink = props => {
  return (
    <List >
    {menus.map(({ id, link }) => (
      <ListItem key={id} >
          <ListItemText primary={link} />  
          {link}
      </ListItem>
    ))}
    </List>
    
  )
}


  


             
WrapLink.propTypes = {

}

export default WrapLink


