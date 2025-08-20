const db = require('../config/db');

async function createUser({ username, password, phoneNumber, email, userType = 'student' }) {
  const sql = `
    INSERT INTO Users (username, password, phone_number, email, user_type)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await db.query(sql, [username, password, phoneNumber, email, userType]);
  return result.insertId;
}

module.exports = { createUser };
