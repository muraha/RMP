import { omitBy, isNil } from 'lodash/fp'

import { MovieAppState } from '../interfaces'
import { Sort, Filter } from '../constants'

import { MovieActionType, MovieAction } from './actions'

const initialMovieAppState: MovieAppState = {
  totalAmount: 0,
  moviesList: {},
  filter: Filter.all,
  sortBy: Sort.rel,
  isMovieDataLoadingInProgress: false,
  descriptionForMovie: null,
  isDescriptionOpened: false
}

export const moviesReducer = (
  state = initialMovieAppState,
  action: MovieAction
): MovieAppState => {
  const { type, payload } = action
  switch (type) {
    case MovieActionType.SEARCH_MOVIE:
      return {
        ...state,
        isMovieDataLoadingInProgress: true,
        totalAmount: 0,
        moviesList: {},
      }
    case MovieActionType.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        ...payload,
        isMovieDataLoadingInProgress: false
      }
    case MovieActionType.GET_MOVIES_START: // fetch movies
      return {
        ...state,
        isMovieDataLoadingInProgress: true
      }
    case MovieActionType.GET_MOVIES_SUCCESS: // fetch movies
      return {
        ...state,
        ...payload,
        isMovieDataLoadingInProgress: false
      }
    case MovieActionType.OPEN_MOVIE_DESCRIPTION: // Filter for movie desc
      return {
        ...state,
        isDescriptionOpened: true,
        descriptionForMovie: state.moviesList[payload]
      }
    case MovieActionType.GET_MOVIE_DESC_SUCCESS: // fetch movie description data
      return {
        ...state,
        isDescriptionOpened: true,
        descriptionForMovie: payload,
      }
    case MovieActionType.CLOSE_MOVIE_DESCRIPTION:
      return {
        ...state,
        isDescriptionOpened: false
      }

    // CRUD Actions
    case MovieActionType.EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        isDescriptionOpened: false,
        moviesList: {
          ...state.moviesList,
          ...payload
        }
      }

    case MovieActionType.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        isDescriptionOpened: false,
        totalAmount: state.totalAmount + 1,
        moviesList: {
          ...state.moviesList,
          ...payload
        }
      }

    case MovieActionType.DELETE_MOVIE_SUCCESS:
      delete state.moviesList[payload]
      return {
        ...state,
        isDescriptionOpened: false,
        totalAmount: state.totalAmount - 1,
        moviesList: omitBy(isNil, state.moviesList)
      } // end CRUD Actions

    // Filter/Sort actions
    case MovieActionType.FILTER_MOVIES:
      return {
        ...state,
        filter: payload
      }
    case MovieActionType.SORT_MOVIES_BY_PARAM:
      return {
        ...state,
        sortBy: payload
      }

    default:
      return state
  }
}
