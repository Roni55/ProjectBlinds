
import React from 'react'
import PropTypes from 'prop-types'
import FnButton from "./FnButton";
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';

export const menu = ["home", "meta", "hreflang", "results", "stats"];

const WrapLink = props => {
  return (
    <Link to="/">
      <FnButton label="Blinds" />
    </Link>
    
  )
}

WrapLink.propTypes = {

}

export default WrapLink


