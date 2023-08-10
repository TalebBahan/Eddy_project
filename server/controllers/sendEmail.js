const { log } = require('console');
const Newsletter = require('../model/newsletter');
const Subscriber = require('../model/subscriber');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  }
});

const handlebarOptions = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: path.resolve('./views'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./views'),
  extName: '.handlebars',
};

transporter.use('compile', hbs(handlebarOptions));

const sendEmail = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return true;
  } catch (error) {
    console.log(error);
    throw new Error('Error sending email!');
  }
};

exports.sendNewsletter = async (req, res) => {
  const { emailList, newsletterId } = req.body;
  try {
    const newsletter = await Newsletter.findById(newsletterId);
    if (!newsletter) {
      throw new Error('Newsletter not found');
    }

    const a = newsletter.articles.map((item) => ({
      'title': item.title,
      'body': item.body,
      'imageUrl': item.imageUrl,
      'readMoreLink': item.readMoreLink,
    }));

    const mailOptions = {
      from: process.env.EMAIL,
      subject: newsletter.subject,
      template: 'email',
      context: {
        'title': newsletter.title,
        'body': newsletter.body,
        'ar': a,
        'cover': newsletter.coverImageUrl,
        'BACKEND_URI': 'https://eddy-api.bles-software.com/images'
      },
      // Add Bcc field to hide the list of subscribers from each recipient
      bcc: emailList
    };

    await sendEmail(mailOptions);

    res.send('Email sent successfully!');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error sending email!');
  }
};

exports.sendNewsLetter = async (req, res) => {
  const { interests, age, newsletter } = req.body;
  try {
    const mailOptions = {
      from: 'eddy@eddyabboud.com',
      subject: newsletter.subject,
      template: 'email',
      context: {
        'title': newsletter.title,
        'body': newsletter.body,
        'book': newsletter.books,
        'media': newsletter.medias,
        'articleImage': newsletter.articlesWithImages,
        'articleNoImage': newsletter.articlesWithoutImages,
        'date': new Date().toLocaleDateString(),
      },
      // Add Bcc field to hide the list of subscribers from each recipient
      bcc: []
    };

    const subscribers = await Subscriber.find({
      $or: [
        { interests: { $in: interests } },
        { age: { $gt: age } }
      ]
    }).select('email');

    const emailList = subscribers.map(subscriber => subscriber.email);
    mailOptions.bcc = emailList;

    await sendEmail(mailOptions);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error sending email!');
  }
};
