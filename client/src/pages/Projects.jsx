import React from 'react'
import ProjectForm from '../components/Projects/ProjectForm'
import ProjectList from '../components/Projects/ProjectList'

const Projects = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <ProjectForm/>
      <ProjectList/>
    </div>
  )
}

export default Projects