import React from 'react';
import '../App.css'

export default function Projects(props){
  return(
    <div className= {'projects blue-border ' + props.items.grid}>
        <div className='proj-header'>
          <p>Projects - Web Development</p>        
        </div>

        <div>
          <p className='big-txt'>{props.items.title}</p>
          <p className='small-txt'>{props.items.tech}</p>
          <p className='small-txt'>{props.items.description}
          </p>
          <a href={props.items.link} >
          <img src={require('../../src/' + props.items.img)} id='smaller-pics' alt='project thumbnail'/>
          </a>
        </div>
    </div>

  )
}