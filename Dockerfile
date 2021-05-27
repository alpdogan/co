FROM node:alpine as build
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock /app
# RUN npm install yarn -g
RUN npm install -g npm@7.15.0
RUN npm install --force
COPY . .
RUN npm run build
EXPOSE 3000
FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
