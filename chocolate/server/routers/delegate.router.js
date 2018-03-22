const express = require('express');

function delegateRoutesFor(app) {

    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
    });

    return app;

};

module.exports = delegateRoutesFor;