/**
 * ErrorView is a dumy component rendering an err icon and passed error text vertically
 * renders a button with the passed buttonText and callBack function to retry
 * */

// libs
import React from 'react'
// contexts and types
import { ErrorViewPropsT } from 'types/components/ErrorView'
// styles
import styles from './ErrorView.styles'
import { createUseStyles } from 'react-jss'
import { Result, Button } from 'antd'

const useStyles = createUseStyles(styles)

const ErrorView: React.FC<ErrorViewPropsT> = ({ errMessage, buttonText, buttonCallBack }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Result
        status={'error'}
        subTitle={errMessage}
        extra={
          buttonText &&
          buttonCallBack && [
            <Button type='primary' key='console' onClick={buttonCallBack}>
              {buttonText}
            </Button>,
          ]
        }></Result>
    </div>
  )
}

export default ErrorView
