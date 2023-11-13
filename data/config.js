const mysql = require ('mysql');

// Set database connection credentialas

const config = {
    host:'localhost',
    user:'root',
    passqord: 'root',
    database:'api',
}

//create a MyAQL
const pool = mysql.createPool(config);

//Export