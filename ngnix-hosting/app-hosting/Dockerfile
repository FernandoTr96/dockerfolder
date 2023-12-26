FROM node:19.2.0-alpine3.17 AS deps
WORKDIR /app
COPY package.json package.json
RUN npm i 

FROM node:19.2.0-alpine3.17 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:stable-perl AS runner
EXPOSE 81
COPY --from=builder /app/dist /usr/share/nginx/html 
COPY assets/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
CMD ["nginx","-g","daemon off;"]