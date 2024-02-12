FROM node:21-alpine as builder
# Add a work directory
WORKDIR /app
RUN chown -R node:node /app
USER node
# Cache and Install dependencies
COPY ./react-app/package.json .
COPY ./react-app/package-lock.json .
RUN npm ci
# Copy app files
COPY ./react-app/ .
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine
USER 101
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]