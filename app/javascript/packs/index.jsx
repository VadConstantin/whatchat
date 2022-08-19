import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
