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

// init public rooms
const rooms = [];
const numOfRooms = 32;
for (let i = 0; i < numOfRooms; i++) {
  rooms.push(`room#${i}`);
}

io.on("connection", (socket) => {
  console.log("New client connected");

  const gameListeners = (room) => {
    socket.on("initDeck", data => {
      socket.to(room).emit("initDeck", data);
    });

    socket.on("myDeck", data => {
      socket.to(room).emit("theirDeck", data);
      // currently unused
    });
    socket.on("myPick", data => {
      socket.to(room).emit("theirPick", data);
    });
  }

  socket.on("joinRoom", room => {
      // establish connection
    socket.join(room);
    socket.room = room;

    const roomLimit = 2;
    const roomSize = io.sockets.adapter.rooms.get(room).size;

    if (roomSize > roomLimit) {
      // if room is full, kick and send feedback
      socket.leave(room);
      socket.room = null;
    }

    if (socket.room) {
      gameListeners(socket.room);
      io.to(socket.room).emit("opponentStatus", roomSize);

    } else {
      socket.emit("message", "Room is full.");
    }
  });

  socket.on("publicRoom", () => {
    // input not necessary;
    const roomLimit = 2;

    // loop through public rooms to join
    for (const room of rooms) {
      // join first to establish connection
      socket.join(room);
      socket.room = room;
      const roomSize = io.sockets.adapter.rooms.get(room).size;

      if (roomSize <= roomLimit) {
        // if room is not full, break loop;
        break;
      }

      // if room is full, kick and send feedback
      socket.leave(room);
      socket.room = null;
    };

    // if client stays
    if (socket.room) {
      gameListeners(socket.room);
      socket.emit("publicRoomName", socket.room);
      io.to(socket.room).emit("opponentStatus", roomSize);

    } else {
      socket.emit("message", "All rooms are full.");
    }

  });

  socket.on("disconnect", () => {
    io.to(socket.room).emit("opponentStatus", false);
    console.log("Client disconnected");
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));