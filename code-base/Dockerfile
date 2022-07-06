FROM node:14-alpine
ENV PORT=3000
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
WORKDIR /app
RUN npm install
EXPOSE 3000
COPY . ./
CMD ["npm", "start"]
