import { ModalAppState } from '../interfaces'
import { MovieAction, MovieActionType } from '../movies/actions'

import { ModalAction, ModalActionType } from './actions'

const initialModalAppState: ModalAppState = {
  isAddModalActive: false,
  isDeleteModalActive: false,
  isEditModalActive: false,
  selectedMovieId: null,
}

export const modalsReducer = (
  state = initialModalAppState,
  action: ModalAction | MovieAction
): ModalAppState => {
  switch (action.type) {
    case ModalActionType.MODAL_ADD_MOVIE:
      return {
        ...state,
        isAddModalActive: true
      }
    case ModalActionType.MODAL_EDIT_MOVIE:
      return {
        ...state,
        isEditModalActive: true,
        selectedMovieId: action.payload
      }
    case ModalActionType.MODAL_DELETE_MOVIE:
      return {
        ...state,
        isDeleteModalActive: true,
        selectedMovieId: action.payload
      }
    case MovieActionType.EDIT_MOVIE_SUCCESS:
    case MovieActionType.ADD_MOVIE_SUCCESS:
    case MovieActionType.DELETE_MOVIE_SUCCESS:
    case ModalActionType.MODAL_CLOSE:
      return {
        ...state,
        isAddModalActive: false,
        isEditModalActive: false,
        isDeleteModalActive: false,
        selectedMovieId: null
      }

    default:
      return state
  }
}
