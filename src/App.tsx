import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import './App.css'

import { Connected } from 'components/Connected'
import { reducer } from 'store/reducers'
import { watchLoadData } from 'store/sagas'

function App() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
  sagaMiddleware.run(watchLoadData)

  return (
    <Provider store={store}>
        <Connected />
    </Provider>
  );
}

export default App
