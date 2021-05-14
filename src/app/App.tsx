/**
 * App is the entry point to the application
 * initiates browser router, provides Data Context and renders main UI entry point
 * */

// libs
import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
// contexts
import { DataProvider } from 'contexts/data/DataContext'
// components
import Main from './Main/Main'

const App: FC = () => (
  <DataProvider>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </DataProvider>
)

export default App
