const Newsletter = require('../models/newsletter');
const Subscriber = require('../models/subscriber');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
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
    extName: '.handlebars',
    partialsDir: path.resolve('./views'),
    defaultLayout: false,
  },
  viewPath: path.resolve('../views'),
  extName: '.handlebars',
};

transporter.use('compile', hbs(handlebarOptions));

exports.sendNewsletter = (req, res) => {
  const { emailList, newsletterId } = req.body;

  Newsletter.findById(newsletterId)
    .then(newsletter => {
      if (!newsletter) {
        throw new Error('Newsletter not found');
      }

      const mailOptions = {
        from: 'talebahan@gmail.com',
        subject: newsletter.title,
        template: 'email',
        context: newsletter
        
      };

      if (emailList && emailList.length > 0) {
        mailOptions.to = emailList
        return transporter.sendMail(mailOptions);
      } else {
        return Subscriber.find({ interests: newsletter.interests })
          .then(subscribers => {
            const emailList = subscribers.map(subscriber => subscriber.email);
            console.log(emailList.join(', '));
            mailOptions.to = emailList;
            return transporter.sendMail(mailOptions);
          });
      }
    })
    .then(info => {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully!');
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error sending email!');
    });
};
