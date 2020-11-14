import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { App } from './App'
import Page404 from './components/404/Page404'
import '../index.css'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/movie/:movieId', '/movie?']} component={App} />
        <Route path="/404" component={Page404} />
        <Redirect path="/*" to="/404" />
      </Switch>
    </BrowserRouter>
  )
}
