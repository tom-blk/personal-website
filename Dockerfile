FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY public /app/public

COPY next.config.mjs ./

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/nginx-config/sites-available /etc/nginx/sites-available
COPY --from=builder /app/nginx-config/sites-enabled /etc/nginx/sites-enabled
COPY --from=builder /app/nginx-config/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/.next /usr/share/nginx/html/_next
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 443