import React, {useEffect, useState} from 'react';
import '../App.css'


export default function RecentlyPlayed(props) {

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
      .then(tracks => getTracks(tracks.payload.items))
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <>
    <div className='listening'>
        <div className='big-txt'>
          <a href='https://open.spotify.com/user/1242975125' target='_blank' rel='noopener noreferrer'>I’m</a> currently listening to..
        </div>       
        <div className='listening-container'>
          <div className='listening-album'>
            <img src = {tracks[0].track.album.images[2].url} alt ='album_cover'/>
          </div>
          <div className='listening-text'>
            <a href={tracks[0].track.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
              {tracks[0].track.name}
            </a>
            <span> by</span> {tracks[0].track.album.artists[0].name}
          </div>
        </div> 
      </div>     
    </>
  )

}

