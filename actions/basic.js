// @flow
import { ADD, TICK } from '../constants/actionTypes'

export const add = () => (dispatch: Dispatch) => {
  return dispatch({ type: ADD })
}

export const startClock = () => (dispatch: Dispatch) => {
  return setInterval(
    () => dispatch({ type: TICK, light: true, ts: Date.now() }),
    800
  )
}
