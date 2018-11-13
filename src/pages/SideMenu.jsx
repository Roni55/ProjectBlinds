import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import withRoot from '../withRoot';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';


const activeStyle = {
  color: "Blue"
};

  const styles = (theme) => ({
    nav: {
        display: 'inlineBlock',
        webkitTextGizeAdjust: '100%',
        fontWeight: 'bold',       
        width: '100%',
        zIndex: 12,
        display: 'flex',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
        paddingBottom: 'auto',
        height: '4%',       
        textUnderlinePosition: 'none',
        textDecoration: 'none',
    }
});

export const SideMain = () => (
    <nav  >
      <ul >
        <li><NavLink exact style={{ color: 'Blue' , display : 'inlineBlock', textDecoration: 'none', paddingLeft:'5%'}} to='/'>Home</NavLink></li>
        <li><NavLink exact style={{ color: 'Blue' , display : 'inlineBlock', textDecoration: 'none', paddingLeft:'5%'}} to='/about'>About</NavLink></li>
        <li><NavLink exact style={{ color: 'Blue' , display : 'inlineBlock', textDecoration: 'none', paddingLeft:'5%'}}  to='/mymain'>MyMain</NavLink></li>
        <li><NavLink exact style={{ color: 'Blue' , display : 'inlineBlock', textDecoration: 'none', paddingLeft:'5%'}}  to='/contact'>contact</NavLink></li>  
        <li><NavLink exact                                                                 to="/post" activeStyle={activeStyle}>active Style</NavLink></li> 
      </ul>
    </nav>
);
export default withRoot(withStyles(styles)(SideMain));
  


 

