const express = require ('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
//app.use( 'static', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public'));




app.get('/registro', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'views/registro.html'));
});
app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});
app.get('/frutas', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'views/frutas.html'));
});

app.get('/flexbox', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'views/flexbox.html'));
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});


