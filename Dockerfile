FROM node:20-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /usr/app
# Cache and Install dependencies
COPY ./react-app/package.json .
COPY ./react-app/package-lock.json .
RUN npm ci
# Copy app files
COPY ./react-app/ .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]