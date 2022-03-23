const express = require('express');
const router = express.Router();
const Story = require('../models/models.js')


router.get('/:id', async (req, res) => {

    try {
        console.log(req.params.id)
        const story = await Story.findStoryById(req.params.id)
        res.json(story)
    } catch(err) {
        res.status(404).json({err})
    }
})

router.post('/', async (req, res) => {
    try {
        const story = await Story.create(req.body)
        res.json(story)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router;
