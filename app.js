require('dotenv').config()
// initialize modules
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path')
// initialize routes
const apiRoutes = require('./routes/index.js');

const app = express();

// set up body data parsing middleware
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }))

app.use('/', apiRoutes);
app.use(express.static(__dirname + '/public'));

// redirect other requests to the index
// app.get('*', function (req, res) {
  // res.status(404).send('Not found');
    //res.sendFile(path.join(__dirname, 'dist/index.html'));
// })

// setting up the server
const port = process.env.PORT || '3001';
const server = http.createServer(app)

// start the server
server.listen(port);
console.log("Server started on localhost:" + port);
