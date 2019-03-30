import React, { Component } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomeContent from './home'
import AboutContent from './about'
import ContactContent from './contact'
import ProjectHomeContent from './projecthome'

import Navbar from '../component/navbar'
import Footer from '../component/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import '../static/style/scss/_main.scss'

export class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      something: false
    }
  }

  render () {
    const { location } = this.props
    return (
      <div className='d-flex flex-column main-container container'>
        <header>
          <Navbar />
        </header>
        <main className='container-fluid'>
          <TransitionGroup className='row transition-group'>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 2000, exit: 1000 }}
              classNames={'page'}
            >
              <section className='switch-wrapper container'>
                <Switch location={location}>
                  <Route exact path='/' render={() => <Redirect to='/home' />} />
                  <Route exact path='/home' component={HomeContent} />
                  <Route exact path='/about' component={AboutContent} />
                  <Route exact path='/contact' component={ContactContent} />
                  <Route exact path='/projects' component={ProjectHomeContent} />
                  <Route exact path='/styleguide' component={ProjectHomeContent} />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </main>
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default withRouter(Main)
