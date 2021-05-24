import openSocket from "socket.io-client";
export const socket = openSocket("http://localhost:5000");

export const sendMessage = (text: string) => {
  socket.emit("send_message", text);
};
export const getMessage = (cb: (data: string) => {}) => {
  socket.on("send_message", (data) => {
    cb(data);
  });
};
