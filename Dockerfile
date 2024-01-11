FROM node:21-alpine as builder
# Add a work directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN chown -R node:node /app
USER node
# Cache and Install dependencies
COPY --chown=node:node ./react-app/package.json .
COPY --chown=node:node ./react-app/package-lock.json .
RUN npm ci
RUN npm install react-scripts -g
# Copy app files
COPY --chown=node:node ./react-app/ .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]