const bodyParser = require('body-parser');

function decorate(app){

    app.use(bodyParser.json());

    return app;
}

function checkForSession(req, res, next) {

    }

module.exports = decorate, checkForSession;
