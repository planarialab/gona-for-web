// @flow
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from '../reducers'

const rootReducer = combineReducers({
  ...reducers
})

// IF you want to use devTool, ref here - https://github.com/zeit/next.js/issues/698
export default (initialState: any = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}
