const express = require('express');
const getDb = require('../database/bootstrap.database');

const ordersRouter = express.Router();

// get all orders
ordersRouter.get('/:userid', (req, res) => { //get orders based on userid
    const db = getDb();
    const userid = req.params.userid;
    console.log(userid);
    db.get_orders([ userid ])
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err))
});

// get one order
ordersRouter.get('/get/:id', (req, res) => { //get order based on id
    const db = getDb();
    const id = req.params.id;
    console.log(id);
    db.get_order([ id ])
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err))
});

// get sum of total price
ordersRouter.get('/total/:orderid', (req, res) => {
    const orderid = req.params.orderid;
    const db = getDb();
    db.get_sum_of_order_items([ orderid ])
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err))
});

// get order items
ordersRouter.get('/:userid/:orderid', (req, res) => { //get order based on userid and order id
    const db = getDb();
    const orderid = req.params.orderid;
    db.get_order_items([ orderid ])
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err))
});




ordersRouter.post('/:userid/new', (req, res) => {
    const db = getDb();
    const userid = req.params.userid;
    const { user_id, order_date, order_price, payment_type } = req.body;
    db.create_order([user_id, order_date, order_price, payment_type])
        .then( () => res.status(200).send() )
        .catch( err => res.send(err) );
    // db.create_order_item([user_id, order_id, product_id, quantity, price, sales_tax, total, payment_type])
    //     .then( () => res.status(200).send() )
    //     .catch( err => res.send(err) );
});

ordersRouter.put('/update/:id/:userid', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const userid = req.params.userid;
    const { user_id, order_date, order_price, payment_type } = req.body;
    db.update_order([ id, user_id, order_date, order_price, payment_type ])
        .then( promise => res.status(200).send(promise) )
        .catch( err => res.send(err) )
});

ordersRouter.delete('/delete/:id/:userid', (req, res) => {
    const id = req.params.id;
    const userid = req.params.userid;
    const db =getDb();
    db.delete_order([ id, userid ])
        .then( () => res.status(200).send() )
        .catch( err => res.send(err) )
});

module.exports = ordersRouter;

