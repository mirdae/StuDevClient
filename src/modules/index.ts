import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import { userReducer } from './user/reducer'
import { userSaga } from './user/saga'

const rootReducer = combineReducers({ userReducer })

export function* rootSaga() {
  yield all([userSaga()])
}

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
