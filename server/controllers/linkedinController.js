const Token = require('../model/Token');
const fetch = require('node-fetch');

const YOUR_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const YOUR_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const YOUR_CALLBACK_URL = process.env.LINKEDIN_CALLBACK_URL;

// LinkedIn login function
function linkedinLogin(req, res) {
    state =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

    Token.findOne({_id:'645a3319b8725a02ee25de2c'}).then((token) => {
    if (token) {
        console.log(token);
        token.linkedinState = state;
        token.save();
        console.log("hi: ", token)
    } else {
        console.log("token does not exist");
        // res.status(400).send("unauthorized");
    }
    });

  const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${YOUR_CLIENT_ID}&redirect_uri=${YOUR_CALLBACK_URL}&state=${state}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
  res.redirect(authorizationUrl);
}

// LinkedIn callback function
async function linkedinCallback(req, res) {
  const code = req.query.code;
  const state = req.query.state;
  console.log(state);
  // get the tokens
  data = await getAccessToken(code, YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_CALLBACK_URL);
    console.log(data);
   // get the user profile
    profile = await getLinkedinProfile(data.access_token);

    // save the token to the database
    token.findOne({ linkedinState: state }).then((token) => {
        if (token) {
            token.linkedinAccessToken = data.access_token;
            token.linkedinRefreshToken = data.refresh_token;
            token.linkedinExpiresIn = data.expires_in;
            token.linkedinRefreshTokenExpiresIn = data.refresh_token_expires_in;
            token.linkedinId = profile.id;
            token.linkedinEmail = profile.email;
            token.linkedinName = profile.name;
            token.linkedinPicture = profile.picture;
            token.save();
        }
    });
    res.redirect(process.env.FRONTEND_URI);

  
}


async function getAccessToken(authorizationCode, clientId, clientSecret, redirectUri) {
  const url = 'https://www.linkedin.com/oauth/v2/accessToken';
  const body = `grant_type=authorization_code&code=${authorizationCode}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error('Failed to get access token');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to get access token:', error.message);
    throw error;
  }
}
const getLinkedinProfile = async (accessToken) => {
    const url = 'https://api.linkedin.com/v2/me';
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'cache-control': 'no-cache',
                'X-Restli-Protocol-Version': '2.0.0'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to get user profile');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to get user profile:', error.message);
        throw error;
    }
};



async function refreshAccessToken(refreshToken, clientId, clientSecret) {
    const url = 'https://www.linkedin.com/oauth/v2/accessToken';
    const body = `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
      });
  
      if (!response.ok) {
        throw new Error('Failed to refresh access token');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to refresh access token:', error.message);
      throw error;
    }
  }
  

// linkedinPosts = async (req, res) => {
//     const url = 'https://api.linkedin.com/v2/shares';
//     // get the token from the database
//     Token.findOne({_id : '645a3319b8725a02ee25de2c'}).then((token) => {
//         if (token) {
//             const accessToken = token.linkedinAccessToken;
//             const refreshToken = token.linkedinRefreshToken;
//             const Id = token.linkedinId;
//         }
//     }); 
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//                 'cache-control': 'no-cache',
//                 'X-Restli-Protocol-Version': '2.0.0',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "owner": `urn:li:person:${Id}`,
//                 "subject": "This is a test post",
//                 "text": {

    

module.exports = {
    linkedinLogin,
    linkedinCallback,
  
};

