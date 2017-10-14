import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
// import configureStore.js somehow

import App from './App'
import 

ReactDOM.render(
  <App />,
  document.getElementsByClassName('root')[0]
)

if (module.hot) {
  module.hot.accept()
}
