import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import  Contact  from "./Contact"
import about from "./About"
import Home from './Home'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    },
    tabLink : {
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
});
const tabs = [{
    label: 'Fist Tab',
    link: 'fist-tab',
    component: <Home/>
  }, {
    label: 'Second Tab',
    link: 'second-tab',
    component: <about/>
  }, {
    label: 'Third Tab',
    link: 'third-tab',
    component: <Contact/>
  }];
class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
      const { value } = this.state;
      
    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
  {
    this.props.tabs.map(
      ({label, path})=><Tab key={label} 
                            label={label} 
                            className={classes.tabLink} 
                            component={Link} 
                            to={path} />
    )
  }
</Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Page One</TabContainer>}
          {value === 1 && <TabContainer>Page Two</TabContainer>}
          {value === 2 && <TabContainer>Page Three</TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);