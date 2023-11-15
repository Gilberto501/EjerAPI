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
    //todo Mostrar un solo usuario por ID
    app.get('/usuarios/:id', (request, response) => {
        const id = request.params.id;
    
    pool.query('SELECT * FROM usuarios WHERE id = ?', 
    id, (error, result) => {
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

    // Actualizar un usuario exitente
    app.put('/usuarios/:id', (request, response) => {

        const id = request.params.id;

        pool.query('UPDATE usuarios SET ? WHERE id = ?', [request.body, id], (error, result) => {

            if (error) throw error;
            response.send('User update successfully.')

        });

    });

    

    // Eliminar un usuario
    app.delete('/usuarios/:id', (request, response) => {

        const id = request.params.id;
        pool.query('DELETE FROM usuarios WHERE id = ?', id, (error, result) => {

            if (error) throw error;
            response.send('User deleted');
        });

    });

}
module.exports = route;