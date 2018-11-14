
import React from 'react'
import PropTypes from 'prop-types'
import FnButton from "./FnButton";
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';

const WrapLink = props => {
  return (
    <Link to="/">
      <FnButton />
    </Link>
  )
}

WrapLink.propTypes = {

}

export default WrapLink
