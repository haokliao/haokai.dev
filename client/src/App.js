import React, {useEffect, useState} from 'react';
// import {Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {

  const [tracks,getTracks] = useState([]);

  useEffect(() => {
  fetch('/recently_played')
  .then((resp) => {
    resp.json()
    .then(tracks =>getTracks(tracks.payload.items))
    })
    .catch((err) => console.error(err))
  }, []);
  // .then((resp) => {
  //   resp.json()
  //     .then(result => {
  //       setItems(result.items)
  //     });
  console.log(tracks)
  console.log(tracks.payload)
  console.log(tracks.items)
  return(
    <>
    
            {/* <ul>
        {tracks && 
        tracks.map((item,i) =>{
          return(
            <li key= {i}>
              <span className='tracks'>
                <img src ={item.track.album.images[2].url} alt ='album_cover'/> {item.track.name}
              </span>
            </li>
          )
        }
        )}

      </ul> */}

<img src = {tracks[0].track.album.images[2].url} alt ='album_cover'/> 
      <p>{tracks[0].track.name}</p>
  </>
  )
}

export default App;

// <div class="grid-container">
//   <div class="header">
//   <h1>Hao Kai Liao</h1>
// </div>

// <div class="left blue-border">
//   <img src= {require('./imgs/hkl_headshot.png')} class='headshot' alt='Hao Kai Liao headshot'/>
//   <table>
//     <tr>
//       <td >You can call me..</td>
//       <td class="words">Kevin / Kai</td>
//     </tr>
//     <tr></tr>
//     <tr>
//       <td>I’m located in..</td>
//       <td class="words">Queens, NY</td>
//     </tr>
//   </table>

//   <div class='icons'>
//     <a href='https://github.com/haokliao/haokliao.github.io/raw/main/imgs/HaoKaiLiao_Resume.pdf'
//     class='text-decoration-none' title='Resume!'>
//       <i class="far fa-file fa-2x project-imgs" ></i>
//     </a>

//     <a href='https://www.linkedin.com/in/haokliao/'
//     class ='text-decoration-none text-linkedin' title='Linkedin'>
//       <i class="fab fa-linkedin fa-2x project-imgs" alt='find me on linkedin, @haokliao'></i>
//     </a>

//     <a href='https://www.github.com/haokliao' 
//     class='text-decoration-nonetext-github text-decoration-none' title='Github' >
//       <i class="fab fa-github fa-2x project-imgs" alt='find me on github, @haokliao'></i>
//     </a>
//   </div>
// </div>

// <div class='listening'>
// <div class='big-txt '>I’m listening to..</div>       
//     <span className='listening-bod'>
//       <img src = {items.track.album.images[2].url} alt ='album_cover'/><p>{items[0].track.name}</p> 
//     </span>
// </div>

// <div class="about blue-border">
//   <p class= 'abt-text'>About Me</p>
//   <div class='blurb'>
//     <p>Hi ! I’m a student based in New York, with an interest in front end/web development.</p>
//     <p>I’m currently studying Computer Information Systems @ Baruch College, and have an Associates from The Culinary Institute of America in Baking and Pastry Arts.</p>
//     <p>In my free time, I love baking bread and sharing food experiences, creating playlists for friends, and bouldering!</p>
//   </div>
// </div>




// <div class="web-proj-1 projects blue-border">

//   <div class='proj-header'>
//     <p>Projects - Web Development</p>        
//   </div>

//   <span class='project-slices'>
//     <p class='big-txt'>uDecide</p>
//     <p class='small-txt'>React, CSS, HTML, CSS, PostgreSQL</p>
//     <p class='small-txt'>A website designed to help YOU make decisions!</p>
//     <p class='small-txt'>CUNY Tech Prep semester end group project</p>

//     <a href='https://github.com/haokliao/uDecide' >
//       <img src="imgs/uDecide.png" class='slices-img' id='smaller-pics' alt='Slices Project'/>
//     </a>
//   </span>
// </div>


// <div class="web-proj-2 projects blue-border">

//   <div class='proj-header'>
//     <p>Projects - Web Development</p>        
//   </div>

//   <span class='project-slices'>
//     <p class='big-txt'>Slices (Work in Progress)</p>
//     <p class='small-txt'>Figma, HTML, CSS</p>
//     <p class='small-txt'>Small fruit themed blog site featuring musings on music. inspired by manila-folders!</p>

//     <a href='https://github.com/haokliao/slices' >
//       <img src="imgs/slices.png" class='slices-img' id='smaller-pics' alt='Slices Project'/>
//     </a>
//   </span>
// </div>


// <div class="data-project-1 projects blue-border">
//   <div class='proj-header'>
//       <p>Projects - Data Analytics</p>        
//   </div>

//   <span class='project-critforcevis'>
//       <p class='big-txt'>Critical Force Visualization<br/></p>
//       <p class='small-txt'>Pandas, Seaborn, Matplotlib, Conda</p>
//       <p class='small-txt'>Data Visualizations done based on data from Lattice Training's paper (Climbing Critical Force Data, Giles et al 2020)</p>
//       <div>
//       <a href='https://github.com/haokliao/Critical-Force-Visualization' >
//       <img src="imgs/cf-vis.png"  id='smaller-pics' alt='Critical Force Visualization Project'/>
//       </a>
//       </div>
//   </span>
// </div>

// <div class='data-project-2 projects blue-border'>
//   <div class='proj-header'>
//     <p>Projects - Data Analytics</p>        
//   </div>

//   <div class='project-climbdiscvis'>
//       <p class='big-txt'>Climbing Disciplines<br/>
//           Visualization</p>
//       <p class='small-txt'>Pandas, iPyWidgets, Seaborn, Poetry</p>
//       <p class='small-txt'>Interactive data vis done through crowd sourcing local climbers
//           and their grades in three different climbing disciplines
//           (bouldering, toprope, lead)</p>

//       <a href='https://github.com/haokliao/Climbing-Disciplines-Vis' >
//       <img src="imgs/bouldering_img_1.png" id='smaller-pics' alt='Climbing Disciplines Project'/>
//       </a>
//     </div>
// </div>
// </div> 


