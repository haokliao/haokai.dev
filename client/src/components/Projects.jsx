import React from 'react';
import '../App.css'

export default function Projects(projects){
  return(
    <div className= {'projects blue-border ' + projects.items.grid}>
        <div className='proj-header'>
          <p>Projects - Web Development</p>        
        </div>

        <div>
          <p className='big-txt'>{projects.items.title}</p>
          <p className='small-txt'>{projects.items.tech}</p>
          <p className='small-txt'>{projects.items.description}
          </p>
          <a href={projects.items.link} >
          <img src={require('../../src/' + projects.items.img)} id='smaller-pics' alt='project thumbnail'/>
          </a>
        </div>
    </div>

  )
}