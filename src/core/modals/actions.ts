export enum ModalActionType {
  MODAL_ADD_MOVIE = 'MODAL_OPEN / ADD_MOVIE',
  MODAL_EDIT_MOVIE = 'MODAL_OPEN / EDIT_MOVIE',
  MODAL_DELETE_MOVIE = 'MODAL_OPEN / DELETE_MOVIE',
  MODAL_CLOSE = 'MODAL_CLOSE',
}

interface OpenAddModal {
  type: ModalActionType.MODAL_ADD_MOVIE
}
interface OpenEditModal {
  type: ModalActionType.MODAL_EDIT_MOVIE
  payload: number
}
interface OpenDeleteModal {
  type: ModalActionType.MODAL_DELETE_MOVIE
  payload: number
}
interface CloseModal {
  type: ModalActionType.MODAL_CLOSE
}

export type ModalAction =
  OpenAddModal
  | OpenEditModal
  | OpenDeleteModal
  | CloseModal

export const handleOpenAddModal = ():ModalAction => ({ type: ModalActionType.MODAL_ADD_MOVIE })
export const handleOpenEditModal = (id: number):ModalAction => ({ type: ModalActionType.MODAL_EDIT_MOVIE, payload: id })
export const handleOpenDeleteModal = (id: number):ModalAction => ({ type: ModalActionType.MODAL_DELETE_MOVIE, payload: id })
export const handleCloseModal = ():ModalAction => ({ type: ModalActionType.MODAL_CLOSE })

// eslint-disable-next-line import/no-default-export
export default {
  handleOpenAddModal,
  handleOpenEditModal,
  handleOpenDeleteModal,
  handleCloseModal,
}
