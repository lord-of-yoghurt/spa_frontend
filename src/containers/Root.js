/*eslint no-unused-vars: 1*/

import React from 'react'
import ReactDOM from 'react-dom'

import App from '../App'

const Root = () => (
  <App />
)

ReactDOM.render(
  <Root />,
  document.querySelector('.root')
)

export default Root
