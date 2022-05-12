// importar express
const express = require('express');
const path = require('path');
// iniciar express
const app = express();

const PORT = process.env.PORT || 8080;

// nome da pasta no dist que será feito o build
const appName = 'bankline-app';

app.use(express.static(__dirname + '/dist/bankline-app'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/bankline-app/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
})
