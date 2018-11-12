import React, { Component, Children } from 'react';
import data from '../components/Json/data.json';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});
 
 class Menu extends Component {
  constructor( props ) {
    super( props );
    // bind the this context
    this.handleClick = this.handleClick.bind( this );
  }
  
  state = {
    show: false,
    open: false
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    
  }
  handleClick2 = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={
            <ListSubheader component="div" >Json List Items</ListSubheader>
          }
        >
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            {
              data.map((menu) => {
                return <li key={menu.id}>{menu.name} - {menu.icon} >
              <a href={menu.link} onClick={() => this.handleClick}> Click</a>
                  {/* <ul>
                    {menu.children.map((e) => {
                      return <a href={e.link}>link</a>
                    })}

                  </ul> */}
                </li>

              })
            }
          
            </ListItemIcon>
            <ListItemText inset primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="About" />
          </ListItem>
          <ListItem button onClick={this.handleClick2}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Inbox" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>

          </List>
        </div>
    );
  }
 }

 Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);