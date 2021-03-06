import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Home from "./Home"
import Contact from "./Contact"

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 9 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 600,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Home" component={Link} to="/"  />
              <Tab label="About" component={Link} to="/about" />
              <Tab label="contact" component={Link} to="/contact" />
              <Tab label="dashboard" component={Link} to="/dashboard" />
            </Tabs>
          </AppBar>

          {/* <Switch>
            <Route path="/home" component={PageShell(ItemOne)} />
            <Route path="/about" component={PageShell(compare)} />
          </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

// function ItemOne(theme) {
//   return (
//     <Paper>
//       <Home />
//     </Paper>
//   );
// }

// function compare(theme) {
//   return (
//     <Paper>
//     <Contact />
//     </Paper>
//   );
// }

//  const PageShell = (Page, previous) => {
//   return props => (
//     <div className="page">
//       <ReactCSSTransitionGroup
//         transitionAppear={true}
//         transitionAppearTimeout={600}
//         transitionEnterTimeout={600}
//         transitionLeaveTimeout={600}
//         transitionName={props.match.path === "/home" ? "SlideIn" : "SlideOut"}
//       >
//         {console.log(props)}
//         <Page {...props} />
//       </ReactCSSTransitionGroup>
//     </div>
//   );
// }; 

export default withStyles(styles, { withTheme: true })(FullWidthTabs);



