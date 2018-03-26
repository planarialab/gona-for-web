// @flow
import { TODO_ADD, TODO_DONE, TODO_DONE_CANCLE } from '../constants/actionTypes'

type State = {
  id: number,
  title: string,
  done: boolean
}

const todoInitialState = {
  id: 0,
  title: 'todo',
  done: false
}

// REDUCERS
export default (state: State = todoInitialState, action: any) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        title: action.title,
        done: false
      }
    case TODO_DONE:
      return {
        ...state,
        done: true
      }
    case TODO_DONE_CANCLE:
      return {
        ...state,
        done: false
      }

    default:
      return state
  }
}
