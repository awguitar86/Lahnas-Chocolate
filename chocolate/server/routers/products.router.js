const express = require('express');
const getDb = require('../database/bootstrap.database');

const productsRouter = express.Router();

productsRouter.get('/get', (req, res) => {
    const db = getDb();
    db.get_product()
        .then( product => res.send(product))
        .catch( err => res.send(err))
});

productsRouter.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, price } = req.body;
    const db = getDb();
    db.update_product([id, name, description, price])
        .then( promise => res.send(promise))
        .catch( err => res.send(err))
});

productsRouter.post('/create/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    const { name, description, price } = req.body;
    db.create([id, name, description, price])
        .then( () => res.status(200).send())
        .catch( err => res.send(err))
});

productsRouter.delete('/delete/:id', (req, res) => {
    const db = getDb();
    db.delete_product(req.params.id)
        .then( () => res.status(200).send())
        .catch( err => res.send(err))
});

module.exports = productsRouter;