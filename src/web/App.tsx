import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, CombinedState, Store } from 'redux'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from '../core/reducer'
import { IAppState } from '../core/interfaces'
import { logger, crashReporter } from '../core/utils/logger'
import coreSagas from '../core/sagas'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import ModalsSwitcher from './components/ActionModals'
import SearchResults from './components/SearchResults'
import Footer from './components/footer/Footer'
import BlurredFilter from './components/utils/blurred/Blurred'
import MovieDetails from './components/MovieDetails'
import Search from './components/Search/Search'
import '../index.css'

const sagaMiddleware = createSagaMiddleware()

const store: Store<CombinedState<IAppState>> =
  createStore(rootReducer, applyMiddleware(logger, crashReporter, sagaMiddleware))

for (const saga in coreSagas) {
  sagaMiddleware.run(coreSagas[saga])
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary>
          <ModalsSwitcher />
          <BlurredFilter>

            <Switch>
              <Route path='/movie/:movieId'>
                <MovieDetails />
              </Route>
              <Route path='/'>
                <Search />
              </Route>
            </Switch>

            <Route path='/'>
              <SearchResults />
            </Route>
            <Footer />
          </BlurredFilter>
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  )
}
