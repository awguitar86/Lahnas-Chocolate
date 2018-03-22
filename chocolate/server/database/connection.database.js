const { username, password, name } = require('../config/keys.config');

const dbUsername = username;
const dbPassword = password;
const dbName = name;

const connectionString = 'postgres://qgiwavme:GP0FylLmWNNniBaYDDrTwble88Uiisd5@stampy.db.elephantsql.com:5432/qgiwavme?ssl=true';

module.exports = connectionString;