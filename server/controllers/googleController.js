// google controller
const { OAuth2Client } = require("google-auth-library");
const fs = require("fs");
const user = require("../model/user");
const fetch = require("node-fetch");
const { google } = require("googleapis");
const { kill } = require("process");
const { log } = require("console");

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

// create a login route that redirects the user to Google sign-in page
async function googlelogin(req, res) {
  console.log("got in")
  // state is random string
  state =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  user.findOne({ username: req.params.username }).then((user) => {
    if (user) {
      console.log("user already exists");
      user.googleState = state;
      user.save();
      console.log("hi: ", user)
    } else {
      console.log("user does not exist");
      res.status(400).send("unauthorized");
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
  console.log(state);

  try {
    var data = await client.getToken(code);
    client.setCredentials(data.tokens);
    user.findOne({ googleState: state }).then((user) => {
      if (user) {
        user.googleRefreshToken = data.tokens.refresh_token;
        user.googleAccessToken = data.tokens.access_token;
        user.save();
        return res.redirect("http://localhost:3000/admin/youtube");
      } else {
        console.log("user does not exist");
        res.status(400);
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to log in");
  }
}

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
          title: "My title",
          description: "My description",
        },
        // I set to private for tests
        status: {
          privacyStatus: "private",
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
      console.log("https://www.youtube.com/watch?v=" + data.data.id);
      return res.status(200).send(data);
    }
  );
};

const getvideos = async (req, res) => {

  let access_token;
  let refresh_token;
  const i = await user.findOne({ username: req.params.username }); // assuming you're using ObjectId for user lookup
  if (!i.googleAccessToken) {
    res.status(403).send("login to your google account first");
  }
  access_token = i.googleAccessToken;
  refresh_token = i.googleRefreshToken;
  let videoid;
  console.log(access_token);
  if (access_token) {
    console.log("dfa", access_token);
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
        console.log(videoData);
      
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

module.exports = {
  googlelogin,
  googlecallbak,
  uploadVideo,
  getvideos,
  getonevideo,
};
