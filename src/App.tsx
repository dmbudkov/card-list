import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import './App.css'

import { Connected } from 'components/Connected';
import { reducer } from 'store/reducers';
//import store from './store';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk, logger))

  return (
    <Provider store={store}>
        <Connected />
    </Provider>
  );
}

export default App
