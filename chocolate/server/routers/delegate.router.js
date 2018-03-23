const productsRouter = require('./products.router');

function delegateRoutesFor(app) {
    app.use('/api/products', productsRouter);

    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
    });

    return app;

};

module.exports = delegateRoutesFor;