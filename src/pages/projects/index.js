import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import ProjectContent from './project'
import ProjectHomeContent from './home'
import _ from 'lodash'

export class ProjectMainContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      something: false
    }
  }

  render () {
    const projectList = require('../../static/projects/project_list')
    this.fillUpProjectList(projectList)

    return (
      <div className='project-container'>
        <Switch>
          <Route exact path='/projects/' render={() => (
            <ProjectHomeContent projectList={projectList} />
          )} />
          <Route path='/projects/p/:id' render={() => (
            <ProjectContent projectList={projectList} />
          )}
          />
        </Switch>
      </div>
    )
  }

  fillUpProjectList (projectList) {
    const maxPerPage = 12 // max projects to show on projects home

    while (_.size(projectList) < maxPerPage) {
      projectList.push({
        id: `placeholder_${_.size(projectList) + 1}`,
        title: '',
        description: '',
        thumbnail: 'placeholder.png',
        pictures: [],
        show: false
      })
    }

    return projectList
  }
}

export default withRouter(ProjectMainContent)
