/**
 * Routes define app's routes and links them to relevant component views
 * */

// libs
import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
// types
import { AppRuotePaths } from 'types/app/Routes'
// components
import Home from './Home/Home'
import Universes from './Universes/Universes'
import Stars from './Stars/Stars'
import Imprint from './Imprint/Imprint'

const Routes: FC = () => (
  <Switch>
    <Route path={AppRuotePaths.universes}>
      <Universes />
    </Route>
    <Route path={AppRuotePaths.stars}>
      <Stars />
    </Route>
    <Route path={AppRuotePaths.imprint}>
      <Imprint />
    </Route>
    <Route path={AppRuotePaths.home}>
      <Home />
    </Route>
  </Switch>
)

export default Routes
