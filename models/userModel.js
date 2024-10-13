const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // unique để tránh trùng email
  password: { type: String, required: true } // Đảm bảo rằng trường password được định nghĩa
});

const User = mongoose.model('User', userSchema);

module.exports = User;
