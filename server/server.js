const express = require("express");
const dotenv = require('dotenv')
dotenv.config();
const querystring = require('querystring')
const PORT = process.env.PORT || 3001;
const app = express();
const path= require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/healthcheck', function(req,res){
  res.json({ message: "cool this works hopefully" });
});

const client_id = process.env.CL_ID
const client_secret = process.env.CL_SEC
// const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');
const redirect_uri = process.env.REDIRECT_URI

app.get("/callback", (req, res) => {
});

app.get('/recently_played', async (req, res) => {
  const refresh_token = process.env.TOKEN;

  try{
    const accessToken = await axios(
      {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
          grant_type: 'refresh_token',
          refresh_token: refresh_token
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${new Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
        }
      }
    )
    .then(resp => resp.data.access_token)

  // second resp
    const RecentlyPlayedData = await axios(
      {
        method: 'get',
        url: 'https://api.spotify.com/v1/me/player/recently-played',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
      })
    .then(resp => resp.data)
    console.log(RecentlyPlayedData)
    res.status(200).send({payload: RecentlyPlayedData}).end()
    }
    catch (e) {
      console.error(e)
      res.status(400).send({message:'error'});
  }
  });


  app.get('/refresh_token', (req, res) => {
    const refresh_token = process.env.TOKEN;
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
      },
    })
      .then(response => {
        access_token = response.data.access_token
        res.send({access_token: access_token})
      })
      .catch(error => {
        res.send(error);
      });
    });
  

// const getRecentlyPlayed = () => {
//   axios({
//     method: 'get',
//     url: 'https://api.spotify.com/v1/me/player/recently-played',
//     headers: {
//     Authorization: `Bearer ${getAccessToken}`
// },
//   })

// }

// app.get('/api', function(req,res){
//   getRecentlyPlayed()
//   .then((resp) => resp.json()
//   )
//     .then((result) => {
//       res.send(result);
//     })

// }
// )

  // let access_token = await api.request
// client frontend handler getRecentTracks
// token back and use it to the endpoint
// take that info and send back to frontend
// garbage collected


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

