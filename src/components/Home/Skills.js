import React from 'react'
import { technologies } from "../../constants"

const Skills = () => {
  return (
    <div className='skill-section container mx-auto py-10 my-10'>
      <h1 className='section-heading'>Skills</h1>
      <div className='skills'>
        {technologies.map((technology) => (
          <div key={technology.name}>
            <a href={technology.link} target="_blank" rel="noopener noreferrer">
              <img src={technology.icon} alt={technology.name} width="120px" height="120px" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills
