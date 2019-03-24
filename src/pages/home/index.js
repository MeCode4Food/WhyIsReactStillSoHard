import React, { Component } from 'react'
import './home.scss'

export class HomeContent extends Component {
  render () {
    return (
      <div className='d-flex home-container'>
        <img className='cat' src={require('../../static/images/cat.jpg')} alt='cat' />
        <div className='d-flex flex-column justify-content-between content-container'>
          <div className='content-main'>
            <div className='main-text'>Fullstek DevOps Cat</div>
            <div className='side-text'>
              <div className='side-text-1'>I be cat all day</div>
              <div className='side-text-2'>I care not what ppl say</div>
            </div>
          </div>
          <div className='content-footer'>
            <div className='footer-text'>Meowwwwwwwww</div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContent
