// dependencies
const express = require('express');
const WebSocket = require('ws');
const SocketServer = require('ws').Server;

const server = express().listen(3000);

const wss = new SocketServer({server});

wss.on('connection', (ws) => {

    console.log('[Server] A client Was Connected');

    ws.on('close', () => {console.log('[Server] Client Disconnected')});

    ws.on('message', (message) => {

        console.log('[Server] Received Message: %s', message);

        //Broadcast to everyone else connected
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

}); 