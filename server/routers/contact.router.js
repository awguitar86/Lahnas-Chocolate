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
                XOAuth2: {
                    user: process.env.GMAIL_USER,
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    refreshToken: process.env.GOOGLE_REFRESH_TOKEN
                }
            },
    }));

    let mailOptions = {
        from: `wright2896@gmail.com`,
        to: `wright2896@gmail.com`,
        subject: `${subject}`,
        html:`
            <h4 style="margin:0px;">${firstName} ${lastName}</h4>
            <h4 style="margin:0px;">${company}</h4>
            <h4 style="margin:0px;">${email}</h4>
            <p>${message}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.error(error);
        }
        console.log('Message sent: %s');
        res.send('Message Sent')
    });
})

module.exports = contactMailer;