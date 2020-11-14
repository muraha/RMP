import React from 'react'

import Text, { TextSize, TextWeight, TextTransform } from '../utils/text/Text'

import styles from './Footer.css'

const FooterComponent:React.FC = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.netflix2}>
        <Text red size={TextSize.m} transform={TextTransform.lowercase} weight={TextWeight.extraBold}>
            netflix
        </Text>
        <Text red size={TextSize.m} transform={TextTransform.lowercase}>roulette</Text>
      </div>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default FooterComponent
