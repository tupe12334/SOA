import openSocket from "socket.io-client";
export const socket = openSocket(process.env.REACT_APP_GAME_SERVER_URL);
// console.log();
socket.connect();
export const sendMessage = (text: string) => {
  socket.emit("send_message", text);
};
export const getMessage = (cb: (data: string) => {}) => {
  socket.on("send_message", (data) => {
    cb(data);
  });
};
export const joinRoom = (email: string, roomId: string) => {
  console.log("brodcat socket");
};
