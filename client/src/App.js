import React, {useEffect, useState} from 'react';
// import {Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {

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
            url: 'https://i.scdn.co/image/ab67616d00001e028dbdac761ce552c2ac7d69e1'
          }
        ],
        artists: 
          [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/0knGpCTbmG4ctl1wzYRZs4'
              }
            },
            {
            name: 'Dijon',
            }
          ]
        
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
          <tr></tr>
          <tr>
            <td>I’m located in..</td>
            <td className="words">Queens, NY</td>
          </tr>
        </tbody>
      </table>

      <div className='icons'>
        <a href={require('./imgs/HKL_resume.pdf')} target='_blank' rel='noreferrer'
          className='text-decoration-none' title='Resume!'>
          <img src= {require('./imgs/resume_icon.png')} style={{cursor:'pointer'}} className='project-imgs' alt='Resume PDF Icon'/>
        </a>
        <a href='https://www.linkedin.com/in/haokliao/'
          className ='text-decoration-none text-linkedin' title='Linkedin'>
          <img src= {require('./imgs/li_icon.png')} className='project-imgs' alt='find me on Linkedin, @haokliao'/>
        </a>
        <a href='https://www.github.com/haokliao' 
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

    <div className="web-proj-1 projects blue-border">
      <div className='proj-header'>
        <p>Projects - Web Development</p>        
      </div>
      <span className='project-slices'>
        <p className='big-txt'>uDecide</p>
        <p className='small-txt'>React, CSS, HTML, CSS, PostgreSQL</p>
        <p className='small-txt'>A website designed to help YOU make decisions!</p>
        <p className='small-txt'>CUNY Tech Prep semester end group project</p>
        <a href='https://github.com/haokliao/uDecide' >
          <img src={require('./imgs/uDecide.png')} className='slices-img' id='smaller-pics' alt='Slices Project'/>
        </a>
      </span>
    </div>

    <div className="web-proj-2 projects blue-border">
      <div className='proj-header'>
        <p>Projects - Web Development</p>        
      </div>
      <span className='project-slices'>
        <p className='big-txt'>Slices (Work in Progress)</p>
        <p className='small-txt'>Figma, HTML, CSS</p>
        <p className='small-txt'>Small fruit themed blog site featuring musings on music. inspired by manila-folders!</p>
        <a href='https://github.com/haokliao/slices' >
          <img src={require('./imgs/slices.png')} className='slices-img' id='smaller-pics' alt='Slices Project'/>
        </a>
      </span>
    </div>

    <div className="data-project-1 projects blue-border">
      <div className='proj-header'>
        <p>Projects - Data Analytics</p>        
      </div>
      <span className='project-critforcevis'>
          <p className='big-txt'>Critical Force Visualization<br/></p>
          <p className='small-txt'>Pandas, Seaborn, Matplotlib, Conda</p>
          <p className='small-txt'>Data Visualizations done based on data from Lattice Training's paper (Climbing Critical Force Data, Giles et al 2020)</p>
          <a href='https://github.com/haokliao/Critical-Force-Visualization' >
          <img src={require('./imgs/cf-vis.png')} id='smaller-pics' alt='Critical Force Visualization Project'/>
          </a>
      </span>
    </div>

    <div className='data-project-2 projects blue-border'>
      <div className='proj-header'>
        <p>Projects - Data Analytics</p>        
      </div>
      <div className='project-climbdiscvis'>
          <p className='big-txt'>Climbing Disciplines<br/>
              Visualization</p>
          <p className='small-txt'>Pandas, iPyWidgets, Seaborn, Poetry</p>
          <p className='small-txt'>Interactive data vis done through crowd sourcing local climbers
              and their grades in three different climbing disciplines
              (bouldering, toprope, lead)</p>
          <a href='https://github.com/haokliao/Climbing-Disciplines-Vis' >
          <img src={require('./imgs/bouldering_img_1.png')} id='smaller-pics' alt='Climbing Disciplines Project'/>
          </a>
        </div>
    </div>

  </div> 
</>
  )
}

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

export default App;
