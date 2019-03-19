import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './pages'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='app-container'>
          <Main />
        </div>
      </Router>
    )
  }
}

export default App
