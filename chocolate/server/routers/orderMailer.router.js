const express = require('express');
const nodemailer = require('nodemailer');
const orderMailer = express.Router();
let smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config()

orderMailer.post('/ordermailer', (req, res, next) => {
    let { first_name, last_name, company, address, city, usState, zip_code, phone, email, paymentType, date, subtotal, tax, total, productName, productPrice, productQty, productTotal } = req.body;
    let transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            },
    }));

    let mailOptions = {
        from: `Lahna's Chocolates`,
        to: `wright2896@gmail.com`,
        subject: `Lahna's Chocolates Order`,
        html:`
           <div>Lahna's Chocolates Order#</div>
           <span>
                <div style="margin-right:20px;">
                    <p>${first_name} ${last_name}</p>
                    <p>${company}</p>
                    <p>${address}</p>
                    <p>${city}, ${usState} ${zip_code}</p>
                </div>
                <div>
                    <p>${phone}</p>
                    <p>${email}</p>
                    <p>${date}</p>
                    <p>Shipping Method: Delivery</p>
                </div>
           </span>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.error(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.send('Message Sent')
    });
})

module.exports = orderMailer;