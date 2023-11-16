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

    // ============================================================= TABLA PRODUCTOS ==========================================================================
    

    // Mostrar todos los usuarios
    app.get('/productos', (request, response) => {
        pool.query('SELECT * FROM productos',
            (error, result) => {
                if (error) throw error;

                response.send(result);
            });
    });


    // Mostrar un solo usuario
    app.get('/productos/:id', (request, response) => {

        const id = request.params.id;

        pool.query('SELECT * FROM productos WHERE idProductos = ?', id,
            (error, result) => {

                if (error) throw error;
                response.send(result);
            });

    });

    //Agregar un nuevo usuario
    app.post('/productos', (request, response) => {
        pool.query('INSERT INTO productos SET ?',
            request.body, (error, result) => {
                if (error) throw error;

                response.status(201).send(`User added with id: ${result.insertId}`);
            });
    });


    // Actualizar un usuario exitente
    app.put('/productos/:id', (request, response) => {

        const id = request.params.id;

        pool.query('UPDATE productos SET ? WHERE idProductos = ?', [request.body, id], (error, result) => {

            if (error) throw error;
            response.send('User update successfully.')

        });

    });

    // Eliminar un usuario
    app.delete('/productos/:id', (request, response) => {

        const id = request.params.id;
        pool.query('DELETE FROM productos WHERE idProductos = ?', id, (error, result) => {

            if (error) throw error;
            response.send('User deleted');
        });

    });

    // ============================================================= TABLA VENTAS ==========================================================================
    

    // Mostrar todos los usuarios
    app.get('/ventas', (request, response) => {
        pool.query('SELECT * FROM ventas',
            (error, result) => {
                if (error) throw error;

                response.send(result);
            });
    });


    // Mostrar un solo usuario
    app.get('/ventas/:id', (request, response) => {

        const id = request.params.id;

        pool.query('SELECT * FROM ventas WHERE idventas = ?', id,
            (error, result) => {

                if (error) throw error;
                response.send(result);
            });

    });

    //Agregar un nuevo usuario
    app.post('/ventas', (request, response) => {
        pool.query('INSERT INTO ventas SET ?',
            request.body, (error, result) => {
                if (error) throw error;

                response.status(201).send(`User added with ID: ${result.insertId}`);
            });
    });


    // Actualizar un usuario exitente
    app.put('/ventas/:id', (request, response) => {

        const id = request.params.id;

        pool.query('UPDATE ventas SET ? WHERE idventas = ?', 
        [request.body, id], (error, result) => {

            if (error) throw error;
            response.send('User update successfully.')

        });

    });

    // Eliminar un usuario
    app.delete('/ventas/:id', (request, response) => {

        const id = request.params.id;
        pool.query('DELETE FROM ventas WHERE idventas = ?', id, (error, result) => {

            if (error) throw error;
            response.send('User deleted');
        });

    });


}
module.exports = route;