# ./frontend/Dockerfile.dev
FROM node:20-alpine

# 1. Set workdir
WORKDIR /app

# 2. Install dependencies
COPY package*.json ./
RUN npm ci

# 3. Copy rest of code
COPY . .

# 4. Dev entrypoint (we’ll override in Compose)
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "80"]
