FROM node:15-alpine
WORKDIR /usr/tictactoe
COPY . .
RUN npm ci
# RUN npx prisma migrate dev 
# RUN npx prisma generate
RUN npm run build
EXPOSE 5000
CMD npm run start:prod