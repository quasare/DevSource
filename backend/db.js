


const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client({
  // connectionString: DB_URI
  user: 'root',
  host: 'postgres',
  database: 'devsource',
  password: 'postgres',
  port: 5432,
});

client.connect();


module.exports = client;
