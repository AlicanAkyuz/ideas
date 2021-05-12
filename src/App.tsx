import React, { FC } from 'react'
import styles from './App.styles'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(styles)

const App: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.appContainer}>
      <h3>Hello World</h3>
    </div>
  )
}

export default App
