const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());

// for post requests- support parsing of json type post data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//sending index.html to homepage
server.get('/', (req, res) => {
    res.send('hello world')
})

module.exports = app;


module.exports = server

// const express = require('express');
// const cors = require('cors');

// const server = express();
// server.use(cors());
// server.use(express.json());

// server.get('/', (req, res) => res.send('Welcome to the library'))

// module.exports = server
