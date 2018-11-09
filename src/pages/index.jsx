import React from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route, Router } from 'react-router-dom';
import Layouts, { MyHeader, MyFooter } from "./Layouts"
import   MyMain  from "./MyMain"
import about from "./About"
import Home from './Home'
import NotFound from "./NotFound"

import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();

class index extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Layouts>
            <div>
              <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/mymain"  component={MyMain} />
              <Route  exact path="/about" component={about} />
              <Route component={NotFound} />
              </Switch>
            </div>
          </Layouts>
        </Router>
      );
    }
}
  
export default index;