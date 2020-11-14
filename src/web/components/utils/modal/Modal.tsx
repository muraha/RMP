import * as React from 'react'
import { connect } from 'react-redux'

import Text, { TextSize, TextWeight } from '../text/Text'
import { handleCloseModal } from '../../../../core/modals/actions'

import * as styles from './Modal.css'

type DispatchProps = ReturnType<typeof mapDispatchToProps>

type OwnProps = {
  title: string
}

export const ModalComponent: React.FC<OwnProps & DispatchProps> = ({
  children,
  title,
  onModalClose
}) => {
  return (
    <div className={styles.modal} onClick={(e) => {
      e.currentTarget === e.target && onModalClose()
    }}
    >
      <div className={styles['modal-content']}>
        <span
          className={styles['modal-content--close']}
          onClick={onModalClose}
        >
          <Text
            size={TextSize.xl}
            weight={TextWeight.light}
          >
            &times;
          </Text>
        </span>
        <p className={styles['modal-content--title']}>
          <Text
            size={TextSize.xl}
            weight={TextWeight.light}
          >
            {title}
          </Text>
        </p>
        <div className={styles['modal-content--specific']}>
          {children}
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onModalClose: () => dispatch(handleCloseModal())
})

// eslint-disable-next-line import/no-default-export
export default connect(undefined, mapDispatchToProps)(ModalComponent)
