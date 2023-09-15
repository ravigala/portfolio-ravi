import React from 'react'
import { technologies } from "../../constants"

const Skills = () => {
  return (
    <div className='container mx-auto py-10 my-10' style={{ maxWidth: '90vw', paddingBottom: "50px" }}>
      <h1 style={{ fontSize: "2.6em", color: "white" }}>Skills</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center py-10' style={{ gap: "2.5rem" }}>
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
