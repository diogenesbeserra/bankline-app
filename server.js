// importar express
const express = require('express');

// iniciar express
const app = express();

// nome da pasta no dist que será feito o build
const appName = 'bankline-app-diogenes';

//local que o build ira gerar os arquivos

const outputPath = `${__dirname}/dist/${appName}`;

//seta o diretorio de build para servir o conteudo angular
app.use(express.static(outputPath));

//redirecionar qualquer requisicao opara o index
app.get('/*', (req, res) => { 
    res.sendFile(`${outputPath}/index.html `);
} )

app.listen(process.env.PORT)
