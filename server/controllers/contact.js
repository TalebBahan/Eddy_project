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
    viewPath: path.resolve('./views'),
    extName: '.handlebars',
};

transporter.use('compile', hbs(handlebarOptions));


exports.sendMessage = (req, res) => {
    const { email, name, phone, message } = req.body;

    const mailOptions = {
        from: email,
        subject: 'Message from the contact on the website',
        template: 'message',
        to:'21014@supnum.mr',
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