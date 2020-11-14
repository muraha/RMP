import React from 'react'
import classnames from 'classnames'
import { useFormik } from 'formik'

import Button from '../utils/button/Button'
import Text, { TextWeight, TextSize } from '../utils/text/Text'
import Modal from '../utils/modal/Modal'
import { validationSchema, getOnSubmitFormikAction } from '../../../core/utils/helper'
import { Movie } from '../../../core/interfaces'
import { Genres } from '../../../core/constants'

import * as styles from './ModalStyles.css'
import { getFormkValidationErrorHendler } from './AddModal'

type OwnProps = {
  data: Movie
  onEditSubmit: (movieData) => void
}

const EditModal: React.FC<OwnProps> = (
  {
    data: { id, title, genres, overview, poster_path, release_date, runtime, vote_average },
    onEditSubmit
  }
) => {
  const initialValues: Movie = {
    id,
    title,
    release_date,
    poster_path,
    genres,
    overview,
    runtime,
    vote_average
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: getOnSubmitFormikAction(onEditSubmit)
  })

  const handleValidationError = getFormkValidationErrorHendler(formik)

  return (
    <Modal title={'edit movie'} modalCloseEvent={() => null}>
      <form onSubmit={formik.handleSubmit}>
        <Text weight={TextWeight.bold} red classes={classnames(styles.ModalSubtitle)}> movie id </Text>
        <Text size={TextSize.m}> {id} </Text>

        <Text weight={TextWeight.bold} red classes={classnames(styles.ModalSubtitle)}> title </Text>
        <input
          type='text'
          {...formik.getFieldProps('title')}
          className={styles.ModalInput}
          placeholder={'Select Title'}
        />
        {handleValidationError('title')}

        <Text weight={TextWeight.bold} red classes={classnames(styles.ModalSubtitle)}> release date </Text>
        <input
          type='date'
          {...formik.getFieldProps('release_date')}
          className={styles.ModalInput}
        />
        {handleValidationError('release_date')}

        <Text
          weight={TextWeight.bold} red classes={classnames(styles.ModalSubtitle)}
        > movie url </Text>
        <input
          type='text'
          {...formik.getFieldProps('poster_path')}
          className={styles.ModalInput}
          placeholder={'Movie URL here'}
        />
        {handleValidationError('poster_path')}

        <Text
          weight={TextWeight.bold} red classes={classnames(styles.ModalSubtitle)}
        > genre </Text>
        <div className={styles['ModalInput--selectWrapper']}>
          <select
            multiple
            {...formik.getFieldProps('genres')}
            className={styles['ModalInput--select']}
          >
            <option disabled value='Select'>Select Genre</option>
            {Genres.map(g => (<option key={g} value={g}>{g}</option>))}
          </select>
        </div>
        {handleValidationError('genres')}

        <Text
          weight={TextWeight.bold} red classes={classnames(styles.ModalSubtitle)}
        > overview </Text>
        <input
          type='text'
          {...formik.getFieldProps('overview')}
          className={styles.ModalInput}
          placeholder={'Overview here'}
        />
        {handleValidationError('overview')}
        <Text
          weight={TextWeight.bold} red classes={classnames(styles.ModalSubtitle)}
        > runtime </Text>
        <input
          type='number'
          {...formik.getFieldProps('runtime')}
          className={styles.ModalInput}
          placeholder={'Runtime here (min)'}
        />
        {handleValidationError('runtime')}
        <Text
          weight={TextWeight.bold} red classes={classnames(styles.ModalSubtitle)}
        > rating </Text>
        <input
          type='number'
          {...formik.getFieldProps('vote_average')}
          className={styles.ModalInput}
          placeholder={'Rating here'}
        />
        {handleValidationError('vote_average')}

        <div className={styles.ModalActoinBtns} >
          <Button red type='submit'>SAVE</Button>
          <Button black type='reset' onClick={formik.handleReset}>RESET</Button>
        </div>
      </form>
    </Modal>
  )
}

// eslint-disable-next-line import/no-default-export
export default EditModal
