import React, { Component } from 'react'
import Navbar from '../component/navbar'
import { Route, Redirect, Switch } from 'react-router-dom'
import HomeContent from './home'
import AboutContent from './about'
import ContactContent from './contact'
import ProjectHomeContent from './project'

import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import '../static/style/scss/_main.scss'

export class Main extends Component {
  render () {
    return (
      <div className='main-container container'>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route exact path='/home' component={HomeContent} />
            <Route exact path='/about' component={AboutContent} />
            <Route exact path='/contact' component={ContactContent} />
            <Route exact path='/projects' component={ProjectHomeContent} />
            <Route exact path='/styleguide' component={ProjectHomeContent} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Main
