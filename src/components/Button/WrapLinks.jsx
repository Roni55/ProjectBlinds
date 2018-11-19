
import React from 'react'
import PropTypes from 'prop-types'
import FnButton from "./FnButton";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



export const menus =[{"link":"dashboard"},{"link":"about"},{"link":"contact"}];
//export const menus = [{id: "home", id: meta:"meta", id:  "hreflang", id:4 "stats",}];
// render() {
//   const data =[{"name":"test1"},{"name":"test2"}];
//   const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

//   return (
//     <div>
//     {listItems }
//     </div>
//   );
//}
// Second: Directly write the map function in the return

// render() {
//   const data =[{"name":"test1"},{"name":"test2"}];
//   return (
//     <div>
//     {data.map(function(d, idx){
//        return (<li key={idx}>{d.name}</li>)
//      })}
//     </div>
//   );
// }
const WrapLinks = props => {
  return (
    <List >
    {menus.map(({ id, link }) => (
        <ListItem key={id}  style={{ width: 90, height: 60, display: 'inline-block', padding:12}}>
          <ListItemText primary={link} />       
          <Link to= {`/${link}` }  >
            <FnButton label={link} />
          </Link>
        </ListItem>
    ))}
    </List>
    
  )
}

             
WrapLinks.propTypes = {

}

export default WrapLinks


