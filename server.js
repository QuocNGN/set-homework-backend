require('dotenv').config(); // Đọc biến môi trường từ file .env

const express = require('express');
const connectDB = require('./config/database');
const apiRoutes = require('./routes/api');
const cors = require('cors');


// Khởi tạo ứng dụng Express
const app = express();
const PORT = process.env.PORT || 5000;

// config cors
app.use(cors());

// Middleware để parse dữ liệu JSON
// config req.body 
app.use(express.json());
app.use(express.urlencoded({ extended: true})); // for form data

// Kết nối MongoDB
connectDB();

// Định nghĩa các routes
app.use('/v1/api', apiRoutes);

// Lắng nghe trên cổng 3000
app.listen(PORT, () =>
  console.log(`Server is running on: http://localhost:${PORT}`)
);
