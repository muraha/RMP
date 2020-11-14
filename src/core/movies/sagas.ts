import { takeLatest, put, call, all } from 'redux-saga/effects'
import { Action } from 'redux-actions'

// import modalActions from '../modals/actions'
import api from '../utils/api'

import movieAction, { MovieActionType } from './actions'

export function * fetchMovieDescription (action: Action<number>) {
  try {
    const result = yield call(api.fetchMovieById, action.payload)

    yield put(movieAction.getMovieDescSuccess(result))
  } catch (e) {
    console.error(e)
  }
}

// export function * fetchMovie (action: Action<number>) {
//   try {
//     const result = yield call(api.fetchMovie, action.payload)
//     yield put(actions.fetchMovieSuccess(result))
//   } catch (e) {
//     console.error(e)
//     yield put(actions.fetchMovieError(true))
//   }
// }

// export function * editMovie (action: Action<any>) {
//   try {
//     const result = yield call(api.editMovie, action.payload)
//     yield put(actions.editMovieSuccess(result))
//     yield put(modalActions.closeModal())
//   } catch (e) {
//     console.error(e)
//     yield put(actions.editMovieError(true))
//   }
// }

// export function * deleteMovie (action: Action<number>) {
//   try {
//     yield call(api.deleteMovie, action.payload)
//     yield put(actions.deleteMovieSuccess(action.payload))
//     yield put(modalActions.closeModal())
//   } catch (e) {
//     console.error(e)
//     yield put(actions.deleteMovieError(true))
//   }
// }

// export function * createMovie (action: Action<any>) {
//   try {
//     const result = yield call(api.createMovie, action.payload)
//     yield put(actions.createMovieSuccess(result))
//     yield put(modalActions.closeModal())
//   } catch (e) {
//     console.error(e)
//     yield put(actions.createMovieError(true))
//   }
// }

// export function * watchQueryUpdate (action: Action<any>) {
//   yield put(actions.setQuery(action.payload))
//   const queries = yield select((state) => state.moviesReducer.queries)
//   try {
//     const result = yield call(api.fetchMoviesQueries, queries)
//     yield put(actions.fetchMoviesSuccess(result))
//   } catch (e) {
//     yield put(actions.fetchMoviesError(true))
//   }
// }

export function * moviesSagas () {
  yield all([
    takeLatest(MovieActionType.GET_MOVIE_DESC, fetchMovieDescription),
  ])
}
