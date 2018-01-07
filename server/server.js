// dependecies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// API routes
const api = require('./routes/api');

const app = express();

// parser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// set API routes
app.use('/api', api);

// return index file for all other toutes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

// get PORT from environment and store in express
const port = process.env.port || '3000';
app.set('port', port);

// create HTTP SERVER
const server = http.createServer(app);

// listen on provided port, on all network interfaces
server.listen(port, () => console.log('API running on localhost: ', port));