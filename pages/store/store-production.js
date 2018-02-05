// @flow
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from '../reducers'

const rootReducer = combineReducers({
  ...reducers
})

export default (initialState: any = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}
