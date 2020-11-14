import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { useFormik } from 'formik'

import Button from '../utils/button/Button'
import Text, { TextSize, TextWeight, TextTransform } from '../utils/text/Text'
import { handleOpenAddModal } from '../../../core/modals/actions'
import { searchMovie, searchMovieSuccess } from '../../../core/movies/actions'
import { validationSchemaSingleInput, getFormatedMovieObjectById, getSearchParams } from '../../../core/utils/helper'

import { MoviesQueries } from '../../../core/interfaces'
import api from '../../../core/utils/api'

import styles from './Search.css'

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const SearchComponent: React.FC<DispatchProps> = ({
  onAddMovieBtnClick,
  dispatchSearch,
  dispatchSearchSuccess,
}) => {
  const handleSearch = async (query: MoviesQueries): Promise<void | Error> => {
    dispatchSearch()
    try {
      const params = getSearchParams(query)
      const { totalAmount, data } = await api.fetchMovies(params)
      dispatchSearchSuccess({
        totalAmount,
        moviesList: getFormatedMovieObjectById(data)
      })
      window.history.pushState('', '', `/movie${params}`)
    } catch (err) {
      return err
    }
  }

  const formik = useFormik({
    initialValues: { search: '' },
    validationSchema: validationSchemaSingleInput,
    onSubmit: (v) => handleSearch(v)
  })

  return (<>
    <div className={styles.SearchBackground} />
    <div className={styles.SearchGridContainer}>
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
      <Button
        onClick={onAddMovieBtnClick}
        classes={classnames(styles.addBtn)}
        gray
        filtered
      >
        + ADD MOVIE
      </Button>

      <Text
        classes={classnames(styles.title)}
        size={TextSize.xl}
        weight={TextWeight.light}
      >
        find your movie
      </Text>
      <form onSubmit={formik.handleSubmit} className={styles.searchForm}>
        <input
          type='text'
          {...formik.getFieldProps('search')}
          className={styles.searchInput}
          placeholder={'What do you want to watch?'}
        />
        <Button classes={classnames(styles.searchBtn)} red type='submit'> SEARCH </Button>
      </form>
    </div>
  </>)
}

const mapDispatchToProps = dispatch => ({
  onAddMovieBtnClick: () => dispatch(handleOpenAddModal()),
  dispatchSearch: () => dispatch(searchMovie()),
  dispatchSearchSuccess: (payload) => dispatch(searchMovieSuccess(payload)),
})

// eslint-disable-next-line import/no-default-export
export default connect(null, mapDispatchToProps)(SearchComponent)
