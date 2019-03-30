import React, { Component } from 'react'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProjectPage = ({ project }) => {
  return (
    <div className='project-container'>
      <div className='project-name'>{project.title}</div>
      <div className='project-description'>{project.description}</div>
      <div className='project-pictures'>{project.pictures}</div>
    </div>
  )
}

const ProjectNotFoundPage = () => {
  return (
    <div className='project-not-found-container'>
      Project not found in projects list. Please check the projects list and try again.
    </div>
  )
}

export class ProjectContent extends Component {
  render () {
    const { match, projectList } = this.props
    const project = _.find(projectList, { id: match.params.id })
    return (
      <div className='project-content-container'>
        {project ? <ProjectPage project={project} /> : <ProjectNotFoundPage />}
      </div>
    )
  }
}

ProjectContent.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string
    })
  }),
  projectList: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
    show: PropTypes.bool
  }))
}

export default withRouter(ProjectContent)
