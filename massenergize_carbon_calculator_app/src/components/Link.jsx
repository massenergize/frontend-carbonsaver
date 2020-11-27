import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  link: props => ({
    ...props,
    textDecoration: 'none',
  }),
})

const LinkComponent = ({ route, children, ...stylesProps }) => {
  const classes = useStyles(stylesProps)

  return (
    <Link to={`/${route === 'home' ? '' : route}`} className={classes.link}>
      {children}
    </Link>
  )
}

LinkComponent.propTypes = {
  route: PropTypes.string,
  children: PropTypes.any,
}

export default LinkComponent
