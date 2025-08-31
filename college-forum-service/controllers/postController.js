const { createPost, getAllPosts, likePost , createComment} = require('../models/postModel');


const createPostController = async (req, res) => {
  try {
    const { content } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : "";


    const postId = await createPost({ user_id:1, content, image_url });
    res.status(201).json({ message: "Post created successfully", postId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Get all posts
const getPostsController = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Like a post
const likePostController = async (req, res) => {
    try {
        const post_id = req.body.postId;
        const user_id=2

        if (!post_id ) {
          console.log("post_id",post_id)
            return res.status(400).json({ message: 'post_id and user_id are required' });
        }

        const result = await likePost({ post_id, user_id });
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const addCommentController = async (req, res) => {
  try {
    const { postId } = req.params; // from URL
    const { userId, text } = req.body; // from frontend
    
    if (!text?.trim()) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const commentId = await createComment(postId, userId, text);
    res.status(201).json({ message: "Comment added", commentId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createPostController, getPostsController, likePostController, addCommentController  };
