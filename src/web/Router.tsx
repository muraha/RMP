import React from 'react'
import {
  Router as BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { createMemoryHistory } from 'history'

import { App } from './App'
import Page404 from './components/404/Page404'
import '../index.css'

const history = createMemoryHistory()

export const Router: React.FC = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={['/', '/movie/:movieId', '/movie?']} component={App} />
        <Route path="/404" component={Page404} />
        <Redirect path="/*" to="/404" />
      </Switch>
    </BrowserRouter>
  )
}
