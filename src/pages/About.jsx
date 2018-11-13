import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import Logo from './logo.svg'
import background from './backround.jpg'
import '../App.css'
import SvgComponent from './SvgComponent'
import ReactSVG from 'react-svg'
import Sides from '../components/Layout/Sides'
import RightSide from '../components/Layout/RightSide'
import fnButton from '../components/Button/fnButton'
import SlantButton from '../components/Button/SlantButton'
import '../components/Button/buttonSkewed.css'
const styles = {
  root: {
    width: '100%',
    maxWidth: '500',
    margin: '0 .4em',
    textAlign: 'center'
  }
}

function About(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Fragment>
        <Typography component='h2' variant='h1' gutterBottom>
          Blinds{' '}
        </Typography>
        <ReactSVG src='./Logo.svg' />
        <ReactSVG
          src='Logo.svg'
          evalScripts='always'
          fallback={() => <span>Error!</span>}
          onInjected={(error, svg) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(svg)
          }}
          renumerateIRIElements={false}
          svgClassName='svg-class-name'
          svgStyle={{ width: 200 }}
          className='wrapper-class-name'
          onClick={() => {
            console.log('wrapper onClick')
          }}
        />
        <div className='nav-image'> Top top </div>
        <img src={background} style={{ height: '48px', width: '900px' }} />
        Pick Search{' '}
      </Fragment>
      <img src={'https://s.cdpn.io/3/kiwi.svg'} style={{ height: '28px' }} />
      <img src={Logo} style={{ height: '28px' }} className='App-logo' />
      <Sides />
      <RightSide />
      <div>
        <fnButton className='button-slanted'> Button </fnButton>
        <SlantButton />
      </div>
      <Typography variant='subtitle1' gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>

    </div>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
