/**
 * Universes pulls universes data from the API
 * renders an appropriate child: LoadingView, ErrorView, or UniversesView
 * */

// libs
import React, { FC } from 'react'
// styles
import styles from './UniversesView.styles'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(styles)

const UniversesView: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.universesViewContainer}>
      <h4>TODO</h4>
    </div>
  )
}

export default UniversesView
