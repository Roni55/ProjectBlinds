import React from 'react'
import PropTypes from 'prop-types'

const LinkTitle = (props) => {
    const {linkTitle} =this.props
  return (
    <div>
          <h1>{linkTitle}</h1>
    </div>
  )
}

LinkTitle.propTypes = {

}

export default LinkTitle
