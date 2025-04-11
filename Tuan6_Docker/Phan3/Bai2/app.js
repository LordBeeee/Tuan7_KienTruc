const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';

// Kết nối MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Đã kết nối MongoDB'))
.catch((err) => console.error('❌ Lỗi kết nối MongoDB:', err));

// Route test
app.get('/', (req, res) => {
  res.send('Hello from Node.js + MongoDB Docker app!');
});

// Chạy server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
