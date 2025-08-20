const db = require('../config/db');

// Create a new post
async function createPost({ user_id, content, image_url = null }) {
  const sql = `
    INSERT INTO Posts (user_id, content, image_url)
    VALUES (?, ?, ?)
  `;
  const [result] = await db.query(sql, [user_id, content, image_url]);
  return result.insertId;
}

// Update a post
async function updatePost(postId, { content, image_url }) {
  const sql = `
    UPDATE Posts
    SET content = ?, image_url = ?
    WHERE id = ?
  `;
  const [result] = await db.query(sql, [content, image_url, postId]);
  return result.affectedRows;
}

module.exports = { createPost, updatePost };
