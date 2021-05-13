/**
 * HeaderView renders the apps logo and menu
 * */

// libs
import React, { FC, Fragment } from 'react'
// styles
import styles from './HeaderView.styles'
import { createUseStyles } from 'react-jss'
import { Typography } from 'antd'
// components
import MenuView from 'components/MenuView/MenuView'
// assets
import logo from 'assets/logo.png'

const useStyles = createUseStyles(styles)

const HeaderView: FC = () => {
  const classes = useStyles()
  const { Text } = Typography

  return (
    <Fragment>
      <div className={classes.logoContainer}>
        <Text className={classes.logoText}>Ideas</Text>
        <img className={classes.logo} src={logo} alt='geometric planet icon' />
      </div>
      <div className={classes.menuContainer}>
        <MenuView />
      </div>
    </Fragment>
  )
}

export default HeaderView
