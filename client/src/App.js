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


  return(
    <>
      <img src = {tracks[0].track.album.images[2].url} alt ='album_cover'/> 
      <p>{tracks[0].track.name}</p>
  </>
  )
}

export default App;
