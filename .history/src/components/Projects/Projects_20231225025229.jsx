import React from 'react'

import projects from "../../data/projects.json"

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>{
        projects.map((project, id)=> {
          return <div key={id}>
            <img src={project.imageSrc} alt={`image of ${project.title}`} />
            <h3>{project.title}</h3>
            <p></p>
          </div>
        })
        }
      </div>
    </section>

  )
}

export default Projects
