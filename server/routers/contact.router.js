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
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            },
    }));

    let mailOptions = {
        from: `${email}`,
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