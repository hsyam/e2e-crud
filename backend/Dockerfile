FROM node:14.18-alpine

# Create app directory
RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend

# Install app dependencies
COPY package.json /usr/src/backend/
COPY yarn.lock /usr/src/backend/
RUN yarn install

# Set environment variables
ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 8081

# Bundle app source
COPY . /usr/src/backend

EXPOSE 8081
CMD [ "yarn", "start" ]
