import React from 'react'
import Project from './Project/Project'

const projectDemos = props => props.projects.map((project, index) => {
  return (
    <Project
    key={project.url}
    title={project.title}
    vid={project.vid}
    description={project.description}/>
  )
});

export default projectDemos