// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');
const commentValidator = require('../middleware/validator/commentValidator');

// Create comment
router.post('/create', auth, commentValidator.validateCreateComment, commentController.createComment);

// Update comment
router.put('/update', auth, commentValidator.validateUpdateComment, commentController.updateComment);

// Delete comment
router.delete('/delete', auth, commentValidator.validateDeleteComment, commentController.deleteComment);

// Get comment by id
router.get('/get-by-id', auth, commentValidator.validateGetCommentById, commentController.getCommentById);

// Get all comment
router.get('/get-all', auth, commentValidator.validateGetAllComment, commentController.getAllComment);

// Get comment by post id
router.get('/get-by-post-id', auth, commentValidator.validateGetCommentByPostId, commentController.getCommentByPostId);

// Get comment by user id
router.get('/get-by-user-id', auth, commentValidator.validateGetCommentByUserId, commentController.getCommentByUserId);

module.exports = router;