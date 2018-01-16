// @flow
import { ADD, TICK } from '../constants/actionTypes'

type State = {
  lastUpdate: number,
  light: boolean,
  count: number
}

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

// REDUCERS
export default (state: State = exampleInitialState, action: any) => {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light
      }
    case ADD:
      return {
        ...state,
        count: state.count + 1
      }

    default:
      return state
  }
}
