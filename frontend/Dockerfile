FROM node:lts-alpine


# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json'
COPY package*.json ./

# install project dependencies
RUN npm ci
# copy project files and folders to the current working directory
COPY . .


EXPOSE 8080
CMD [ "npm", "run", "serve" ]


