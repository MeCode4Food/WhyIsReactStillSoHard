import React, { Component } from 'react'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

// import './project.scss'

const ProjectNotFoundComponent = () => {
  return (
    <div className='project-not-found-container'>
      Project not found in projects list. Please check the projects list and try again.
    </div>
  )
}

export class ProjectContent extends Component {
  constructor(props){
    super(props)
    // get list from props
    const { match, projectList } = this.props

    // get project from list
    const project = _.find(projectList, { id: match.params.id })

    // put project in state
    this.state = { project, markdown : ''}
  }

  async componentWillMount() {
    try {
      const docPath = require(`../../../static/projects/markdown/${this.state.project.id + '.md'}`)
      const mdDoc = await fetch(docPath)
      const markdown = await mdDoc.text()

      this.setState({ markdown })
    } catch (error) {
      this.state.project = null
    }
  }

  render () {
    return (
      <div className='project-content-container'>
        {this.state.project ? <Markdown source={this.state.markdown} /> : <ProjectNotFoundComponent />}
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
