import React from 'react'
import classnames from 'classnames'

import { Link } from 'react-router-dom'

import Button from '../utils/button/Button'
import Text, { TextSize, TextTransform, TextWeight } from '../utils/text/Text'

import styles from './styles.css'

const Page404: React.FC = () => {
  return (
    <>
      <div id={styles['pg404_background-404']}>
        <p className={styles.netflix}>
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
        <div id={styles.pg404_stars1} />
        <div id={styles.pg404_stars2} />
        <div id={styles.pg404_stars3} />
        <div id={styles.pg404_title}>
          <span className={styles['pg404_text-small']}>
            THERE IS NO EMOTION, THERE IS
          </span>
          <br />
          <span className={styles['pg404_text-big']}>
            PEACE
          </span>
          <br />
          <span className={styles['pg404_text-small']}>
            THERE IS NO IGNORANCE, THERE IS
          </span>
          <br />
          <span className={styles['pg404_text-big']}>
            KNOWLEDGE
          </span>
          <br />
          <span className={styles['pg404_text-small']}>
            THERE IS NO PASSION, THERE IS
          </span>
          <br />
          <span className={styles['pg404_text-big']}>
            SERENITY
          </span>
          <br />
          <span className={styles['pg404_text-small']}>
            THERE IS NO CHAOS, THERE IS
          </span>
          <br />
          <span className={styles['pg404_text-big']}>
            HARMONY
          </span>
          <br />
          <span className={styles['pg404_text-small']}>
            THERE IS NO INFORMATION, THERE IS
          </span>
          <br />
          <span className={styles['pg404_text-404']}>
            404
          </span>
          <br />
          <br />
          <Link to="/"><Button gray classes={classnames(styles.button)}>GO BACK TO HOME</Button></Link>
        </div>
        <p className={styles.netflix_footer}>
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
      </div>

    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page404
