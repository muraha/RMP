import * as React from 'react'
import classnames from 'classnames'

import * as styles from './Text.css'

export enum TextSize {
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export enum TextWeight {
  extraLight = '200',
  light = '300',
  regular = '400',
  bold = '600',
  extraBold = '800'
}

export enum TextTransform {
  uppercase = 'uppercase',
  capitalize = 'capitalize',
  lowercase = 'lowercase',
  none = 'none'
}
export interface TextProps {
  classes: string
  red: boolean
  gray: boolean
  black: boolean
  size: TextSize
  weight: TextWeight
  transform: TextTransform
}

const Text: React.FC<Partial<TextProps>> = ({
  children,
  classes,
  red,
  gray,
  black,
  size,
  weight,
  transform
}) => {
  return (
    <span
      className={classnames(
        styles.Txt,
        [styles[`Txt--size-${size}`]],
        [styles[`Txt--weight-${weight}`]],
        [styles[`Txt--transform-${transform}`]],
        {
          [styles['Txt--isRed']]: red,
          [styles['Txt--isGray']]: gray,
          [styles['Txt--isBlack']]: black
        },
        classes
      )}
    >
      {children}
    </span>
  )
}

Text.defaultProps = {
  classes: null,
  size: TextSize.s,
  transform: TextTransform.uppercase,
  weight: TextWeight.regular
}

// eslint-disable-next-line import/no-default-export
export default Text
