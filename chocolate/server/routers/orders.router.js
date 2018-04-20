const express = require('express');
const getDb = require('../database/bootstrap.database');

const ordersRouter = express.Router();

// get all orders
ordersRouter.get('/:email', (req, res) => { //get orders based on userid
    const db = getDb();
    const email = req.params.email;
    console.log(email);
    db.get_orders([ email ])
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

// get order items
ordersRouter.get('/items/:orderid', (req, res) => { //get order based on order id
    const db = getDb();
    const order_id = req.params.orderid;
    db.get_order_items([ order_id ])
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err))
});


ordersRouter.post('/new', (req, res) => {
    const db = getDb();
    const { email, order_date, order_price, payment_type } = req.body;
    db.create_order([email, order_date, order_price, payment_type])
        .then( () => res.status(200).send() )
        .catch( err => res.send(err) );
    // db.create_order_item([user_id, order_id, product_id, quantity, price, sales_tax, total, payment_type])
    //     .then( () => res.status(200).send() )
    //     .catch( err => res.send(err) );
});

ordersRouter.put('/update/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const { email, order_date, order_price, payment_type } = req.body;
    db.update_order([ id, email, order_date, order_price, payment_type ])
        .then( promise => res.status(200).send(promise) )
        .catch( err => res.send(err) )
});

ordersRouter.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const db =getDb();
    db.delete_order([ id ])
        .then( () => res.status(200).send() )
        .catch( err => res.send(err) )
});

module.exports = ordersRouter;


// // get sum of total price
// ordersRouter.get('/total/:orderid', (req, res) => {
//     const orderid = req.params.orderid;
//     const db = getDb();
//     db.get_sum_of_order_items([ orderid ])
//         .then(response => res.status(200).send(response))
//         .catch(err => console.log(err))
// });