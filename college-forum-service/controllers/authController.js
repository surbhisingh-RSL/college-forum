const jwt = require('jsonwebtoken');
const { findUserByUsername } = require('../models/userModel');

const loginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log("userpas",user.password)
    console.log("password",password)
    // 🔒 Compare password
    const isMatch = password === user.password;
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });

    }

    // 🎟️ Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, user_type: user.user_type },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginController };
