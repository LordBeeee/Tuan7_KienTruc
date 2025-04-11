# Dùng image Node chính thức
FROM node:18

# Tạo thư mục app trong container
WORKDIR /usr/src/app

# Cài dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ project vào container
COPY . .

# Expose cổng 3000
EXPOSE 3000

# Chạy app
CMD ["node", "app.js"]
