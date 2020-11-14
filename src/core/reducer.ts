import { combineReducers } from 'redux'

import { moviesReducer } from './movies/reducer'
import { modalsReducer } from './modals/reducer'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  modals: modalsReducer
})
