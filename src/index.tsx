import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'
//import * as store from './store'

import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer, { rootSaga } from './modules'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
