const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser1 = await User.find().exec();

    const foundUser = await User.findOne({ username: user }).exec();
    console.log(foundUser)
    if (!foundUser) return res.json({"foundUser":foundUser}); //Unauthorized 
    // evaluate password 
    pwd=await bcrypt.hash(pwd,10);
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        console.log("User found");
        const roles = Object.values(foundUser.roles).filter(Boolean);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles,
                    "_id":foundUser._id,
                    "email":foundUser.email,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '7888s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        console.log("Refresh token created");
        console.log("writing refresh token to db");
        // Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();

        
        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ roles, accessToken });

    } else {
        res.json({"foundUser":foundUser});
        // res.sendStatus(401);
    }
}

module.exports = { handleLogin };

   
