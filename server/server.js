const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors('*'));
app.use(express.json());

// for post requests- support parsing of json type post data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storyRoutes = require('./controllers/controllers')
app.use('/', storyRoutes)

//sending index.html to homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

module.exports = app;
