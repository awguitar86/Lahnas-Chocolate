const express = require('express');
const nodemailer = require('nodemailer');
const orderMailer = express.Router();
let smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config()

orderMailer.post('/ordermailer', (req, res, next) => {
    let { orderNum, cart, first_name, last_name, company, address, city, usState, zip_code, phone, email, paymentType, date, subtotal, tax, total } = req.body;

    let cartItems = cart.map(item => {
        `<div style="display:inline;">
            <p style="margin-right: 10px;">${item.name}</p>
            <p style="margin-right: 10px;">${item.price}</p>
            <p style="margin-right: 10px;">${item.quantity}</p>
            <p>${item.price * item.quantity}</p>
        </div>`
    });

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
        to: `wright2896@gmail.com, ${email}`,
        subject: `Lahna's Chocolates Order`,
        html:`
            <div>Lahna's Chocolates Order #${orderNum}</div>
            <div style="display:inline-block;">
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
            </div>
            <div style="border-top: solid 1px;padding-top:5px;margin-bottom:5px;">${cart.map(item => {
                return `<div>${item.name} -- Price: ${item.price} - Qty: ${item.quantity} - Total: ${item.price * item.quantity}</div>`;
            })}</div>
            <div style="border-top:solid 1px;border-bottom:solid 1px;">
                    <p>Payment Method: ${paymentType}</p>
                    <p>Subtotal: ${subtotal}</p>
                    <p>Sales Tax 6.7%: ${tax}</p>
                    <p>Total: ${total}</p>
            </div>
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



{/* <div> + (item.name) + ' -- Price: ' +  (item.price) + ' - Qty: ' + (item.quantity) + ' - Total: ' + (item.price * item.quantity) + '</div>' */}