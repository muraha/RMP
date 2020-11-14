import { Store, CombinedState, Action, Dispatch } from 'redux'

import { IAppState } from '../interfaces'

export const logger = (store: Store<CombinedState<IAppState>>) =>
  (next: Dispatch<Action>) =>
    (action: Action): Action => {
      console.log('dispatching', action)
      const result = next(action)
      console.log('next state', store.getState())
      return result
    }

export const crashReporter = (store: Store<CombinedState<IAppState>>) =>
  (next: Dispatch<Action>) =>
    (action: Action): Action => {
      try {
        return next(action)
      } catch (err) {
        console.error('Caught an exception!', err)
        console.log({
          action,
          state: store.getState()
        })
        throw err
      }
    }
