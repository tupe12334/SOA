import openSocket from "socket.io-client";
import events from "events";
const socket = openSocket("http://localhost:5000");

export const sendMessage = (text: string) => {
  socket.emit("send_message", text);
};
export const getMessage = (cb: any) => {
  socket.on("send_message", (data) => {
    console.log("gfds");

    cb(data);
  });
};
