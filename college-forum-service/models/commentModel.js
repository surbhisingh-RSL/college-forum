const db = require('../config/db');

// Create a comment
async function createComment({ post_id, user_id, comment }) {
  const sql = `
    INSERT INTO Comments (post_id, user_id, comment)
    VALUES (?, ?, ?)
  `;
  const [result] = await db.query(sql, [post_id, user_id, comment]);
  return result.insertId;
}

// Update a comment
async function updateComment(commentId, newComment) {
  const sql = `
    UPDATE Comments
    SET comment = ?
    WHERE id = ?
  `;
  const [result] = await db.query(sql, [newComment, commentId]);
  return result.affectedRows;
}

module.exports = { createComment, updateComment };
