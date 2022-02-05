import React, {useEffect, useState} from 'react';
// import {Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  const [items,setItems] = useState([]);

  useEffect(() => {  
    fetch('/refresh_token')
      .then(resp => resp.json())
      .then(items =>setItems(items))
  }, []);
  return(
    <div>{items.access_token}</div>
  )
}


// function App() {
// // const querystring = window.location.search;
// // const urlParams = new URLSearchParams(querystring);
// // const accessToken = urlParams.get('access_token')

// // console.log(accessToken)
//   // const [items,setItems] = useState([]);

//   // useEffect(() => {  
//   //   const endpoint = 'https://api.spotify.com/v1/me/player/recently-played?limit=5'
//   //   fetch(endpoint, {
//   //     headers: {
//   //       'Authorization' : `Bearer ${token}`
//   //     }
//   //   })
//   //     .then((resp) => {
//   //       resp.json()
//   //         .then(result => {
//   //           setItems(result.items)
//   //         });
//   //     })
//   //   .catch((err) => console.error(err))
//   // }, []);

// return (
//   <div className="App">
//     <h1>Spotify API Recently Played!</h1>
    
//   </div>
// );
// }

export default App;
