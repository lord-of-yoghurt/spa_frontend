/*eslint no-unused-vars: 1*/

import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './containers/Root'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
