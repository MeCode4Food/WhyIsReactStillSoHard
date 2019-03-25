import React, { Component } from 'react'
import _ from 'lodash'

import './projecthome.scss'

export class ProjectHomeContent extends Component {
  render () {
    const projectList = require('../../static/projects/project_list')
    return (
      <div className='d-flex flex-column justify-content-center projecthome-container'>
        <div className='project-header'>Projects you say?</div>
        {
          _.map(projectList, (project) => {
            return (
              <img className='nav-project-thumbnail' src={require(`../../static/projects/assets/${project.thumbnail}`)} alt={project.title} />
            )
          })
        }
      </div>
    )
  }
}

export default ProjectHomeContent
