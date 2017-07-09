/*eslint no-unused-vars: 1*/

import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './containers/Root'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
