
import React from 'react'
import PropTypes from 'prop-types'
import FnButton from "./FnButton";
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';



const WrapLink = props => {
  return (
    <Link to="/"  style={{ width: '100%', height: 70, display: 'inline-block', verticalAalign: 'middle', display: 'inline-block', padding:10, marginLeft:5, justifyContent: 'space-around',postion:'relative' ,}}>
      <FnButton label="Blinds"  />
    </Link>
    
  )
}

WrapLink.propTypes = {

}

export default WrapLink


