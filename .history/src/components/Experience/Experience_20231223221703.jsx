import React from 'react'

import skills from "../../data/skills.json"

export const Experience = () => {
  return <section id="expercience">
    <h2>Expérience</h2>
    <div>
        <div> {
        skills.map((skill,id) => {
            return <div > </div>
        })
        
        </div>
        <ul></ul>
    </div>
  </section>
}
