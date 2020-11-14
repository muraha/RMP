
import React from 'react'

import Text, { TextTransform, TextSize, TextWeight } from '../text/Text'

import styles from './noMovies.css'

const noMovieComponent: React.FC = () => (
  <>
    <p className={styles.NoMovies}>
      <Text
        transform={TextTransform.capitalize}
        size={TextSize.xl}
        weight={TextWeight.light}
      >
        no movies found
      </Text>
    </p>
  </>
)

// eslint-disable-next-line import/no-default-export
export default noMovieComponent
