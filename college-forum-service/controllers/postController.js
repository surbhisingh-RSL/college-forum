const { createPost, updatePost } = require('../models/postModel');

// Create a new post
const createPostController = async (req, res) => {
  const { user_id, content, image_url } = req.body;

  if (!user_id || !content) {
    return res.status(400).json({ message: 'user_id and content are required' });
  }

  try {
    const postId = await createPost({ user_id, content, image_url });
    res.status(201).json({ message: 'Post created successfully', postId });
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an existing post
const updatePostController = async (req, res) => {
  const { postId } = req.params;
  const { content, image_url } = req.body;

  try {
    const rows = await updatePost(postId, { content, image_url });

    if (rows === 0) {
      return res.status(404).json({ message: 'Post not found or no changes made' });
    }

    res.status(200).json({ message: 'Post updated successfully' });
  } catch (err) {
    console.error('Error updating post:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createPostController,
  updatePostController
};
