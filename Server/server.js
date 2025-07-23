import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173", // Adjust this to your client URL
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("Setting up server...");

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
