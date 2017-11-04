import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import App from './App'

import { addPost } from './actions/PostActions'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementsByClassName('root')[0]
)

if (module.hot) {
  module.hot.accept()
}
