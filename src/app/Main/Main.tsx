/**
 * Main vertically renders the app's header (logo & menu) and view components through Routes
 * */

// libs
import React, { FC, Fragment } from 'react'
// styles
import styles from './Main.styles'
import { createUseStyles } from 'react-jss'
// components
import Routes from '../Routes/Routes'
import HeaderView from 'components/HeaderView/HeaderView'

const useStyles = createUseStyles(styles)

const Main: FC = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.headerContainer}>
        <HeaderView />
      </div>
      <div className={classes.routesContainer}>
        <Routes />
      </div>
    </Fragment>
  )
}

export default Main
