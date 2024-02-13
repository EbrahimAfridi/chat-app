const express = require("express");
const app = express();
const cors = require("cors");
const http = require('http');
const {Server} = require('socket.io');

app.use(cors());

const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    // origin: "http://localhost:5173",
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`a user connected: ${socket.id}`);
  socket.on("send_message", (msg) => {
    console.log(msg);
  });
})

server.listen(3001, () => {
  console.log("listening on :3001");
});