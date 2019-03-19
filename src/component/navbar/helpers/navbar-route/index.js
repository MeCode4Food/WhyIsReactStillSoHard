import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class NavbarRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      route: this.props.route
    }
  }
  render () {
    return (
      <div className='navbar-route-container nav-item'>
        <Link className='nav-link' to={this.state.route}>{this.state.name}</Link>
      </div>
    )
  }
}

NavbarRoute.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string
}

export default NavbarRoute
