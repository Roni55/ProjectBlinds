import React from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route, Router } from 'react-router-dom';
import Layouts, { MyHeader, MyFooter } from "./Layouts"
import about from "./About"

import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();

class index extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Layouts>
            <div>
              <Route path="/"  />
              <Route path="/about" component={about} />
            </div>
          </Layouts>
        </Router>
      );
    }
}
  
export default index;