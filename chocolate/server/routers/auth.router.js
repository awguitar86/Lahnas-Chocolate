const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0')

const authRouter = express.Router();

// authRouter.get('/login', passport.authenticate('auth0', {
//     successRedirect: "http://localhost:3001/dashboard",
//     failureRedirect: "/"
// }));

// authRouter.get('/check', (req, res) => {
//     console.log('checking for logged in user')
//     //check if user has logged in
//     if (req.session.passport) {
//         console.log(req.user.email);
//         res.status(200).send(req.session.passport.user)
//     } else res.status(401).send('unauthorized')
// });

authRouter.get('/logout', (req, res) => {
    console.log('logging out');
    req.session.destroy(() => { res.send(200) });
});



module.exports = {
    authRouter,
    checkLoggedIn: function (req, res) {
        console.log('checking for logged in user')
        //check if user has logged in
        if (req.session.passport) {
            console.log(req.user.email);
            res.status(200).send(req.session.passport.user)
        } else res.status(401).send('unauthorized')
    }

};