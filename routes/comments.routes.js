const express = require('express');
const Comment = require('../models/comment')

const router = express.Router();
  
 
router.get('/', async (req, res) => {
  const allComment = await Comment.find();
  try {
    res.status(200).json(allComment)
  } catch(err) {
    console.log(`Error: ${err}`)
  }
})

router.post('/add', async (req, res) => {
  try {
    const {about, comment}  = req.body;
    const newComment = new Comment({about, comment})
    await newComment.save()
    res.status(200).json('new comment added')
  } catch(err) {
    res.status(400).json(err.message)
  }
})



module.exports = router;
