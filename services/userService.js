require('dotenv').config();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10

const createUserService = async (name, email, password) => {
  try {
    // check if email already exists
    const user = await User.findOne({ email: email });
    if (user) {
      return {
        EC: 1,
        EM: "Email already exists"
      }
    }

    // hash user password 
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // save user to database
    let result = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'admin'
    })
    return result;

  } catch (error) {
    console.log(error);
    return null
  }
}

const loginService = async (email, password) => {
  try {

    // find user by email (fetch)
    const user = await User.findOne({ email: email });
    if (user) {
      // compare password with hashed password
      const isMatchPassword = await bcrypt.compare(password, user.password);
      if (!isMatchPassword) {
        return {
          EC: 2,
          EM: "Login successful"
        }
      } else {
        // create an access token
        const payload = {
          email: user.email,
          name: user.name
        }
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_expire });
        return {
          EC: 0,
          accessToken,
          user: {
            email: user.email,
            name: user.name
          }
        }
      }
    } else {
      return {
        EC: 1,
        EM: "Email/Password is not available"
      }
    }
  } catch (error) {
    console.log(error);
    return null
  }
}

const getUserService = async () => {
  try {
    let result = await User.find({}).select("-password");
    return result;

  } catch (error) {
    console.log(error);
    return null
  }
}

module.exports = { createUserService, loginService, getUserService };
