Khi bạn thêm dòng `app.use(express.json());` trong ứng dụng Express, điều này giúp Express có thể **phân tích (parse) nội dung JSON** từ các yêu cầu HTTP mà ứng dụng nhận được. Đây là lý do tại sao cần sử dụng middleware này:

### 1. **Dữ liệu từ client được gửi dưới dạng JSON**:

Trong một ứng dụng web, khi client (như Postman, ứng dụng frontend, hay các dịch vụ khác) gửi yêu cầu POST, PUT, PATCH, hoặc DELETE, dữ liệu thường được gửi kèm theo yêu cầu trong phần `body` của HTTP request. Dữ liệu này thường ở định dạng JSON khi bạn làm việc với các API hiện đại.

Ví dụ:

```json
{
  "roll_no": 1002,
  "name": "John Doe",
  "year": 3,
  "subjects": ["Math", "Science"]
}
```

### 2. **Express cần biết cách đọc JSON từ `body`**:

Khi client gửi dữ liệu ở định dạng JSON, Express mặc định không thể tự động hiểu và đọc được nó. Dữ liệu trong `body` sẽ được nhận dưới dạng một chuỗi raw (chuỗi thô), và nếu bạn muốn truy cập vào dữ liệu JSON này dưới dạng đối tượng JavaScript, bạn cần phải phân tích nó trước.

Trước đây, khi không có middleware `express.json()`, bạn sẽ nhận được dữ liệu `req.body` dưới dạng `undefined` hoặc không thể truy cập các trường dữ liệu.

### 3. **Middleware `express.json()` giải quyết việc này**:

Middleware `express.json()` phân tích (parse) các dữ liệu JSON trong yêu cầu HTTP trước khi chúng đến được các route và controller của bạn. Nó chuyển đổi dữ liệu JSON trong `body` thành một đối tượng JavaScript, giúp bạn có thể dễ dàng truy cập và sử dụng các thuộc tính của đối tượng đó trong mã nguồn.

Sau khi thêm `app.use(express.json());`, bạn có thể dễ dàng truy cập dữ liệu JSON trong request như sau:

```js
app.post('/api/students', (req, res) => {
  const studentData = req.body; // req.body giờ đây là một đối tượng JavaScript
  console.log(studentData); // Sẽ in ra { roll_no: 1002, name: 'John Doe', year: 3, subjects: [...] }
});
```

### 4. **Tóm tắt quá trình hoạt động**:

- Client gửi một yêu cầu với dữ liệu JSON (vd: từ Postman hoặc một ứng dụng).
- Middleware `express.json()` sẽ phân tích dữ liệu trong `body` của yêu cầu đó.
- Express sẽ biến dữ liệu JSON này thành một đối tượng JavaScript.
- Bạn có thể dễ dàng truy cập các trường trong đối tượng JSON từ `req.body`.

### Lợi ích của việc dùng `express.json()`:

- Giúp ứng dụng hiểu và xử lý dữ liệu JSON từ client.
- Đơn giản hoá quá trình truy cập dữ liệu từ `body` của yêu cầu.
- Tương thích với các API hiện đại sử dụng JSON làm định dạng dữ liệu chính.

Đó là lý do tại sao `app.use(express.json());` là cần thiết khi bạn làm việc với các API và xử lý dữ liệu JSON.
