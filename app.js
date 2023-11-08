var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('mi primera api');

});
app.get('/saludo', function(req, res){
    res.send('Hola mundo');

});
app.get('/despedida', function(req, res){
    res.send('adios mundo cruel');

});
app.get('/despedida/familia', function(req, res){
    res.send('los quiero mucho a todos');

});
app.get('/despedida/empleados', function(req, res){
    res.send('ojala se rompan una pierna');

});
app.listen(3000, function(){
    console.log('Aplicacion ejemplo, escuchando el puerto 3000')
})