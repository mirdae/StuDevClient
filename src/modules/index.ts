import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import { userReducer, userSaga, userDuplicateReducer } from './user'
import {
  postReducer,
  createPostReducer,
  postDetailReducer,
  postSaga,
} from './post'

import { alertReducer } from './alert'

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  createPostReducer,
  postDetailReducer,
  userDuplicateReducer,
  alertReducer,
})

export function* rootSaga() {
  yield all([userSaga(), postSaga()])
}

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
