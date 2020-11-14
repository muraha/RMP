import React from 'react'
import {
  Link
} from 'react-router-dom'

import Button from '../utils/button/Button'
import Text, { TextTransform } from '../utils/text/Text'
import Modal from '../utils/modal/Modal'

import styles from './ModalStyles.css'

type OwnProps = {
  movieId: number
  onDeleteSubmit: (id) => void
}

const DeleteModal: React.FC<OwnProps> = ({
  movieId,
  onDeleteSubmit
}) =>
  (
    <Modal title={'delete movie'}>
      <p className={styles.DeleteQuestion}>
        <Text transform={TextTransform.capitalize}>are </Text>
        <Text transform={TextTransform.lowercase}>you sure you want to delete this movie?</Text>
      </p>
      <div className={styles.DeleteConfirmBtn} >
        <Link to='/'>
          <Button red onClick={() => onDeleteSubmit(movieId)}>CONFIRM</Button>
        </Link>
      </div>
    </Modal>
  )

// eslint-disable-next-line import/no-default-export
export default DeleteModal
