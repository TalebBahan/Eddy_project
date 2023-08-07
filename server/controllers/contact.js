const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '21014@supnum.mr',
        pass: 'uoesabbvnepdxmjg'
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


exports.sendMessage = (req, res) => {
    const { email, name, phone, message } = req.body;

    const mailOptions = {
        from: "eddy@eddyabboud.com",
        subject: 'Message from the contact on the website',
        template: 'message',
        to:'eddy@eddyabboud.com',
        context: {
            email,
            name,
            phone,
            message
        }
    };

    transporter
        .sendMail(mailOptions)
        .then((info) => {
            console.log('Email sent: ' + info.response);
            return res.status(200).send('Email sent successfully!');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Error sending email!');
        });
};