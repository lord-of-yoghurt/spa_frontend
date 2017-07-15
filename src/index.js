import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <App />,
  document.getElementsByClassName('root')[0]
)

if (module.hot) {
  module.hot.accept()
}
