import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import './projecthome.scss'

const ProjectRoutes = ({ projectList, match }) => {
  const { path } = match
  return (
    <div className='d-flex justify-content-center flex-wrap project-routes'>
      {
        _.map(projectList, (project, i) => {
          return (
            project.show
              ? <Link
                className='project-link'
                to={`${path}p/${project.id}`}
              >
                <img
                  className={`nav-project-thumbnail ${classNames({ placeholder: !project.show })}`}
                  src={require(`../../../static/projects/assets/${project.thumbnail}`)}
                  alt={project.title}
                  key={i}
                />
              </Link>

              : <img
                className={`nav-project-thumbnail ${classNames({ placeholder: !project.show })}`}
                src={require(`../../../static/projects/assets/${project.thumbnail}`)}
                alt={project.title}
                key={i}
              />
          )
        })
      }
    </div>
  )
}

ProjectRoutes.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
    show: PropTypes.bool
  }))
}

export class ProjectHomeContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      something: false
    }
  }

  render () {
    const { projectList, match } = this.props
    return (
      <div className='d-flex flex-column justify-content-center projecthome-container container'>
        <div className='project-header text-center'>Projects you say?</div>
        <ProjectRoutes
          projectList={projectList}
          match={match}
        />
      </div>
    )
  }
}

ProjectHomeContent.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
    show: PropTypes.bool
  }))
}
export default withRouter(ProjectHomeContent)
