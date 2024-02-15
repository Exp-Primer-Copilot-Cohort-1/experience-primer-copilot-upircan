// Create web server for comment

// Import module
const express = require('express');
const router = express. Router();
const commentController = require(' .. /controllers/commentcontroller');

// Handle request
router.get('/', commentController.comment_list);
router.get('/create', commentController.comnent_create_get);
router.post('/create', commentController.comment_create_POST);
router.get('/:id/delete', commentController. comnent_delete);

// Export module
module.exports = router;