const express = require('express');
const getDb = require('../database/bootstrap.database');

const ordersRouter = express.Router();

ordersRouter.get('/get/:id/user/:userid', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const userid = req.params.userid;
    db.get_order( [id] )
        .then( order => res.status(200).send(order) )
        .catch( err => res.status(500).send(err) )
});

ordersRouter.post('/new', (req, res) => {
     const db = getDb();
     const { user_id, product_id, order_number, order_date, quantity, price, sales_tax, total, payment_type } = req.body;
     db.create_order([user_id, product_id, order_number, order_date, quantity, price, sales_tax, total, payment_type])
        .then( () => res.status(200).send() )
        .catch( err => res.send(err) )
});

ordersRouter.put('/update/:id/user/:userid', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const userid = req.params.userid;
    const { product_id, order_number, order_date, quantity, price, sales_tax, total, payment_type } = req.body;
    db.update_order( [id, userid, product_id, order_number, order_date, quantity, price, sales_tax, total, payment_type] )
        .then( promise => res.status(200).send(promise) )
        .catch( err => res.send(err) )
});

ordersRouter.delete('/delete/:id/user/:userid', (req, res) => {
    const id = req.params.id;
    const userid = req.params.userid;
    const db =getDb();
    db.delete_order([ id, userid ])
        .then( () => res.status(200).send() )
        .catch( err => res.send(err) )
});

module.exports = ordersRouter;

