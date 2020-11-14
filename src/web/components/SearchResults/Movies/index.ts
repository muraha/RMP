import React, { Dispatch } from 'react'
import { connect } from 'react-redux'

import { IAppState } from '../../../../core/interfaces'
import { openDescription, MovieAction } from '../../../../core/movies/actions'
import { handleOpenEditModal, handleOpenDeleteModal, ModalAction } from '../../../../core/modals/actions'
import { Filter, Sort } from '../../../../core/constants'

import { MoviesContainer } from './Movies'

export type StateProps = {
  isMovieDataLoadingInProgress: boolean
  filter: Filter
  sortBy: Sort
}
export type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapStateToProps = ({ movies }: IAppState) => ({
  isMovieDataLoadingInProgress: movies.isMovieDataLoadingInProgress,
  filter: movies.filter,
  sortBy: movies.sortBy
})

const mapDispatchToProps = (dispatch: Dispatch<MovieAction | ModalAction>) => ({
  openMovieDescription: (id) => dispatch(openDescription(id)),
  onEditModalClick: (id) => dispatch(handleOpenEditModal(id)),
  onDeleteModalClick: (id) => dispatch(handleOpenDeleteModal(id))
})

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MoviesContainer))
