const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

const port = process.env.PORT || 4001;

const app = express();

const server = http.createServer(app);

const io = socketIo(server,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
}); // change origin to pair front-end server


io.on("connection", (socket) => {
  console.log("New client connected");
  socket.broadcast.emit("theyConnect", true);

  socket.on("initDeck", data => {
    console.log("initDeck");
    socket.broadcast.emit("initDeck", data); // will change to room specific
  });

  socket.on("myDeck", data => {
    // console.log("incoming deck:", "length:", data.length, "top:", data[0]);
    socket.broadcast.emit("theirDeck", data); // will change to room specific
  });
  socket.on("myPick", data => {
    // console.log("incoming pick", data);
    socket.broadcast.emit("theirPick", data); // will change to room specific
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("theyConnect", false);
    console.log("Client disconnected");
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));