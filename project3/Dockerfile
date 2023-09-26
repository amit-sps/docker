# Use an official Node.js runtime as the base image
FROM node

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD ["node", "index.js"]
