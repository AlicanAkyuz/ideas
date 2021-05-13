/**
 * LoadingView is a dumy component
 * renders a spinner and the passed text prop
 * */

// libs
import React, { FC } from 'react'
// types
import { LoadingViewPropsT } from 'types/components/LoadingView'
// styles
import styles from './LoadingView.styles'
import { createUseStyles } from 'react-jss'
import { Spin, Typography } from 'antd'

const useStyles = createUseStyles(styles)

const LoadingView: FC<LoadingViewPropsT> = ({ text }) => {
  const classes = useStyles()
  const { Text } = Typography

  return (
    <div className={classes.loadingViewContainer}>
      <Spin className={classes.spinner} size='large' />
      <Text className={classes.loadingText}>{text}</Text>
    </div>
  )
}

export default LoadingView
