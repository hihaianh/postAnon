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
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

module.exports = app;


