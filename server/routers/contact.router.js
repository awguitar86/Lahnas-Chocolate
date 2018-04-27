const express = require('express');
const nodemailer = require('nodemailer');
const contactMailer = express.Router();
let smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config()

contactMailer.post('/contact', (req, res, next) => {
    let { firstName, lastName, company, email, subject, message } = req.body;
    let transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                    type: XOAuth2,
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            },
    }));

    // let mailOptions = {
    //     from: `${email}`,
    //     to: `wright2896@gmail.com`,
    //     subject: `${subject}`,
    //     html:`
    //         <h4 style="margin:0px;">${firstName} ${lastName}</h4>
    //         <h4 style="margin:0px;">${company}</h4>
    //         <h4 style="margin:0px;">${email}</h4>
    //         <p>${message}</p>
    //     `,
    //     auth: {
    //         user: process.env.GMAIL_USER,
    //         refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    //         accessToken: process.env.GOOGLE_ACCESS_TOKEN,
    //         expires: 3599
    //     }
    // };

    transporter.sendMail({
        from: `${email}`,
        to: `wright2896@gmail.com`,
        subject: `${subject}`,
        html:`
            <h4 style="margin:0px;">${firstName} ${lastName}</h4>
            <h4 style="margin:0px;">${company}</h4>
            <h4 style="margin:0px;">${email}</h4>
            <p>${message}</p>
        `,
        auth: {
            user: process.env.GMAIL_USER,
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
            accessToken: process.env.GOOGLE_ACCESS_TOKEN,
            expires: 3599
        }
    });
})

module.exports = contactMailer;




// (mailOptions, (error, info) => {
//     if(error) {
//         console.error(error);
//     }
//     console.log('Message sent: %s');
//     res.send('Message Sent')
// })