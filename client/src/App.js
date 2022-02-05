import axios from 'axios';
import React, {useEffect, useState} from 'react';
// import {Routes, Route, Link} from "react-router-dom";
import './App.css';

// function App() {
//   const [items,setItems] = useState([]);

//   useEffect(() => {  
//     fetch('/refresh_token')
//       .then(resp => resp.json())
//       .then(items =>setItems(items))
//   }, []);
//   return(
//     <div>{items.access_token}</div>
//   )
// }

function App() {
  const [items,setItems] = useState([]);

  useEffect(() => {  
    fetch('/refresh_token')
      .then(resp => resp.json())
      .then(items =>setItems(items))
  }, []);

  const [tracks,getTracks] = useState([]);
  const endpoint = 'https://api.spotify.com/v1/me/player/recently-played?limit=5'

  fetch(endpoint, {
    headers: {
      'Authorization' : `Bearer ${items.access_token}`
    }
  })
    .then((resp) => {
      resp.json()
        .then(tracks => {
          getTracks(tracks)
        })})

  return(
    <>
    {/* <div>{items.access_token}</div> */}
    <div>{tracks}</div>
    </>

  )
}

export default App;
