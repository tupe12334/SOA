FROM node:alpine
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 5000
CMD npm run start:prod