#build
FROM node:14-alpine as build
WORKDIR /web
COPY package*.json ./
RUN npm install
ENV NODE_OPTIONS=--experimental-specifier-resolution=node
COPY . .
# generates app
RUN npm run build
FROM fholzer/nginx-brotli:v1.12.2
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=build /web/build /usr/share/nginx/html
#hosting
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]