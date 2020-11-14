import React, { useState } from 'react'
import classnames from 'classnames'
import {
  Link
} from 'react-router-dom'

import Text, { TextSize, TextTransform, TextWeight } from '../../utils/text/Text'

import styles from './MovieCard.css'

type OwnProps = {
  deleteClickHandler: (id: number) => void
  editClickHandler: (id: number) => void
  genres: string[]
  id: string
  movieCardClickHandler: (event: React.SyntheticEvent<HTMLElement>) => void
  posterUrl: string
  releaseDate: string
  title: string
}

const MovieCardComponent: React.FC<OwnProps> = ({
  deleteClickHandler,
  editClickHandler,
  genres,
  id,
  movieCardClickHandler,
  posterUrl,
  releaseDate,
  title
}) => {
  const initState: {
    isHovering: boolean
    isMovieOptionsOpened: boolean
  } = {
    isHovering: false,
    isMovieOptionsOpened: false
  }

  const [state, setCardOptionState] = useState(initState)
  const toggleMouseHoverState = () => state.isMovieOptionsOpened ? undefined : setCardOptionState({
    ...state,
    isHovering: !state.isHovering
  })
  const handleIconClick = () => setCardOptionState({
    ...state,
    isMovieOptionsOpened: true
  })
  const handleCloseActions = () => setCardOptionState({
    ...state,
    isMovieOptionsOpened: false
  })

  const handleEditBtn = (e) => {
    const movieId = Number(e.target.dataset.movieid)
    editClickHandler(movieId)
    return setCardOptionState({
      ...state,
      isMovieOptionsOpened: false,
      isHovering: false
    })
  }
  const handleDeleteBtn = (e) => {
    const movieId = Number(e.target.dataset.movieid)
    deleteClickHandler(movieId)
    return setCardOptionState({
      ...state,
      isMovieOptionsOpened: false,
      isHovering: false
    })
  }

  const handleMovieCardClick = (event) => {
    movieCardClickHandler(event)
    handleCloseActions()
  }

  return (
    <div
      id={id}
      className={styles.FilmComponent}
      onMouseEnter={toggleMouseHoverState}
      onMouseLeave={state.isHovering ? toggleMouseHoverState : () => null}
    >
      {state.isHovering && !state.isMovieOptionsOpened &&
        <div
          className={styles.actionButton}
          onClick={handleIconClick}
        >
          <Text size={TextSize.l}>•••</Text>
        </div>
      }
      {
        state.isMovieOptionsOpened &&
        <div className={styles.additionalActions}>
          <div onClick={handleCloseActions}
            className={styles.actionClose}
          >
            <Text size={TextSize.l}>
              &times;
            </Text>
          </div>
          <div data-movieid={id} className={styles.action} onClick={handleEditBtn} >
            <Text transform={TextTransform.capitalize}> edit </Text>
          </div>
          <div data-movieid={id} className={styles.action} onClick={handleDeleteBtn} >
            <Text transform={TextTransform.capitalize}> delete </Text>
          </div>
        </div>
      }
      <Link
        to={`/movie/${id}`}
        className={styles.poster}
        onClick={e => { handleMovieCardClick(e) }}
      >
        <img
          data-movieid={id}
          src={posterUrl}
          aria-label={'poster'}

        />
      </Link>
      <Text
        classes={classnames(styles.title)}
        transform={TextTransform.capitalize}
      >{title}</Text>
      <Text
        classes={classnames(styles.year)}
        size={TextSize.xs}
        transform={TextTransform.capitalize}
        weight={TextWeight.bold}
        gray
      >{releaseDate}</Text>
      <Text
        classes={classnames(styles.genres)}
        size={TextSize.xs}
        transform={TextTransform.capitalize}
        weight={TextWeight.extraLight}
      >{genres.join(', ')}</Text>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default MovieCardComponent
