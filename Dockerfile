FROM node:21-alpine as build
# Add a work directory
WORKDIR /app
RUN chown -R node:node /app
USER node
# Cache and Install dependencies
COPY ./next-app/package.json .
COPY ./next-app/package-lock.json .
RUN npm ci
# Copy app files
COPY ./next-app/ .
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine
USER 101
COPY --from=build /app/.next /usr/share/nginx/buffer
RUN chmod +x /usr/share/nginx/buffer/deploy.sh
RUN cd /usr/share/nginx/buffer && ./deploy.sh
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]