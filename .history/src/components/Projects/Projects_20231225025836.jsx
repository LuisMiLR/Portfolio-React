import React from 'react'

import projects from "../../data/projects.json"

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>{
        projects.map((project, id)=> {
          return ( 
            <div key={id}>
              <img src={project.imageSrc} alt={`image of ${project.title}`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul> 
                {project.skills.map((skill, id)=> {
                  <li key={id}> {skill} </li>;
              })}
            </ul>
            <div>
              <a href= {project.demo}>Demo</a>
              a
            </div>
          </div>
          )
        })
        }
      </div>
    </section>

  )
}

export default Projects
