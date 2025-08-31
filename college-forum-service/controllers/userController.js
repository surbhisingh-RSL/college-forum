const { createUser } = require('../models/userModel');

const registerUser = async (req, res) => {
  console.log("📩 Register API hit:", req.body);
  const { username, password, phoneNumber, email, userType } = req.body;

  if (!username || !password || !phoneNumber || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const userId = await createUser({ username, password, phoneNumber, email, userType });
    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { registerUser };
