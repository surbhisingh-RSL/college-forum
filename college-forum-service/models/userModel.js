const db = require('../config/db');

async function createUser({ username, password, phoneNumber, email, userType = 'student' }) {
  const sql = `
    INSERT INTO Users (username, password, phone_number, email, user_type)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await db.query(sql, [username, password, phoneNumber, email, userType]);
  return result.insertId;
}
const findUserByUsername = async (username) => {
  const sql = `SELECT * FROM Users WHERE username = ?`;
  const result = await db.query(sql, [username]);
  console.log(result[0])
  return result[0][0]
};

module.exports = { createUser,findUserByUsername };
