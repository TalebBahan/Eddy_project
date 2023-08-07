require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;
// Connect to MongoDB
connectDB();
app.use(express.static("public"));
// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use('/google', require('./routes/api/googlelogin'))
// app.use('/api/linkedin', require('./routes/api/linkedin'));
app.use('/api/data', require('./routes/api/data'));

app.use('/api/linkedin', require('./routes/api/linkedin'));


app.use(verifyJWT);
app.use('/api/google', require('./routes/api/google'));
app.use('/api/users', require('./routes/api/user'));
app.use('/api/team', require('./routes/api/team'));
app.use('/api/link', require('./routes/api/link'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/newsletter', require('./routes/api/newsletter'));
app.use('/api/youtube', require('./routes/api/youtube'));
app.use('/api/content', require('./routes/api/content'));
app.use('/api/heroLinks', require('./routes/api/heroLinks'));
app.use('/api/linkedin', require('./routes/api/linkedinPosts'));
app.use('/api/interests', require('./routes/api/interests'));
app.use('/api/articles', require('./routes/api/article'));
app.use('/api/books', require('./routes/api/book'));
app.use('/api/hero', require('./routes/api/hero'));
app.use('/api/media', require('./routes/api/media'));
app.use('/api/subscribers', require('./routes/api/subscriber'));



app.all('*', (req, res) => {
    res.status(404).json({ msg: 'api not found' });
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
//app-client-build
const appClient = express();
appClient.use('/', express.static(path.join(__dirname, '../client/build')));
appClient.listen(7474, () => console.log(`Client build serve ${7474}`));
//app-client-build
const appSite = express();
appSite.use('/', express.static(path.join(__dirname, '../site/build')));
appSite.listen(7475, () => console.log(`Site build serve ${7475}`));