import React from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route, Router } from 'react-router-dom';
import Layouts, { MyHeader, MyFooter } from "./Layouts"

import Home from './Home'
import About from "./About"
import Contact from "./Contact"
import Crawl from "./Crawl"
import Dashboard from './Dashboard'
import MyMain from "./MyMain"
import NotFound from "./NotFound"
import Spin from "./Spin"



import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();

class index extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Layouts>
            <div>
              <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/crawl"  component={Crawl} />
              <Route exact path="/contact" component={Contact} />
              <Route  exact path="/home" component={Home} />
              <Route exact path="/mymain" component={MyMain} />
              <Route exact path="/about"  component={About} />
              <Route component={NotFound} />
              </Switch>
            </div>
          </Layouts>
        </Router>
      );
    }
}
  
export default index;