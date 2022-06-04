import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import HKL_resume from './imgs/HKL_Resume_3_14.pdf'
import {PROJECTS} from './data.js'

function RecentlyPlayed(props) {
  return (
    <>
        <div className='listening'>
      <div className='big-txt'>
        <a href='https://open.spotify.com/user/1242975125'>I’m</a> currently listening to..</div>       
      <div className='listening-container'>
        <div className='listening-album'>
          <img src = {props.albumart} alt ='album_cover'/>
        </div>
        <div className='listening-text'>
          <a href={props.trackurl} target='_blank' rel='noreferrer'>
            {props.tracksname}
          </a>
          <span> by</span> {props.artistsname}
        </div>
      </div> 
    </div>
    </>
  )

}

function Projects(props){
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
          <img src={require('../src/' + props.items.img)} id='smaller-pics' alt='project thumbnail'/>
          </a>
        </div>
    </div>

  )
}


function App() {

  const projectElements = PROJECTS.map(proj => {
    return <Projects 
        key = {proj.id}
        items = {proj}
        />
      })
    


  const [tracks,getTracks] = useState([
  {
    track: {
      album: {        
        images: [
          {
            empty: ''
          },
          {
            empty1: ''
          },
          {
            empty2: '',
            url: 'https://i.scdn.co/image/ab67616d000048518dbdac761ce552c2ac7d69e1'
          }
        ],
        artists: 
          [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/0knGpCTbmG4ctl1wzYRZs4'
              },
              name: 'Dijon'
            },
          ],
      },
      name: 'Rodeo Clown',
      external_urls: {
        spotify: 'https://open.spotify.com/track/1km9AsmFeKZpeR4VvPYsJh'
      }
    }
  }
  ]);

  useEffect(() => {
    document.title = 'Hao Kai Liao'
    fetch('/recently_played')
    .then((resp) => {
      resp.json()
      .then(tracks =>getTracks(tracks.payload.items))
      })
      .catch((err) => console.error(err))
  }, []);

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
        <a href={HKL_resume} target='_blank' rel='noreferrer'
          className='text-decoration-none' title='Resume!'>
          <img src= {require('./imgs/resume_icon.png')} style={{cursor:'pointer'}} className='project-imgs' alt='Resume PDF Icon'/>
        </a>
        <a href='https://www.linkedin.com/in/haokliao/' target='_blank' rel='noreferrer'
          className ='text-decoration-none text-linkedin' title='Linkedin'>
          <img src= {require('./imgs/li_icon.png')} className='project-imgs' alt='find me on Linkedin, @haokliao'/>
        </a>
        <a href='https://www.github.com/haokliao'  target='_blank' rel='noreferrer'
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

    <RecentlyPlayed
      artistsname={tracks[0].track.album.artists[0].name}
      tracksname={tracks[0].track.name}
      trackurl={tracks[0].track.external_urls.spotify}
      albumart={tracks[0].track.album.images[2].url}/>

    {projectElements}

  </div> 
</>
  )
}



export default App;
