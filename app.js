const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require("cors");
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.get("/", (req, res) => {
    res.render("index"); // Render views/index.ejs
});

// To store connected users
const users = {};

// Handle Socket.IO Connections
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Add user to the users list
    users[socket.id] = null;

    // Listen for location updates from clients
    socket.on("send-location", (locationData) => {
        users[socket.id] = locationData; // Update user's location
        console.log("Location updated:", socket.id, locationData);

        // Broadcast to all other clients
        io.emit("update-location", { id: socket.id, ...locationData });
    });

    // Handle user disconnection
    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
        delete users[socket.id];
        io.emit("remove-marker", socket.id); // Notify clients to remove the marker
    });
});



// Start Server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
