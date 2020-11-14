import axios from 'axios'

import { MOVIE_API_URL } from '../constants'
import { Movie, FetchedMoviesData } from '../interfaces'

axios.defaults.baseURL = MOVIE_API_URL

const fetchMovies = async (params = ''): Promise<FetchedMoviesData> => {
  const { data } = await axios.get<FetchedMoviesData>(`${MOVIE_API_URL}/movies${params}`)
  return data
}

const fetchMovieById = async (id: number): Promise<any> => {
  const { data } = await axios.get(`${MOVIE_API_URL}/movies/${id}`)
  return data
}

const editMovie = async (id: number, movie: Movie): Promise<any> => {
  const { data } = await axios.put(`${MOVIE_API_URL}/movies/${id}`, movie)
  return data
}

const deleteMovie = async (id: number): Promise<any> => {
  const { data } = await axios.delete(`${MOVIE_API_URL}/movies/${id}`)
  return data
}

const createMovie = async (movie: Movie): Promise<any> => {
  const { data } = await axios.post(`${MOVIE_API_URL}/movies/`, movie)
  return data
}

// eslint-disable-next-line import/no-default-export
export default {
  fetchMovies,
  fetchMovieById,
  editMovie,
  deleteMovie,
  createMovie
}
