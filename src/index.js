import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './pages'
import * as serviceWorker from './serviceWorker'

import './reset.scss'

ReactDOM.render(
  <Router>
    <div className='app-container'>
      <Main />
    </div>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
if (module.hot) module.hot.accept()
