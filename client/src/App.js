import React  from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import HKL_resume from './imgs/HKL_resume.pdf'
import {PROJECTS} from './data.js'
import RecentlyPlayed from './components/RecentlyPlayed';
import Projects from './components/Projects';


function App() {

  const projectElements = PROJECTS.map(proj => {
    return <Projects 
        key = {proj.id}
        items = {proj}
        />
      })
    
  
  return(
<>
  <div className="grid-container">

    <Helmet>
      <title>Hao Kai Liao</title>
      <meta name="description" content="Hao Kai Liao's Personal Site" />
      <meta name="theme-color" content="#fffff" />
      {/* <meta name="image" property='og:image' content={require('./imgs/hkl_headshot.png')}/> */}
    </Helmet>

    <div className='header'>
      <h1 >Hao Kai Liao</h1>
    </div>
    
    <div className="left blue-border">
      <img src= {require('./imgs/hkl_headshot.png')} className='headshot' alt='Hao Kai Liao headshot'/>

      <table>
        <tbody>
          <tr>
            <td >You can call me..</td>
            <td className="words">Kevin / Kai</td>
          </tr>
          <tr/>
          <tr>
            <td>I’m located in..</td>
            <td className="words">Queens, NY</td>
          </tr>
        </tbody>
      </table>

      <div className='icons'>
        <a href={HKL_resume} target='_blank' rel='noopener noreferrer'
          className='text-decoration-none' title='Resume!'>
          <img src= {require('./imgs/resume_icon.png')} style={{cursor:'pointer'}} className='project-imgs' alt='Resume PDF Icon'/>
        </a>
        <a href='https://www.linkedin.com/in/haokliao/' target='_blank' rel='noopener noreferrer'
          className ='text-decoration-none text-linkedin' title='Linkedin'>
          <img src= {require('./imgs/li_icon.png')} className='project-imgs' alt='find me on Linkedin, @haokliao'/>
        </a>
        <a href='https://www.github.com/haokliao'  target='_blank' rel='noopener noreferrer'
          className='text-decoration-nonetext-github text-decoration-none' title='Github' >
          <img src= {require('./imgs/github_icon.png')} className='project-imgs' alt='find me on github, @haokliao'/>
        </a>
      </div>
    </div>

    <div className="about blue-border">
      <p className= 'abt-text'>About Me</p>
      <div className='blurb'>
        <p>Hi ! I’m a student based in New York, with an interest in front end/web development.</p>
        <p>I’m currently studying Computer Information Systems @ Baruch College, and have an Associates from The Culinary Institute of America in Baking and Pastry Arts.</p>
        <p>In my free time, I love baking bread and sharing food experiences, creating playlists for friends, and bouldering!</p>
      </div>
    </div>


    <RecentlyPlayed/>
    {projectElements}


  </div> 
</>
  )
}



export default App;
