const nodemailer = require('nodemailer');
const XOAuth2 = require('xoauth2');

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        XOAuth2: XOAuth2.createXOAuth2Generator({
            user: 'wright2896@gmail.com',
            clientId: '3205787395-n56krn2uhn8arj3t6nhfq6oi3jdia48h.apps.googleusercontent.com',
            clientSecret: 'Er8ETc5OqnbNzH6NJGaH1NDF',
            refreshToken: '1/RW3joR2VZxChKBFREyAE05MpivdTcpTrdbefVChB2fY'
        })
    }
})

let mailOptions = {
    from: 'Austin <wright2896@gmail.com>',
    to: 'awguitar86@gmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World'
}

transporter.sendMail(mailOptions, (err, res) => {
    if(err) {
        console.log('Error');
    } else {
        console.log('Email Sent');
    }
})