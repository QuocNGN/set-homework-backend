require('dotenv').config(); // Đọc biến môi trường từ file .env

const express = require('express');
const connectDB = require('./config/database');
const registerRoute = require('./routes/registerRoute');
const cors = require('cors');


// Khởi tạo ứng dụng Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware để parse dữ liệu JSON
app.use(express.json());
app.use(cors());

// Kết nối MongoDB
connectDB();

// Định nghĩa các routes
app.use('/user', registerRoute);

// Lắng nghe trên cổng 3000
app.listen(PORT, () =>
  console.log(`Server is running on: http://localhost:${PORT}`)
);
