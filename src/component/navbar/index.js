import React, { Component } from 'react'
import _ from 'lodash'
import NavbarRoute from './helpers/navbar-route'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './navbar.scss'

const ROUTE_MAP = [
  {
    name: 'Home',
    path: '/home'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Cat',
      routes: ROUTE_MAP
    }
  }
  render () {
    const { location } = this.props
    return (
      <nav className='d-flex row align-items-end justify-content-between navbar-container'>
        <div className='navbar-title'>{this.state.title}</div>
        <div className='d-flex navbar-routes'>
          {
            _.map(this.state.routes, (route, i) => {
              return <NavbarRoute
                key={i}
                name={_.get(route, 'name')}
                route={_.get(route, 'path')}
                active={isActiveRoute(location, route)}
              />
            })
          }
        </div>
      </nav>
    )
  }
}

function getSelectedTab (urlPath) {
  return _.find(ROUTE_MAP, (route) => {
    return _.includes(urlPath, route.path)
  }) || {}
}

function isActiveRoute (location, route) {
  const urlPath = location.pathname
  const currentPath = _.get(getSelectedTab(urlPath), 'path')
  return currentPath === route.path
}

Navbar.propTypes = {
  location: PropTypes.object
}

export default withRouter(Navbar)
