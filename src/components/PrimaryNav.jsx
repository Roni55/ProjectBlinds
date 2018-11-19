import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Dashboard from '@material-ui/icons/Dashboard';
import Folder from '@material-ui/icons/Folder';
// import DNS from '@material-ui/icons/DNS';
import Explore from '@material-ui/icons/Explore';
import DateRange from '@material-ui/icons/DateRange';
// import HelpIcon from '@material-ui/icons/Help';

import Label from '@material-ui/icons/Label';

import LocationOnIcon from '@material-ui/icons/LocationOn';
// import './PrimaryNav.css';

class PrimaryNav extends Component {
  state = {
    value: 0,
    pathMap: [
      '/',
      '/crawl',
      '/contact',
      '/home',
      '/MyMain'
    ]
  };

  componentWillReceiveProps(newProps) {
    const {pathname} = newProps.location;
    const {pathMap} = this.state;

    const value = pathMap.indexOf(pathname);

    if (value > -1) {
      this.setState({
        value
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {value, pathMap} = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className="nav primary"
      >                         
        <BottomNavigationAction label="Dashboard" icon={<Dashboard />} component={Link} to={pathMap[0]} />
        <BottomNavigationAction label="Crawl" icon={<Explore />} component={Link} to={pathMap[1]} />
        <BottomNavigationAction label="contact" icon={< Label/>} component={Link} to={pathMap[2]} />
        <BottomNavigationAction label="Home" icon={< Folder />} component={Link} to={pathMap[3]} />
        <BottomNavigationAction label="MyMain" icon={< DateRange/>} component={Link} to={pathMap[4]} />
      </BottomNavigation>
    );
  }
}

export default withRouter(PrimaryNav);