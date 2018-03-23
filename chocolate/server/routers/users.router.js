const express = require('express');
const getDb = require('../database/bootstrap.database');

const usersRouter = express.Router();

usersRouter.get('/get/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.get_user( [id] )
        .then( user => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});

usersRouter.post('/new', (req, res) => {
    const db = getDb();
    // const id = req.params.id;
    const { first_name, last_name, company, address, city, state, zip_code, phone, email, password } = req.body;
    db.create_user([first_name, last_name, company, address, city, state, zip_code, phone, email, password])
        .then( () => res.status(200).send())
        .catch( err => res.send(err))
});

usersRouter.put('/update/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const { first_name, last_name, company, address, city, state, zip_code, phone, email, password } = req.body;
    db.update_user([id, first_name, last_name, company, address, city, state, zip_code, phone, email, password])
        .then( promise => res.status(200).send(promis))
        .catch( err => res.send(err) )
});

usersRouter.delete('/delete/:id', (req, res) => {
    const db = getDb();
    db.delete_user(req.params.id)
        .then( () => res.status(200).send() )
        .catch( err => res.send(err) )
});

module.exports = usersRouter;