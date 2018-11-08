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


export const SideMain = () => (
    <Switch>
      <Route exact path='/' ></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' ></Route>
    </Switch>
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

 

