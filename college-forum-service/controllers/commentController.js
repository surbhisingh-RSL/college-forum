const { createComment, updateComment } = require('../models/commentModel');

// Create a new comment
const createCommentController = async (req, res) => {
  const { post_id, user_id, comment } = req.body;

  if (!post_id || !user_id || !comment) {
    return res.status(400).json({ message: 'post_id, user_id and comment are required' });
  }

  try {
    const commentId = await createComment({ post_id, user_id, comment });
    res.status(201).json({ message: 'Comment added', commentId });
  } catch (err) {
    console.error('Error creating comment:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update comment
const updateCommentController = async (req, res) => {
  const { commentId } = req.params;
  const { comment } = req.body;

  try {
    const rows = await updateComment(commentId, comment);

    if (rows === 0) {
      return res.status(404).json({ message: 'Comment not found or no changes made' });
    }

    res.status(200).json({ message: 'Comment updated successfully' });
  } catch (err) {
    console.error('Error updating comment:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createCommentController,
  updateCommentController
};
