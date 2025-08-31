const express = require('express');
const { createPostController, getPostsController, likePostController, addCommentController } = require('../controllers/postController');
const upload = require("../middlewares/upload");
const router = express.Router();

router.post("/create", upload.single("image"), createPostController);  // Create a post
router.get('/', getPostsController);      // Get all posts
router.post('/like', likePostController);
router.post('/comment', addCommentController);
 // Like a post

module.exports = router;
