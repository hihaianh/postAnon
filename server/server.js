const express = require('express');
const cors = require('cors');
const server = express();
const path = require('path');
server.use(cors());
server.use(express.json());

// for post requests- support parsing of json type post data
const bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//sending index.html to homepage
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


module.exports = server

// const express = require('express');
// const cors = require('cors');

// const server = express();
// server.use(cors());
// server.use(express.json());

// server.get('/', (req, res) => res.send('Welcome to the library'))

// module.exports = server
