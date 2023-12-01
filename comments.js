// Create web server
// Import module
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Route for get all comments
router.get('/', commentsController.getAllComments);

// Route for get all comments by user
router.get('/user/:id', commentsController.getAllCommentsByUser);

// Route for get all comments by post
router.get('/post/:id', commentsController.getAllCommentsByPost);

// Route for get all comments by comment
router.get('/comment/:id', commentsController.getAllCommentsByComment);

// Route for get one comment by id
router.get('/:id', commentsController.getOneComment);

// Route for create comment
router.post('/', commentsController.createComment);

// Route for update comment
router.put('/:id', commentsController.updateComment);

// Route for delete comment
router.delete('/:id', commentsController.deleteComment);

// Export module
module.exports = router;