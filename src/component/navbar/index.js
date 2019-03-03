import React, { Component } from 'react'
import _ from 'lodash'
import NavbarRoute from './helpers/navbar-route'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'CK',
      routes: [
        {
          name: 'Home',
          route: '/home'
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
    return (
      <div className='navbar-container'>
        <div className='navbar-title'>{this.state.title}</div>
        {
          _.map(this.state.routes, (route) => {
            return <NavbarRoute
              name={_.get(route, 'name')}
              route={_.get(route, 'route')}
            />
          })
        }
      </div>
    )
  }
}

export default Navbar
