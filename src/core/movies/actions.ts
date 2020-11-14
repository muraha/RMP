import { MoviesData, Movie } from '../interfaces'
import { Sort, Filter } from '../constants'

export enum MovieActionType {
  SEARCH_MOVIE = 'MOVIE/SEARCH',
  SEARCH_MOVIES_SUCCESS = 'MOVIE/SEARCH_SUCCESS',
  GET_MOVIE_DESC = 'MOVIE/GET_MOVIE_DESC',
  GET_MOVIE_DESC_SUCCESS = 'MOVIE/GET_MOVIE_DESC_SUCCESS',
  GET_MOVIES_START = 'MOVIE/FETCH_START',
  GET_MOVIES_SUCCESS = 'MOVIE/FETCH_SUCCESS',
  OPEN_MOVIE_DESCRIPTION = 'MOVIE/OPEN_DESCRIPTION',
  CLOSE_MOVIE_DESCRIPTION = 'MOVIE/CLOSE_DESCRIPTION',

  EDIT_MOVIE_SUCCESS = 'EDIT_MOVIE_SUCCESS',
  DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS',
  ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS',

  FILTER_MOVIES = 'FILTER_MOVIES',
  SORT_MOVIES_BY_PARAM = 'SORT_MOVIES_BY_PARAM',
}

interface ActionPayload {
  payload?: any
}
interface SearchMovie extends ActionPayload {
  type: MovieActionType.SEARCH_MOVIE
}
interface SearchMovieSuccess extends ActionPayload {
  type: MovieActionType.SEARCH_MOVIES_SUCCESS
  payload: Movie
}
interface GetMovieDesc extends ActionPayload {
  type: MovieActionType.GET_MOVIE_DESC
}
interface GetMovieDescSuccess extends ActionPayload {
  type: MovieActionType.GET_MOVIE_DESC_SUCCESS
  payload: Movie
}
interface GetMovies extends ActionPayload {
  type: MovieActionType.GET_MOVIES_START
}
interface GetMoviesSuccess extends ActionPayload {
  type: MovieActionType.GET_MOVIES_SUCCESS
  payload: MoviesData
}
interface OpenMovieDescription extends ActionPayload {
  type: MovieActionType.OPEN_MOVIE_DESCRIPTION
  payload: string
}
interface CloseMovieDescription extends ActionPayload {
  type: MovieActionType.CLOSE_MOVIE_DESCRIPTION
}
// CRUD actions
interface EditMovieSuccess extends ActionPayload {
  type: MovieActionType.EDIT_MOVIE_SUCCESS
  payload: Movie
}
interface DeleteMovieSuccess extends ActionPayload {
  type: MovieActionType.DELETE_MOVIE_SUCCESS
  payload: number
}
interface AddMovieSuccess extends ActionPayload {
  type: MovieActionType.ADD_MOVIE_SUCCESS
  payload: Movie
}// CRUD actions end
// Filtering
interface FilterMovies extends ActionPayload {
  type: MovieActionType.FILTER_MOVIES
  payload: string
}
interface SortMovie extends ActionPayload {
  type: MovieActionType.SORT_MOVIES_BY_PARAM
  payload: string
} // Filtering end

export type MovieAction =
  | SearchMovie
  | SearchMovieSuccess
  | GetMovieDesc
  | GetMovieDescSuccess
  | GetMovies
  | GetMoviesSuccess
  | OpenMovieDescription
  | CloseMovieDescription
  | EditMovieSuccess
  | DeleteMovieSuccess
  | AddMovieSuccess
  | FilterMovies
  | SortMovie

export const searchMovie = (): MovieAction => (
  { type: MovieActionType.SEARCH_MOVIE })
export const searchMovieSuccess = (payload: Movie): MovieAction => (
  { type: MovieActionType.SEARCH_MOVIES_SUCCESS, payload })

export const getMovieDesc = (payload: number): MovieAction => (
  { type: MovieActionType.GET_MOVIE_DESC, payload })
export const getMovieDescSuccess = (payload: Movie): MovieAction => (
  { type: MovieActionType.GET_MOVIE_DESC_SUCCESS, payload })

export const getMovies = (): MovieAction => (
  { type: MovieActionType.GET_MOVIES_START })
export const getMoviesSuccess = (payload: MoviesData): MovieAction => (
  { type: MovieActionType.GET_MOVIES_SUCCESS, payload })

export const openDescription = (payload: string): MovieAction => (
  { type: MovieActionType.OPEN_MOVIE_DESCRIPTION, payload })
export const closeDescription = (): MovieAction => (
  { type: MovieActionType.CLOSE_MOVIE_DESCRIPTION })

export const editMovieSuccess = (payload: Movie): MovieAction => (
  { type: MovieActionType.EDIT_MOVIE_SUCCESS, payload })
export const deleteMovieSuccess = (payload: number): MovieAction => (
  { type: MovieActionType.DELETE_MOVIE_SUCCESS, payload })
export const addMovieSuccess = (payload: Movie): MovieAction => (
  { type: MovieActionType.ADD_MOVIE_SUCCESS, payload })

export const filterMovies = (payload: Filter): MovieAction => (
  { type: MovieActionType.FILTER_MOVIES, payload })
export const sortMovies = (payload: Sort): MovieAction => (
  { type: MovieActionType.SORT_MOVIES_BY_PARAM, payload })

// eslint-disable-next-line import/no-default-export
export default {
  searchMovie,
  searchMovieSuccess,
  getMovieDescSuccess,
  getMovies,
  getMoviesSuccess,
  openDescription,
  closeDescription,
  editMovieSuccess,
  deleteMovieSuccess,
  addMovieSuccess,
  filterMovies,
  sortMovies,
}
