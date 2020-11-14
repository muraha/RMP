import { useState, useCallback } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { keyBy } from 'lodash/fp'

import { MovieList, Movie, MoviesQueries } from '../interfaces'
import { Filter, Sort } from '../constants'

export const useToggleSort = (initialValue = false): [boolean, () => void] => {
  const [sortValue, setSorting] = useState(initialValue)
  const setSort = useCallback(() => {
    setSorting(!sortValue)
  }, [sortValue])
  return [sortValue, setSort]
}

const convertMovieListToArray = (moviesList: MovieList): Movie[] => Object.values(moviesList)

const getSortedMovieList = (sortBy: Sort, movies: Movie[]): Movie[] => {
  switch (sortBy) {
    case 'rating':
      return movies.sort((a, b) => +b.vote_average - +a.vote_average)
    default:
      return movies.sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date))
  }
}

const getFilteredMovieList = (filter: Filter, movies: Movie[]): Movie[] => {
  switch (filter) {
    case 'All':
      return movies
    default:
      return movies.filter(m => m.genres.includes(filter))
  }
}

export const getProcessedMovieList = (sortBy: Sort, filter: Filter, moviesList: MovieList): Movie[] =>
  getFilteredMovieList(filter,
    getSortedMovieList(sortBy,
      convertMovieListToArray(moviesList)
    )
  )

let uniqueId = 900000
export const nextId = (): number => uniqueId++

export const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  release_date: Yup.date().required('Required'),
  poster_path: Yup.string().required('Required'),
  genres: Yup.string().required('Required'),
  overview: Yup.string(),
  runtime: Yup.number().positive('Must be more than 0').integer('Must be integer').required('Required'),
  vote_average: Yup.number().positive('Must be more than 0').max(10, 'Must be less than or equal to 10').required('Required')
})

export const validationSchemaSingleInput = Yup.object({
  search: Yup.string().matches(/\p{L}/gu),
})

export const getOnSubmitFormikAction = (customOnSubmitAction: (movieData) => void) => (values: FormikValues): void => {
  const vote_average = Math.round(values.vote_average * 10) / 10
  return customOnSubmitAction({ [values.id]: { ...values, vote_average } })
}

export const getFormatedMovieObjectById = (movies: Movie[]):MovieList => keyBy('id', movies)

export const getSearchParams = (queries: MoviesQueries):string => {
  let param = '?'
  Object.entries(queries).forEach(([key, value], i) => { value && (param += `${i ? '&' : ''}${key}=${value}`) })
  return param
}
