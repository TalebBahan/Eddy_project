// middelware to verify google token 
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URL);
const Token = require('../model/Token');

const refreshgoogleAccessToken = async (refreshToken) => {
    const { data } = await axios({
        url: 'https://oauth2.googleapis.com/token',
        method: 'post',
        params: {
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            refresh_token: refreshToken,
            grant_type: 'refresh_token',
        },
    });
    return data.access_token;
};

const verifyToken = async (req, res, next) => {
    try {
        const token = await Token.findOne({}); // Assuming you have only one token in your Token collection
        const newAccessToken = await refreshgoogleAccessToken(token.googleRefreshToken); // Function to refresh the Google access token
  
        if (token.googleAccessToken !== newAccessToken && newAccessToken !== undefined) {
          // Update the token in the database
          token.googleAccessToken = newAccessToken;
          await token.save();
        }
  
        // Proceed to the next middleware
        next();
      } catch (error) {
        // Handle any errors that occurred during token refreshing
        res.status(500).json({ error: 'Failed to refresh access token' });
      }
    };



module.exports = verifyToken;
