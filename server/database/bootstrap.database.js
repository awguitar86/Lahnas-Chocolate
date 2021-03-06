const massive = require('massive');
const connectionString = require('./connection.database');

let db;
let messageString;

massive(connectionString)
    .then( dbInstance => {
        db = dbInstance;
        messageString = 'Connection to the database was successful.'
        // return db.chocolate_init();
    })
    .catch ( err => {
        throw err
    });

    function getDb(){
        if(!db) {
            messageString = 'We have not connected to the database yet.';
            console.error(messageString);
            return messageString;
        }
        else {
            return db;
        }
    }

module.exports = getDb;

// {
//     host: 'localhost',
//     port: 5432,
//     database: 'Chocolate',
//     user: 'postgres',
//     password: ''
// }