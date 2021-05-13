/**
 * App is the entry point to the application
 * initiates browser router and renders main UI entry point
 * */

// libs
import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
// components
import Main from './Main/Main'

const App: FC = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

export default App
