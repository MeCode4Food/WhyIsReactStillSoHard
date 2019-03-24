import React, { Component } from 'react'
import './footer.scss'

class Footer extends Component {
  render () {
    return (
      <div className='d-flex justify-content-center footer-container'>
        <div className='footer-text'>©2019 COPYRIGHT LOLOLOL     |      Chee Khuin</div>
        <div className='d-flex align-items-center footer-images'>
          <img className='footer-linkedin' src={require('../../static/images/footer-linkedin.svg')} alt='LinkedIn' />
          <img className='footer-github' src={require('../../static/images/footer-github.svg')} alt='GitHub' />
          <img className='footer-gmail' src={require('../../static/images/footer-gmail.svg')} alt='Gmail' />
          <img className='footer-discord' src={require('../../static/images/footer-discord.svg')} alt='Discord' />
        </div>
      </div>
    )
  }
}

export default Footer
