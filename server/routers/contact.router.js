const express = require('express');
const nodemailer = require('nodemailer');
const XOAuth2 = require('xoauth2');
const contactMailer = express.Router();
let smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config()

contactMailer.post('/contact', (req, res) => {
    let { firstName, lastName, company, email, subject, message } = req.body;
    let transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                    XOAuth2: XOAuth2.createXOAuth2Generator({
                        user: 'wright2896@gmail.com',
                        clientId: '3205787395-42quhdu1biuc12glq3gjoab418li7joh.apps.googleusercontent.com',
                        clientSecret: 'bGMrsk6-4tbTTPp_Juv00gTm',
                        refreshToken: '1/kPpCygyu_bb7a5owM0n9rOuEZ_sIv-ysapPla7qn4whcjerR4NwRvUQYZO15MfQW',
                    })
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

    transporter.sendMail(mailOptions, (err, res) => {
        if(err) {
            console.log('Error');
        } else {
            console.log('Email Sent');
        }
    });
})

module.exports = contactMailer;