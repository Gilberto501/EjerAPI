// CARGUE LA CONEXION DEL GRUPO MySQL
const {request, response } = require('express');
//const { response } = require('express');
//const { Router } = require('express');
const pool = require('../data/config');

//RUTA DE LA APP
const route = app =>{
    //mostrar mensaje de bienvenida de root
    app.get('/', (request,response) => {
        response.send({
            messaage: 'Bienvenido a Node.js Express REST API'
        });
    });

    //mostrar todos los usuarios
    app.get('/usuarios',(request,response) => {
        pool.query('SELECT * FROM usuarios',
        (error,result) => {
            if (error) throw error;

            response.send(result);

        });
    });

    //agregar un nuevo usuario
    app.post('/usuarios', (request, response) => {
        pool.query('INSERT INTO usuarios SET ?',
        request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send('User added with ID: ${result.insertId}');
        });
    });
}
module.exports = route;