FROM node:18

WORKDIR /app

# Copy file package trước để cài module
COPY app/package*.json ./
RUN npm install

# Copy mã nguồn sau (đừng copy sớm quá)
COPY app .

EXPOSE 3000
CMD ["npm", "start"]
