const db = require('../config/db');

// Like a post (create)
async function likePost({ post_id, user_id }) {
  const sql = `
    INSERT IGNORE INTO PostLikes (post_id, user_id)
    VALUES (?, ?)
  `;
  const [result] = await db.query(sql, [post_id, user_id]);
  return result.insertId;
}

// Unlike a post (delete)
async function unlikePost({ post_id, user_id }) {
  const sql = `
    DELETE FROM PostLikes
    WHERE post_id = ? AND user_id = ?
  `;
  const [result] = await db.query(sql, [post_id, user_id]);
  return result.affectedRows;
}

// Get number of likes for a post
async function getPostLikeCount(post_id) {
  const sql = `
    SELECT COUNT(*) AS like_count
    FROM PostLikes
    WHERE post_id = ?
  `;
  const [rows] = await db.query(sql, [post_id]);
  return rows[0].like_count;
}

module.exports = {
  likePost,
  unlikePost,
  getPostLikeCount
};

