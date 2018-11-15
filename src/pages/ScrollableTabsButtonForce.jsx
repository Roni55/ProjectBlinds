import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dashboard from '@material-ui/icons/Dashboard';
import DateRange from '@material-ui/icons/DateRange';
import Label from '@material-ui/icons/Label';
import HelpIcon from '@material-ui/icons/Help';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DeleteIcon from '@material-ui/icons/Delete';
import ExploreOff from '@material-ui/icons/ExploreOff';
import Explore from '@material-ui/icons/Explore';
import Typography from '@material-ui/core/Typography';
// import SvgMaterialIcons from  "../components/Button/SvgMaterialIcons";
import withRoot from '../withRoot';

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

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonForce extends React.Component {
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
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Dashboard" icon={<Dashboard />} />
            <Tab label="DateRange" icon={<DateRange />} />
            <Tab label="Docs" icon={<Label />} />
            <Tab label="Help" icon={<HelpIcon />} />
            <Tab label="Delete" icon={<DeleteIcon />} />
            <Tab label="Explore Off" icon={<ExploreOff />} />
            <Tab label="Explore" icon={<Explore />} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Explore stop</TabContainer>}
        {value === 6 && <TabContainer>Explore</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(ScrollableTabsButtonForce));
