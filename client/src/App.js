import React, {useEffect, useState} from 'react';
// import {Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {
// const querystring = window.location.search;
// const urlParams = new URLSearchParams(querystring);
// const accessToken = urlParams.get('access_token')

// console.log(accessToken)



return (
  <div className="App">
    <h1>Spotify API Recently Played!</h1>

  </div>

);
}

export default App;

function Callback() {
  const [items,setItems] = useState([]);

  useEffect(() => {  
    fetch('/callback', {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
      .then((resp) => {
        resp.json()
          .then(result => {
            setItems(result.items)
          });
      })
    .catch((err) => console.error(err))
  }, []);
  return (
    <>
    </>
  )
}