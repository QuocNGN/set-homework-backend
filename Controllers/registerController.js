const userService = require('../services/register');

async function createUser(req, res) {
  try {
    console.log('User Data:', req.body); // Ghi log dữ liệu người dùng
    const userData = req.body; // Đảm bảo rằng bạn nhận đúng dữ liệu từ body
    const user = await userService.createUser(userData);
    res.status(201).json({ user: user, message: 'User created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createUser };
