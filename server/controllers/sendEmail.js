const path = require('path')
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'talebbahan@gmail.com',
    pass: 'ymhrwmgbeecfbquf'
  }
});

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve('./views'),
    defaultLayout: false,
  },
  viewPath: path.resolve('../views'),
  extName: ".handlebars",
}

transporter.use('compile', hbs(handlebarOptions));

var mailOptions = {
  from: 'talebahan@gmail.com',
  to: "21014@supnum.mr",
  subject: 'Sending Email using Node.js',
  template: 'email',
  context: {
    title: 'Title Here',
    text: "Lorem ipsum dolor sit amet, consectetur..."
  }

};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});