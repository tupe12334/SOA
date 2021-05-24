import express from "express";
import { Server as SocketServer } from "socket.io";
import { Server } from "http";
require("dotenv").config();
console.log(process.env.SERVER_PORT);
const app = express();
const http = new Server(app);
//@ts-ignore
const io = new SocketServer(http, { cors: "*" });
io.on("connection", function (socket) {
  console.log("A user connected");

  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
  socket.on("send_message", function (data) {
    socket.emit("send_message", data);
    // console.log(data);
  });
});

http.listen(Number(process.env.SERVER_PORT) | 5000);
