const express = require("express");
const dotenv = require('dotenv')
dotenv.config();
const qs = require('qs')
const querystring = require('querystring')
const PORT = process.env.PORT || 3001;
const app = express();
const path= require('path');
const { URLSearchParams } = require("url");
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/healthcheck', function(req,res){
  res.json({ message: "cool this works hopefully" });
});

const client_id = process.env.CL_ID
const client_secret = process.env.CL_SEC
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');
const redirect_uri = process.env.REDIRECT_URI

app.get("/callback", (req, res) => {
});

// app.get('/refresh_token', (req, res) => {S

app.get('/refresh_token', (req, res) => {
  const refresh_token = process.env.TOKEN;

  // requesting access token from refresh token
  
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
      if (response.status === 200) {
        const { access_token, refresh_token } = response.data;

        const queryParams = querystring.stringify({
          access_token,
        });
        res.redirect(`http://localhost:3001/?${queryParams}`);
      } else {
        res.redirect(`/?${querystring.stringify({ error: 'invalid_token' })}`);
      }
    })
      // res.send(response.data);
    .catch(error => {
      res.send(error);
    });
});



// app.get('/api', (req, res) => {
//   // const code = req.query.code || null;

//   axios({
//     method: 'post',
//     url: 'https://accounts.spotify.com/api/token',
//     data: querystring.stringify({
//       grant_type: 'refresh_token',
//       code: auth_code,
//       redirect_uri: redirect_uri
//     }),
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${new Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
//       // 'Authorization': `Basic ${auth_token}`,
//     },
//   })
//     .then(response => {
//       if (response.status === 200) {
//         res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
//       } else {
//         res.send(response);
//       }
//     })
//     .catch(error => {
//       res.send(error);
//     });
// });


// app.get('/callback', function(req, res) {
//   const code = req.query.code || null;

//   if (state === null) {
//     res.redirect('/#' +
//       qs.stringify({
//         error: 'state_mismatch'
//       }));
//   } else {
//     var authOptions = {
//       url: 'https://accounts.spotify.com/api/token',
//       form: {
//         code: auth_code,
//         redirect_uri: redirect_uri,
//         grant_type: 'authorization_code'
//       },
//       headers: {
//         'Authorization': `Basic ${auth_token}`,
//         // 'Content-Type': 'application/x-www-form-urlencoded'
//         // 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//       },
//       json: true
//     };
//   }
// });



// app.get('/callback', function(req, res) {

//   var code = req.query.code || null;
//   var state = req.query.state || null;

//   if (state === null) {
//     res.redirect('/#' +
//       qs.stringify({
//         error: 'state_mismatch'
//       }));
//   } else {
//     var authOptions = {
//       url: 'https://accounts.spotify.com/api/token',
//       form: {
//         code: auth_code,
//         redirect_uri: redirect_uri,
//         grant_type: 'authorization_code'
//       },
//       headers: {
//         'Authorization': `Basic ${auth_token}`,
//         // 'Content-Type': 'application/x-www-form-urlencoded'
//         // 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//       },
//       json: true
//     };
//   }
// });


// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {

//     var access_token = body.access_token,
//         refresh_token = body.refresh_token;

//     var options = {
//       url: 'https://api.spotify.com/v1/me',
//       headers: { 'Authorization': 'Bearer ' + access_token },
//       json: true
//     };

//     // use the access token to access the Spotify Web API
//     request.get(options, function(error, response, body) {
//       console.log(body);
//     });

//     // we can also pass the token to the browser to make requests from there
//     res.redirect('/#' +
//       querystring.stringify({
//         access_token: access_token,
//         refresh_token: refresh_token
//       }));
//   } else {
//     res.redirect('/#' +
//       querystring.stringify({
//         error: 'invalid_token'
//       }));
//   }
// });

// const getAuth = async () => {
//   try{
//     //make post request to SPOTIFY API for access token, sending relavent info
//     const token_url = 'https://accounts.spotify.com/api/token';
//     const data = qs.stringify({'grant_type':'client_credentials'});

//     const response = await axios.post(token_url, data, {
//       headers: { 
//         'Authorization': `Basic ${auth_token}`,
//         'Content-Type': 'application/x-www-form-urlencoded' 
//       }
//     })
//     //return access token
//     return response.data.access_token;
//     //console.log(response.data.access_token);   
//   }catch(error){
//     //on fail, log the error in console
//     console.log(error);
//   }
// }

// response will have json data of access token, token type, scope, expires in, refresh token
// we want access token
// request refreshed access token



// app.get("/login", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

