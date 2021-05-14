import React, { createContext, useReducer, Dispatch } from 'react'
import { dataReducer } from './dataReducer'
import { InitialState, DataActions } from './types'

const initialState = {
  universes: undefined,
  stars: undefined,
}

const DataContext = createContext<{
  dataState: InitialState
  dataDispatch: Dispatch<DataActions>
}>({
  dataState: initialState,
  dataDispatch: () => null,
})

const DataProvider: React.FC = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState)
  return <DataContext.Provider value={{ dataState, dataDispatch }}>{children}</DataContext.Provider>
}

export { DataProvider, DataContext }
