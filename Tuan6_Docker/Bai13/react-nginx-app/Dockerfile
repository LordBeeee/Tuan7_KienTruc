# Base image là Nginx
FROM nginx:alpine

# Xoá nội dung mặc định
RUN rm -rf /usr/share/nginx/html/*

# Copy thư mục build vào nơi Nginx serve static
COPY build/ /usr/share/nginx/html

# Copy file cấu hình nginx nếu cần
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
