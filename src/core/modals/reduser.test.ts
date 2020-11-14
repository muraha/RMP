import deepfreeze from 'deepfreeze'

import { MovieActionType } from '../movies/actions'

import { modalsReducer } from './reducer'
import { ModalActionType } from './actions'

describe('team reducer', () => {
  const initialState = deepfreeze({
    isAddModalActive: false,
    isDeleteModalActive: false,
    isEditModalActive: false,
    selectedMovieId: null
  })
  const movieId = '123'
  it('should return the initial state', () => {
    expect(modalsReducer(initialState, {} as any)).toEqual({ ...initialState })
  })
  it('should handle MODAL_ADD_MOVIE', () => {
    const action = {
      type: ModalActionType.MODAL_ADD_MOVIE
    } as any

    expect(modalsReducer(initialState, action))
      .toEqual({
        ...initialState,
        isAddModalActive: true,
      })
  })
  it('should handle MODAL_DELETE_MOVIE', () => {
    const action = {
      type: ModalActionType.MODAL_DELETE_MOVIE,
      payload: movieId
    } as any

    expect(modalsReducer(initialState, action))
      .toEqual({
        ...initialState,
        isDeleteModalActive: true,
        selectedMovieId: movieId
      })
  })
  it('should handle MODAL_EDIT_MOVIE', () => {
    const action = {
      type: ModalActionType.MODAL_EDIT_MOVIE,
      payload: movieId
    } as any

    expect(modalsReducer(initialState, action))
      .toEqual({
        ...initialState,
        isEditModalActive: true,
        selectedMovieId: movieId
      })
  })

  describe('Revert to the initial state by ', () => {
    const initialState = deepfreeze({
      isAddModalActive: false,
      isDeleteModalActive: true,
      isEditModalActive: false,
      selectedMovieId: movieId
    });

    [
      {
        name: 'EDIT_MOVIE_SUCCESS',
        actionType: MovieActionType.EDIT_MOVIE_SUCCESS,
      },
      {
        name: 'ADD_MOVIE_SUCCESS',
        actionType: MovieActionType.ADD_MOVIE_SUCCESS,
      },
      {
        name: 'DELETE_MOVIE_SUCCESS',
        actionType: MovieActionType.DELETE_MOVIE_SUCCESS,
      },
      {
        name: 'MODAL_CLOSE',
        actionType: ModalActionType.MODAL_CLOSE,
      },
    ].forEach(test => {
      it(`handling ${test.name}`, () => {
        const action = {
          type: test.actionType
        } as any

        expect(modalsReducer(initialState, action))
          .toEqual({
            ...initialState,
            isDeleteModalActive: false,
            selectedMovieId: null
          })
      })
    })
  })
})
