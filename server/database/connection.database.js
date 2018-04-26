const { username, password, name } = require('../config/keys.config');

const dbUsername = username;
const dbPassword = password;
const dbName = name;

const connectionString = 'postgres://vommjuqiznlzrw:37cde91f59d97d5ff217e318a15fc9df6d9e300ebcb3902505c652469707b3c8@ec2-174-129-41-64.compute-1.amazonaws.com:5432/d1o4pa24t4lea0?ssl=true';

module.exports = connectionString;