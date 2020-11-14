import React, { useCallback } from 'react'

import MovieCard from '../MovieCard/MovieCard'
import Text, { TextTransform, TextWeight } from '../../utils/text/Text'
import { Movie } from '../../../../core/interfaces'
import { getProcessedMovieList } from '../../../../core/utils/helper'
import NoMovies from '../../utils/noMovies/noMovies'

import styles from './Movies.css'

import { StateProps, DispatchProps } from './index'

type OwnProps = {
  totalAmount: number,
  moviesList: Movie[]
}
type MoviesProps = OwnProps & StateProps & DispatchProps

export const MoviesContainer: React.FC<MoviesProps> = ({
  totalAmount,
  moviesList,
  isMovieDataLoadingInProgress,
  openMovieDescription,
  onEditModalClick,
  onDeleteModalClick,
  filter,
  sortBy
}) => {
  // Open Movie Details SubPage
  const handleMovieCardClick = useCallback(
    ({ target: { dataset: { movieid } } }) => openMovieDescription(Number(movieid)),
    [moviesList]
  )

  const renderEachMovie = ({ id, title, release_date, poster_path, genres }) => (
    <React.Fragment key={id}>
      <MovieCard
        genres={genres}
        id={id.toString()}
        movieCardClickHandler={handleMovieCardClick}
        editClickHandler={onEditModalClick}
        deleteClickHandler={onDeleteModalClick}
        posterUrl={poster_path}
        releaseDate={release_date.slice(0, 4)}
        title={title}
      />
    </React.Fragment>
  )

  const processedMovieList = getProcessedMovieList(sortBy, filter, moviesList)

  return (<>
    {isMovieDataLoadingInProgress &&
      <p className={styles.MoviesCounter}>
        <Text weight={TextWeight.bold}>
          {' loading is in progress ...'}
        </Text>
      </p>
    }

    {
      processedMovieList.length > 0 &&
      <>
        <p className={styles.MoviesCounter}>
          <Text weight={TextWeight.bold}>
            {totalAmount}
          </Text>
          <Text transform={TextTransform.lowercase}>
            {' movies found'}
          </Text>
        </p>
        <div className={styles.FilmsWrapper}>

          {processedMovieList.map(renderEachMovie)}
        </div>
      </>
    }

    {
      processedMovieList.length === 0 && <NoMovies />
    }
  </>)
}
