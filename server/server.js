const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());

const storyRoutes = require('./controllers/controllers')
app.use('/', storyRoutes)

//sending index.html to homepage
app.get('/', (req, res) => {
    res.send('Hello World')
})


module.exports = app;

