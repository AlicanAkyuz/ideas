/**
 * Universes pulls universes data from the API
 * renders an appropriate child: LoadingView, ErrorView, or UniversesView
 * */

// libs
import React, { useState, useEffect, useContext, FC } from 'react'
// contexts and types
import { DataContext } from 'contexts/data/DataContext'
import { DataAction } from 'contexts/data/types'
import { GetUniversesApiResponseT } from 'types/api/getUniverses'
// hooks
import useGetData from 'hooks/useGetData'
// utils
import getEnvironment from 'utils/getEnvironment'
// styles
import styles from './Universes.styles'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(styles)
// components
import LoadingView from 'components/LoadingView/LoadingView'
import ErrorView from 'components/ErrorView/ErrorView'
import UniversesView from 'components/UniversesView/UniversesView'

const Universes: FC = () => {
  const classes = useStyles()

  // toggle state to re-fire client
  const [retryClient, setRetryClient] = useState(false)

  // pull data through useGetData
  const { isLoading, error, universesData } = useGetData<{
    universesData: GetUniversesApiResponseT | undefined
    error: Error | undefined
    isLoading: boolean
  }>(getEnvironment().universesApiPath, [retryClient])

  // set data to context
  const { dataDispatch } = useContext(DataContext)
  const { SET_UNIVERSES } = DataAction
  useEffect(() => {
    if (universesData) {
      dataDispatch({
        type: SET_UNIVERSES,
        payload: { universes: universesData },
      })
    }
  }, [universesData, dataDispatch, SET_UNIVERSES])

  // fired when user retries to load data -> re-fires useGetData
  const handleRetryClick = () => setRetryClient(!retryClient)

  return (
    <div className={classes.universesContainer}>
      {/* LOADING VIEW */}
      {isLoading && <LoadingView text='Loading Universes...' />}

      {/* ERROR VIEW  */}
      {!isLoading && error && (
        <ErrorView
          errMessage={error.message}
          buttonText='Retry'
          buttonCallBack={handleRetryClick}
        />
      )}

      {/* UNIVERSES VIEW */}
      {!isLoading && !error && universesData && <UniversesView />}
    </div>
  )
}

export default Universes
