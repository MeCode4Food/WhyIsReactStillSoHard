import React, { Component } from 'react'
import _ from 'lodash'
import NavbarRoute from './helpers/navbar-route'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './navbar.scss'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Title',
      routes: [
        {
          name: 'Home',
          route: '/home'
        },
        {
          name: 'Projects',
          route: '/projects'
        },
        {
          name: 'About',
          route: '/about'
        },
        {
          name: 'Contact',
          route: '/contact'
        }
      ]
    }
  }
  render () {
    const { location } = this.props
    return (
      <nav className='d-flex justify-content-between'>
        <div className='navbar-title'>{this.state.title}</div>
        <div className='d-flex navbar-routes'>
          {
            _.map(this.state.routes, (route) => {
              return <NavbarRoute
                name={_.get(route, 'name')}
                route={_.get(route, 'route')}
                location={location}
              />
            })
          }
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  location: PropTypes.object
}

export default withRouter(Navbar)
