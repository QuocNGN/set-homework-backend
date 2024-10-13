const User = require('../models/userModel');
const bcrypt = require('bcrypt');

async function createUser(userData) {
  const { name, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const createUsers = new User({ name, email, password: hashedPassword });

  const savedUser = await createUsers.save();
  return savedUser;
}

module.exports = { createUser };
