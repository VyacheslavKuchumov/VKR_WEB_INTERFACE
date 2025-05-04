
# Stage 1: build the Vue app
FROM node:23-slim AS build

# accept build‑time ARG
ARG VUE_APP_SERVER
ENV VUE_APP_SERVER=$VUE_APP_SERVER


WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Optional: copy your custom nginx.conf
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
