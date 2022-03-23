const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors('*'));
app.use(express.json());


const storyRoutes = require('./controllers/controllers')
app.use('/', storyRoutes)


app.get('/', (req, res) => {
    res.send('hello world')
})

module.exports = app;
