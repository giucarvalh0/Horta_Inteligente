
const express = require('express');
const path = require('path');
//const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/HortaInteligente`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/HortaInteligente/index.html`));
});

app.listen(process.env.PORT || 8080);

/*
const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/HortaInteligente'));



app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/HortaInteligente/index.html'));
});

const server = http.createServer(app);
server.listen(process.env.PORT || 8080);

console.log('Console listening!');
*/