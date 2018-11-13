import React from 'react'
import Typography from '@material-ui/core/Typography';
import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";
//import { SideMain } from './SideMenu'
import  MatSide  from "./MatSide"
const Contact = () => {
  return (
    <div>
      <h1>Contact </h1>
      
      <ScrollableTabsButtonForce />
     

      <footer >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>

    </div>
  )
}

export default Contact;

