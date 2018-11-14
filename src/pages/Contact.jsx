import React from 'react'
import Typography from '@material-ui/core/Typography';
// import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";   <ScrollableTabsButtonForce />
// import { SideMain } from './SideMenu'
// import MatSide from "./MatSide"  <MatSide />
import ResponsiveDrawer from "./ResponsiveDrawer";
// import SimpleListMenu from "./SimpleListMenu ";
import Icon from "./Icon"
// import LockIcon from "../components/Button/LockIcon";
import Button from "../components/Button/Button";
import FnButton from "../components/Button/FnButton";

const Contact = () => {
  return (
    <div>
      <h1>Contact </h1>
      
      <ResponsiveDrawer />
     
      <FnButton />
      <Icon />
      <Button />
      <FnButton />

      <footer >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
      </footer>

    </div>
  )
}

export default Contact;

