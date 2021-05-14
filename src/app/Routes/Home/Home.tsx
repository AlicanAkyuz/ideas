/**
 * Home renders a static page with a quote
 * */

// libs
import React, { FC } from 'react'
// styles
import styles from './Home.styles'
import { createUseStyles } from 'react-jss'
import { Typography } from 'antd'

const useStyles = createUseStyles(styles)

const Home: FC = () => {
  const classes = useStyles()
  const { Text } = Typography
  return (
    <div className={classes.homeContainer}>
      <Text className={classes.quote}>&quot; The Cosmos is</Text>
      <Text className={classes.quote}>all that is</Text>
      <Text className={classes.quote}>or ever was</Text>
      <Text className={classes.quote}>or ever will be. &quot;</Text>
      <div className={classes.authorContainer}>
        <Text className={classes.author}>― Carl Sagan</Text>
      </div>
    </div>
  )
}

export default Home
