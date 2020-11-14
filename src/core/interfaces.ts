import { Filter, Sort } from './constants'

export interface Movie {
  budget?: number
  genres: string[]
  id: number
  overview: string
  poster_path: string
  release_date: string
  revenue?: number
  runtime?: number
  tagline?: string
  title: string
  vote_average: string
  vote_count?: number
}

export interface localFilter {
  name: string
  selected?: string
}

export interface IAppState {
  modals: ModalAppState
  movies: MovieAppState
}

export type MovieList = { [id: number]: Movie }

export interface MoviesData {
  totalAmount: number
  moviesList: MovieList
}

export interface FetchedMoviesData {
  totalAmount: number
  data: Movie[]
}

interface MoviesFiltering {
  filter: Filter
  sortBy: Sort
}

export interface MoviesQueries extends Partial<MoviesFiltering> {
  search?: string
}
export interface MovieAppState extends MoviesData, MoviesFiltering {
  descriptionForMovie: Movie
  isDescriptionOpened: boolean
  isMovieDataLoadingInProgress: boolean
}

export interface ModalAppState {
  isAddModalActive: boolean
  isDeleteModalActive: boolean
  isEditModalActive: boolean
  selectedMovieId: number
}
