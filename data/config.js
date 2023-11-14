const mysql = require ('mysql');

// Set database connection credentialas

const config = {
    host:'localhost',
    user:'Gilberto',
    password: 'qwerty1',
    database:'api',
}

//create a MyAQL
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;