const express = require('express');
const router = express.Router();
const Story = require('../models/models.js')


router.get('/:id', async (req, res) => {
    try {
        const story = await Story.findStoryById(req.params.id)
        res.json(story)
    } catch(err) {
        res.status(404).send("Not found")
    }
})

