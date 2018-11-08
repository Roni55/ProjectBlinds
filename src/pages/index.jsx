import React from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route, Router } from 'react-router-dom';
import Layouts, { MyHeader, MyFooter } from "./Layouts"
import   MyMain  from "./MyMain"
import about from "./About"
import Home from './Home'
import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();

class index extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Layouts>
            <div>
              <Route path="/" component={Home} />
              <Route path="/"  component={MyMain} />
              <Route path="/about" component={about} />
            </div>
          </Layouts>
        </Router>
      );
    }
}
  
export default index;