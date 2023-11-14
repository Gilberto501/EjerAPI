const express = require('express');
const port =  3002; //establecemos como constante un puerto

//para permitir el manejo de POST y  PUT
const bodyParser = require('body-parser');
const route = require('./routes/routes');
const app=express();

//usae Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

route(app);

//iniciar servidor 
const server = app.listen(port,(error)=> {
    if(error) return console.log(`Error: ${error}`);

    console.log(`El servidor escucha en el puerto ${server.address().port}`)
});