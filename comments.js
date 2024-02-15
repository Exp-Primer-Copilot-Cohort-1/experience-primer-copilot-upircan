// Create web server for comment with controller

const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

router.get('/', commentsController.getComments);
router.post('/', commentsController.createComment);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);

module.exports = router;

