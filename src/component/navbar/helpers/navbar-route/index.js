import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

class NavbarRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      route: this.props.route,
      active: this.props.object
    }
  }
  render () {
    const { active } = this.props
    return (
      <div className={`navbar-route-container nav-item ${classNames({ active: active })}`}>
        <Link
          className='nav-link'
          to={this.state.route}>{this.state.name}
        </Link>
      </div>
    )
  }
}

NavbarRoute.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
  active: PropTypes.bool
}

export default NavbarRoute
