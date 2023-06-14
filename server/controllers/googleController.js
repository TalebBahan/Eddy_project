// google controller
const { OAuth2Client } = require("google-auth-library");
const fs = require("fs");
const token = require("../model/Token");
const fetch = require("node-fetch");
const { google } = require("googleapis");
const { kill } = require("process");
const { log } = require("console");
const { json } = require("express");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

// create a Google OAuth2 client
const client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);

token.findOne({_id:'645a3319b8725a02ee25de2c'}).then((token)=>{
  if(token.json){
    client.setCredentials(JSON.parse(token.json))
  }
})
// create a login route that redirects the user to Google sign-in page
async function googlelogin(req, res) {

  // state is random string
  state =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
    token.findOne({_id:'645a3319b8725a02ee25de2c'}).then((token) => {
    if (token) {

      token.googleState = state;
      token.save();

    } else {

      // res.status(400).send("unauthorized");
    }
  });
  // console.log(user.find());


  const scopes = [
    "https://www.googleapis.com/auth/youtube",
    "https://www.googleapis.com/auth/youtube.force-ssl",
    "https://www.googleapis.com/auth/youtube.upload",
    "https://www.googleapis.com/auth/youtubepartner",
    "https://www.googleapis.com/auth/youtube.channel-memberships.creator",
    "https://www.googleapis.com/auth/youtube.third-party-link.creator",
  ];

  const authUrl = client.generateAuthUrl({
    access_type: "offline", // request a refresh token
    scope: scopes, // specify requested scopes
    state: state, // set the state parameter to random string
  });

  res.redirect(authUrl);
}

// create a callback route that handles the Google sign-in response
async function googlecallbak(req, res) {
  const code = req.query.code;
  const state = req.query.state;


  try {
    var data = await client.getToken(code);
    
    client.setCredentials(data.tokens);
    token.findOne({ googleState: state }).then((token) => {
      if (token) {
        token.googleRefreshToken = data.tokens.refresh_token;
        token.googleAccessToken = data.tokens.access_token;
        token.json=JSON.stringify(data.tokens)
        token.save();
        return res.redirect("http://localhost:3000/admin/youtube");
      } else {
        
        res.status(400);
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to log in");
  }
}
const VIDEO_FILE_PATH="C:\Users\hp\Pictures\Camera Roll\20210825_170249.mp4";
const uploadVideo = (req, res) => {
  const service = google.youtube({
    version: "v3",
    auth: client,
  });
  service.videos.insert(
    {
      auth: client,
      part: "snippet,contentDetails,status",
      resource: {
        // Video title and description
        snippet: {
          title: "My 2nd",
          description: "My 2nd description",
        },
        // I set to private for tests
        status: {
          privacyStatus: "public",
        },
      },

      // Create the readable stream to upload the video
      media: {
        body: fs.createReadStream(VIDEO_FILE_PATH), // Change here to your real video
      },
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return res.status(error.status).send(error);
      }
     
      return res.status(200).send(data);
    }
  );
};

const getvideos = async (req, res) => {

  let access_token;
  let refresh_token;
  const i = await token.findOne({_id:'645a3319b8725a02ee25de2c'}); // assuming you're using ObjectId for user lookup
  if (!i.googleAccessToken) {
    res.status(403).send("login to your google account first");
  }
  access_token = i.googleAccessToken;
  refresh_token = i.googleRefreshToken;
  let videoid;
  
  if (access_token) {
    
    fetch(
      "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        
        return fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${data.items[0].contentDetails.relatedPlaylists.uploads}&key=${GOOGLE_API_KEY}`
        );
      })
      .then((response) => response.json())
      .then((videoData) => {
        
      
        res.status(200).json(videoData);
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).send("Failed to get videos");
      });
  }
};

async function getonevideo(req, res) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${req.params.id}&key=${GOOGLE_API_KEY}`
    );
    const videoData = await response.json();
    res.status(200).json(videoData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to get video");
  }
}
const updateVideo = async (req, res) => {
  const videoId = req.params.id;
  const newTitle = req.body.title;
  const newDescription = req.body.description;
  const i = await token.findOne({_id:'645a3319b8725a02ee25de2c'}); // assuming you're using ObjectId for user lookup
  if (!i.googleAccessToken) {
    res.status(403).send("login to your google account first");
  }
  access_token = i.googleAccessToken;
  refresh_token = i.googleRefreshToken;
  //no refresh token is set
  
  const service = google.youtube({
    version: "v3",
    auth: client,
  });

  try {
    const response = await service.videos.update({
      part: "snippet",
      refresh_token: refresh_token,
      resource: {
        id: videoId,
        snippet: {
          title: newTitle,
          description: newDescription,
          categoryId: 28
        },
      },
    });
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to update video");
  }
};
const deleteVideo = async (req, res) => {
  const videoId = req.params.id;
  

  const service = google.youtube({
    version: "v3",
    auth: client,
  });

  try {
    const response = await service.videos.delete({
      id: videoId,
    });
    res.status(200).send("Video deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to delete video");
  }
};


module.exports = {
  googlelogin,
  googlecallbak,
  uploadVideo,
  getvideos,
  getonevideo,
  deleteVideo,
  updateVideo
};
