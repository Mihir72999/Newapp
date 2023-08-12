FROM node:alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install --force
COPY . .
ENV MONGO_URI="mongodb+srv://mihir72999:Mihir72999@api.tv0cw9w.mongodb.net/data?retryWrites=true&w=majority"
RUN npm run build
CMD [ "npm", "run", "start" ] 
