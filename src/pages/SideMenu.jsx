import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import withRoot from '../withRoot';
import About from "./About";
// const styles = {
//     root: {
//       width: 500,
//       flexGrow: 1,
//     },
//   };


export  const Navigation  = () => (
    <Switch>
      <Route exact path='/' ></Route>
      <Route exact path='/about' component={About}></Route>
    </Switch>
);

export const SideMain = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  );
  
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

 

