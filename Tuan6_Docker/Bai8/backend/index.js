const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Kết nối MySQL thất bại:', err);
    return;
  }
  console.log('✅ Kết nối MySQL thành công!');
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js and MySQL!');
});

app.listen(3000, () => {
  console.log('🚀 App chạy ở http://localhost:3000');
});
