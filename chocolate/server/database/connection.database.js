const { username, password, name } = require('../config/keys.config');

const dbUsername = username;
const dbPassword = password;
const dbName = name;

const connectionString = 'postgres://xjqmvnft:C7pRUY95znwTfA5n9sS_5SO-0u7fnPzG@stampy.db.elephantsql.com:5432/xjqmvnft';

module.exports = connectionString;