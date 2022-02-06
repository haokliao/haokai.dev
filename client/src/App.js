import React, {useEffect, useState} from 'react';
// import {Routes, Route, Link} from "react-router-dom";
import './App.css';


function App() {
  const [items,setItems] = useState([]);

  useEffect(() => {  
    fetch('/recently_played')
    .then((resp) => {
      resp.json()
        .then(result => {
          setItems(result.payload.items)
        });
    })
  .catch((err) => console.error(err))
}, []);


  return(
    <>
      <h4>I&apos;ve been listening to</h4>

    <div>
    <span className='tracks'>
                <img src = {items[0].track.album.images[2].url} alt ='album_cover'/> {items[0].track.name}
              </span>
    </div>

    </>

  )
}

export default App;
