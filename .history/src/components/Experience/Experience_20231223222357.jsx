import React from 'react'

import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'

export const Experience = () => {
  return <section id="expercience">
    <h2>Expérience</h2>
    <div>
        <div> {
        skills.map((skill,id) => {
            return <div key={id}>
                <div> <img src={getImageUrl} alt="" /></div> </div>
        })
        </div>
        <ul></ul>
    </div>
  </section>
}
