const db = require('../config/db'); 

// Create a new post
const createPost = async ({ user_id, content, image_url }) => {
  const normalizedUserId = user_id || 1;
  const normalizedContent = content ?? ''; 
  const normalizedImageUrl = image_url ?? ''; 
  const [result] = await db.execute(
    'INSERT INTO Posts (user_id, content, image_url) VALUES (?, ?, ?)',
    [normalizedUserId, normalizedContent, normalizedImageUrl]
  );

  return result.insertId;
};


const getAllPosts = async () => {
  // Get all posts with user info and like count
  const [posts] = await db.execute(`
    SELECT p.id, p.content, p.image_url, p.created_at, 
           u.username AS user_name, u.email AS user_email, 
           (SELECT COUNT(*) FROM PostLikes WHERE post_id = p.id) AS likes
    FROM Posts p
    JOIN Users u ON p.user_id = u.id
    ORDER BY p.created_at DESC
  `);
  const [comments] = await db.execute(`
    SELECT c.id, c.post_id, c.comment, c.created_at, 
           u.username AS user_name
    FROM Comments c
    JOIN Users u ON c.user_id = u.id
    ORDER BY c.created_at ASC
  `);

  const postsWithComments = posts.map(post => {
    const postComments = comments.filter(c => c.post_id === post.id);
    return {
      ...post,
      comments: postComments
    };
  });
  console.log("postsWithComments",postsWithComments)

  return postsWithComments;
};

// Like a post
const likePost = async ({ post_id, user_id }) => {
    try {
        await db.execute(
            'INSERT INTO PostLikes (post_id, user_id) VALUES (?, ?)',
            [post_id, 1]
        );
        return { success: true, message: 'Post liked' };
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return { success: false, message: 'Already liked' };
        }
        throw err;
    }
};

const createComment = async (postId, userId, comment = '') => {
  const safePostId = postId ?? 2;    
  const safeUserId = userId ?? 1;    
  const safeComment = comment ?? '';
  const [result] = await db.execute(
    `INSERT INTO Comments (post_id, user_id, comment) VALUES (?, ?, ?)`,
    [safePostId, safeUserId, safeComment]
  );

  return result.insertId;
};


 const getCommentsByPostId = async (postId) => {
  const [rows] = await db.execute(
    "SELECT c.id, c.comment, c.created_at, u.name AS user_name FROM Comments c JOIN Users u ON c.user_id = u.id WHERE c.post_id = ? ORDER BY c.created_at ASC",
    [postId]
  );
  return rows;
};

module.exports = { createPost, getAllPosts, likePost,createComment,getCommentsByPostId };
