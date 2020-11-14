import * as React from 'react'
import classnames from 'classnames'

import * as styles from './Button.css'

export interface ButtonProps {
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  classes?: string
  red?: boolean;
  gray?: boolean;
  black?: boolean;
  outlined?: boolean;
  transparent?: boolean;
  filtered?: boolean;
  bold?: boolean;
  thin?: boolean;
  filter?: boolean;
  type?:'button'|'submit'|'reset'
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  classes,
  red,
  gray,
  black,
  outlined,
  transparent,
  filtered,
  bold,
  thin,
  filter,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      className={classnames(
        styles.Btn,
        {
          [styles['Btn--isRed']]: red,
          [styles['Btn--isGray']]: gray,
          [styles['Btn--isBlack']]: black,
          [styles['Btn--isOutlined']]: outlined,
          [styles['Btn--isTransparent']]: transparent,
          [styles['Btn--isFiltered']]: filtered,
          [styles['Btn--isBold']]: bold,
          [styles['Btn--isThin']]: thin,
          [styles['Btn--isNavigation']]: filter
        },
        classes
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  classes: null
}

// eslint-disable-next-line import/no-default-export
export default Button
