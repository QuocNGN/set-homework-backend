```
project-root/
│
├── server.js # Tệp chính khởi động server Express
├── package.json # Quản lý dependencies và scripts
├── config/
│ └── db.js # Cấu hình kết nối MongoDB
│
├── controllers/ # Xử lý logic nghiệp vụ
│ └── userController.js # Controller cho đối tượng user
│
├── models/ # Định nghĩa các schema của MongoDB
│ └── userModel.js # Schema cho user
│
├── routes/ # Định nghĩa các routes API
│ └── userRoutes.js # Routes cho đối tượng user
│
├── middlewares/ # Middleware (như auth, error handling)
│ └── authMiddleware.js # Middleware xác thực
│
├── services/ # Các logic phụ trợ hoặc dịch vụ
│ └── userService.js # Xử lý các logic liên quan đến user
│
├── utils/ # Các hàm tiện ích chung cho dự án
│ └── helper.js # Hàm trợ giúp hoặc các hằng số
│
└── logs/ # Lưu trữ file logs (nếu cần)
└── app.log # File logs cho ứng dụng
```

## Mô tả:<br>
`server.js`: Tệp khởi động server Express và kết nối với MongoDB. <br>
`config/db.js`: Cấu hình kết nối cơ sở dữ liệu MongoDB.<br>
`controllers/`: Nơi lưu các hàm xử lý yêu cầu, logic nghiệp vụ.<br>
`models/`: Định nghĩa các schema của MongoDB bằng Mongoose.<br>
`routes/`: Định nghĩa các API endpoints cho ứng dụng.<br>
`middlewares/`: Middleware xử lý các yêu cầu trước khi vào controller (auth, error handling).<br>
`services/`: Các chức năng, dịch vụ tách rời khỏi controller, dễ dàng tái sử dụng.<br>
`utils/`: Các hàm tiện ích (helpers) như kiểm tra dữ liệu hoặc định dạng.
