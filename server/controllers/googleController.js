const { OAuth2Client } = require("google-auth-library");
const fs = require("fs");
const fetch = require("node-fetch");
const { google } = require("googleapis");
const Youtube = require('../model/Youtube');
const Token = require("../model/Token");

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
  GOOGLE_API_KEY,
  GOOGLE_RE
} = process.env;

const client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);

async function googlelogin(req, res) {
  const state =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const token = new Token();
  token.googleState = state;
  await token.save();

  const scopes = [
    "https://www.googleapis.com/auth/youtube",
    "https://www.googleapis.com/auth/youtube.force-ssl",
    "https://www.googleapis.com/auth/youtube.upload",
    "https://www.googleapis.com/auth/youtubepartner",
    "https://www.googleapis.com/auth/youtube.channel-memberships.creator",
    "https://www.googleapis.com/auth/youtube.third-party-link.creator",
  ];

  const authUrl = client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    state: state,
  });

  res.redirect(authUrl);
}

async function googlecallbak(req, res) {
  const code = req.query.code;
  const state = req.query.state;

  try {
    const data = await client.getToken(code);

    client.setCredentials(data.tokens);
    const token = await Token.findOne({ googleState: state });
    if (token) {
      token.googleRefreshToken = data.tokens.refresh_token;
      token.googleAccessToken = data.tokens.access_token;
      token.json = JSON.stringify(data.tokens);
      await token.save();
      return res.redirect("http://dashboard.eddyabboud.com/#/admin/youtube");
    } else {
      res.status(400);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to log in");
  }
}



 const responseVideos =  (youtubeVideos,videos) => {
  const stored = [];
  const notStored = [];
  youtubeVideos.forEach((video) => {
    const { title, description, publishedAt } = video.snippet;
    const { videoId } = video.snippet.resourceId;
    const videoData = { title, description, publishedAt, videoId };
    // add condition to check if videos contains anything at all 
    const storedVideo = videos.find((v) => v.videoId === videoId); 

    if (storedVideo) {
      stored.push(videoData);
    } else {
      notStored.push(videoData);
    }
  });
  return { stored, notStored };
};
const getvideos = async (req, res) => {
  // get the last token
  const token = await Token.findOne().sort({ _id: -1 }).limit(1);
  const videos = await Youtube.find();

  if (!token || !token.googleAccessToken) {
    res.status(403).send("Please log in to your Google account first",videos);
    return;
  }

  const access_token = token.googleAccessToken;
  const refresh_token = token.googleRefreshToken;

  fetch("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${data.items[0].contentDetails.relatedPlaylists.uploads}&key=${GOOGLE_API_KEY}`);
    })
    .then(response => response.json())
    .then(videoData => {
      const { stored, notStored } = responseVideos(videoData.items,videos);
      res.status(200).json({ stored, notStored});
    })
    .catch(error => {
      console.error("Error:", error);
      res.status(500).send("Failed to get videos");
    });
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
  getvideos,
  getonevideo,
  deleteVideo,
  updateVideo
};
