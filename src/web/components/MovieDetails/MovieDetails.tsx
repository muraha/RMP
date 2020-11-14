import React, { useEffect } from 'react'
import classnames from 'classnames'
import {
  Link,
  useParams
} from 'react-router-dom'

import Text, { TextSize, TextTransform, TextWeight } from '../utils/text/Text'
import Button from '../utils/button/Button'

import styles from './movieDetails.css'

import { StateProps, DispatchProps } from './index'

type MovieDetailsProps = StateProps & DispatchProps

const MovieDetailsComponent: React.FC<MovieDetailsProps> = ({
  movieDescription,
  getMovieDescription,
  handleCloseDetails
}) => {
  const { movieId } = useParams()

  useEffect(() => { getMovieDescription(Number(movieId)) }, [])

  if (!movieDescription) {
    return (<>
      <div className={styles.DBackground} />
      <div className={styles.DGridContainer}>
        <p className={styles.DNetflix}>
          <Text
            red
            size={TextSize.m}
            transform={TextTransform.lowercase}
            weight={TextWeight.extraBold}
          >
            LOADING
          </Text>
          <Text
            red
            size={TextSize.m}
            transform={TextTransform.lowercase}
          >
            ...
          </Text>
        </p>
      </div>
    </>
    )
  }

  const {
    poster_path,
    title,
    vote_average,
    tagline,
    release_date,
    runtime,
    overview
  } = movieDescription

  return (<>
    <div className={styles.DBackground} />
    <div className={styles.DGridContainer}>
      <p className={styles.DNetflix}>
        <Text
          red
          size={TextSize.m}
          transform={TextTransform.lowercase}
          weight={TextWeight.extraBold}
        >
          netflix
        </Text>
        <Text
          red
          size={TextSize.m}
          transform={TextTransform.lowercase}
        >
          roulette
        </Text>
      </p>
      <Link to='/' className={styles.DSearchBtn}>
        <Button
          transparent
          onClick={handleCloseDetails}
        >
          <Text size={TextSize.xl} red>
            &times;
          </Text>
        </Button>
      </Link>

      <div className={styles.DPoster}>
        <img src={poster_path} />
      </div>
      <div className={styles.DTitle}>
        <Text
          classes={classnames(styles.DTitleText)}
          size={TextSize.xl}
          transform={TextTransform.none}
        >{title}</Text>
        <Text
          classes={classnames(styles.DRating)}
          size={TextSize.l}
        ><div>{String(vote_average).padEnd(3, '.0')}</div></Text>
      </div>
      <Text
        classes={classnames(styles.DTagline)}
        transform={TextTransform.lowercase}
      >{tagline}</Text>
      <Text
        classes={classnames(styles.DYear)}
        size={TextSize.l}
        red
      >{release_date.slice(0, 4)}</Text>
      <Text
        classes={classnames(styles.DRuntime)}
        size={TextSize.l}
        transform={TextTransform.lowercase}
        red
      >{runtime} {' min'}</Text>
      <Text
        classes={classnames(styles.DDetails)}
        transform={TextTransform.none}
        weight={TextWeight.light}
      >{overview}</Text>
    </div>
  </>)
}

// eslint-disable-next-line import/no-default-export
export default MovieDetailsComponent
