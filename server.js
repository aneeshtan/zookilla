const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// Prepare Next.js app
nextApp.prepare().then(() => {
    const app = express();
    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: "*", // Adjust according to your security requirements
            methods: ["GET", "POST"]
        }
    });

    // Handle WebSocket connections
    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        // Add more event listeners as needed
    });

    // Handle Next.js requests
    app.all('*', (req, res) => {
        return nextHandler(req, res);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
