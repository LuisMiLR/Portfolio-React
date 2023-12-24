import React from 'react';

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Expérience</h2>
      <div>
        <div>
            {skills.map((skill, id)=> {
              return (
                <div key={id}>
                  <div>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title} </p>
                </div>
              );
            })}
        </div>
        <ul>
          {
            history.map((historyItem, id) => {
              return <li key={id}>
                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} 
                />
                <div>
                  <h3>{`${historyItem.role}, ${histroyItemp.organisation}`} </h3>
                  <p>{`${historyItem.startDate} - ${histroyItemp.endDate}`} </p>
                  <ul>{ </ul>
                </div>
              </li>
            })
          }
        </ul>
    </div>
  </section>
  );
};
