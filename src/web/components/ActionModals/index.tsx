import React from 'react'
import { connect } from 'react-redux'

import { ModalAppState, MovieAppState, Movie } from '../../../core/interfaces'
import { editMovieSuccess, deleteMovieSuccess, addMovieSuccess } from '../../../core/movies/actions'

import AddModal from './AddModal'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

type StateProps = {
  isAddModalActive: boolean
  isEditModalActive: boolean
  isDeleteModalActive: boolean
  selectedMovieId: number
  moviesList: Movie[]
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const ModalsSwitcher: React.FC<StateProps & DispatchProps> = ({
  isAddModalActive,
  isEditModalActive,
  isDeleteModalActive,
  selectedMovieId,
  moviesList,
  editSubmit,
  deleteSubmit,
  addSubmit
}) => (<>
  {isAddModalActive &&
    <AddModal onAddSubmit={addSubmit} />}
  {isEditModalActive &&
    <EditModal
      data={moviesList[selectedMovieId]}
      onEditSubmit={editSubmit}
    />}
  {isDeleteModalActive &&
    <DeleteModal
      movieId={selectedMovieId}
      onDeleteSubmit={deleteSubmit}
    />}
</>)

const mapStateToProps = ({ movies, modals }): Partial<ModalAppState & MovieAppState> => ({
  isAddModalActive: modals.isAddModalActive,
  isEditModalActive: modals.isEditModalActive,
  isDeleteModalActive: modals.isDeleteModalActive,
  selectedMovieId: modals.selectedMovieId,
  moviesList: movies.moviesList
})

const mapDispatchToProps = dispatch => ({
  editSubmit: (movieData) => dispatch(editMovieSuccess(movieData)),
  addSubmit: (movieData) => dispatch(addMovieSuccess(movieData)),
  deleteSubmit: (id) => dispatch(deleteMovieSuccess(id))
})

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(ModalsSwitcher)
