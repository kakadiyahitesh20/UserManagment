FROM node:8

# Create app directory
WORKDIR /Inzept3WebDevFront

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /Inzept3WebDevFront

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /Inzept3WebDevFront

EXPOSE 3000
CMD [ "npm", "start" ]