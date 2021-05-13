/**
 * MenuView renders 4 menu items and directs to the relevant route upon click
 * */

// libs
import React, { useState, FC } from 'react'
import { Link } from 'react-router-dom'
// types
import { AppRuotePaths, AppRuotes } from 'types/app/Routes'
// styles
import styles from './MenuView.styles'
import { createUseStyles } from 'react-jss'
import { Menu } from 'antd'

const useStyles = createUseStyles(styles)

const MenuView: FC = () => {
  const classes = useStyles()

  // selected menu item
  const [currentlySelectedMenuItem, setCurrentlySelectedMenuItem] = useState<AppRuotes>(
    AppRuotes.home,
  )

  // fired upon menu item click -> updates the selected menu item
  const handleMenuItemClick = (e) => setCurrentlySelectedMenuItem(e.key)

  return (
    <Menu
      className={classes.menu}
      onClick={handleMenuItemClick}
      selectedKeys={[currentlySelectedMenuItem]}
      mode='horizontal'>
      {/* HOME */}
      <Menu.Item
        key={AppRuotes.home}
        className={
          currentlySelectedMenuItem === AppRuotes.home ? classes.selectedMenuItem : classes.menuItem
        }>
        <Link to={AppRuotePaths.home}>{AppRuotes.home}</Link>
      </Menu.Item>

      {/* UNIVERSES */}
      <Menu.Item
        key={AppRuotes.universes}
        className={
          currentlySelectedMenuItem === AppRuotes.universes
            ? classes.selectedMenuItem
            : classes.menuItem
        }>
        <Link to={AppRuotePaths.universes}>{AppRuotes.universes}</Link>
      </Menu.Item>

      {/* STARS */}
      <Menu.Item
        key={AppRuotes.stars}
        className={
          currentlySelectedMenuItem === AppRuotes.stars
            ? classes.selectedMenuItem
            : classes.menuItem
        }>
        <Link to={AppRuotePaths.stars}>{AppRuotes.stars}</Link>
      </Menu.Item>

      {/* IMPRINT */}
      <Menu.Item
        key={AppRuotes.imprint}
        className={
          currentlySelectedMenuItem === AppRuotes.imprint
            ? classes.selectedMenuItem
            : classes.menuItem
        }>
        <Link to={AppRuotePaths.imprint}>{AppRuotes.imprint}</Link>
      </Menu.Item>
    </Menu>
  )
}

export default MenuView
