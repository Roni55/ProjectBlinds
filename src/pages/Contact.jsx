import React from 'react'
import Typography from '@material-ui/core/Typography';
// import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";   <ScrollableTabsButtonForce />
// import { SideMain } from './SideMenu'
import  FullWidthTabs from './FullWidthTabs'
import MatSide from "./MatSide"  
import ResponsiveDrawer from "./ResponsiveDrawer";
// import SimpleListMenu from "./SimpleListMenu ";
import Icon from "./Icon"
// import LockIcon from "../components/Button/LockIcon";
import Button from "../components/Button/Button";
import FnButton from "../components/Button/FnButton";
import LinkButton from '../components/Button/LinkButton';
import { withRouter } from 'react-router';
// import MyIcon from "../components/Layout/MyIcon";
import WrapLink from "../components/Button/WrapLink2";
import SvgIcon from '@material-ui/core/SvgIcon';

// If you need an onClick method:
// <LinkButton
//   to='/path/to/page'
//   onClick={(event) => {
//     console.log('custom event here!', event)
//   }}
// >Push My Buttons!</LinkButton><FnButton />

const Contact = () => {
  return (
    <div>
      <h1>Contact </h1>
      <ResponsiveDrawer />
      <FullWidthTabs />
      <LinkButton to='/about'>Push </LinkButton>
      <WrapLink />
      <MatSide />
      
      
      
      

      <footer >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
      </footer>

    </div>
  )
}

export default Contact;

