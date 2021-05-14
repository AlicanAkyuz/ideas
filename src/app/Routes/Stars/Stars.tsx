/**
 * Stars pulls universes data from the API
 * renders an appropriate child: LoadingView, ErrorView, or UniversesView
 *  */

// libs
import React, { useState, useEffect, useContext, FC } from 'react'
// contexts and types
import { DataContext } from 'contexts/data/DataContext'
import { DataAction } from 'contexts/data/types'
// hooks
import useGetData from 'hooks/useGetData'
// utils
import getEnvironment from 'utils/getEnvironment'
// styles
import styles from './Stars.styles'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(styles)
// components
import LoadingView from 'components/LoadingView/LoadingView'
import ErrorView from 'components/ErrorView/ErrorView'
import StarsView from 'components/StarsView/StarsView'

const Stars: FC = () => {
  const classes = useStyles()

  // toggle state to re-fire client
  const [retryClient, setRetryClient] = useState(false)

  // pull data through useGetData
  const { isLoading, error, data } = useGetData(getEnvironment().starsApiPath, [retryClient])

  // set data to context
  const { dataDispatch } = useContext(DataContext)
  const { SET_STARS } = DataAction
  useEffect(() => {
    if (data) {
      dataDispatch({
        type: SET_STARS,
        payload: { stars: data },
      })
    }
  }, [data])

  // fired when user retries to load data -> re-fires useGetData
  const handleRetryClick = () => setRetryClient(!retryClient)

  return (
    <div className={classes.starsContainer}>
      {/* LOADING VIEW */}
      {isLoading && <LoadingView text='Loading Stars...' />}

      {/* ERROR VIEW  */}
      {!isLoading && error && (
        <ErrorView
          errMessage={error.message}
          buttonText='Retry'
          buttonCallBack={handleRetryClick}
        />
      )}

      {/* STARS VIEW */}
      {!isLoading && !error && data && <StarsView />}
    </div>
  )
}

export default Stars
