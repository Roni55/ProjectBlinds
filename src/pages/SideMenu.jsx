import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import withRoot from '../withRoot';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import About from "./About";
// const styles = {
//     root: {
//       width: 500,
//       flexGrow: 1,
//     },
//   };

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
//   (nav > ul ){  
    //marginBottom: 0.6em, 
   // paddingTop: 0.1em, 
//     background: #fff,
//     display: inlineBlock,
//     paddingTop: 0.5em,
//     paddingLeft: 1.9em,
//     display: flex,
//     justifyContent: last baseline,
//   }

//   (nav > ul > li > a ){
//     display: block;
//     list-style-type: none;
//     -webkit-transition: all 0.2s;
//     -moz-transition: all 0.2s;
//     -ms-transition: all 0.2s;
//     -o-transition: all 0.2s;
//     transition: all 0.2s;
//     font-size: 1rem;
//     text-decoration: none;
//     display: inline-block;
//     margin-right: auto;
//     border-radius: 4px 4px 4px 4px;
  
//   }
//   (a.active) {
//     color:rgba(2, 37, 70, 1);
//   }
//   (nav > ul > li > a.active:hover) {
//     display: block;
//     position: initial;
//     background-color:rgba(2, 37, 70, 1);
//     opacity: 1;
//     visibility: visible;
//     color: white;
//     text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
  
//   }
//   (li:focus-within a ){
//     outline: none;
//   }


// export  const Navigation  = () => (
//     <Switch>
//       <Route exact path='/' component={About}></Route>
//       <Route exact path='/about' component={About}></Route>
//     </Switch>
// );

export const SideMain = () => (
    <nav style={{ color: 'red' , display : 'inlineBlock', paddingLeft:'5%'}} >
      <ul style={{ color: 'red' , display : 'inlineBlock', paddingLeft:'5%'}}>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/mymain'>MyMain</NavLink></li>
            
      </ul>
    </nav>
);
export default withRoot(withStyles(styles)(SideMain));
  
// export const sideRoute = () => (
//     <Switch>
//       <Route exact path="/" component={Home} />

//       <Route path="/product/" component={Products} />
//       <Route path="/about" component={About} />
//       <Route path='/products/:id' component={ProductsNews} />
//       <Route path='/contact' component={Page} />
//       <Route path='/submit' component={ProductsSubmit} />
//       <Route  component={NotFound}/>
//     </Switch>
// );

 

