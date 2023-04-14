import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import { WebSocket } from "ws";

const app: Express = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = process.env.PORT || 4100;

// wss.on("connection", (ws: WebSocket) => {
// 	ws.on("message", (message: string) => {
// 		console.log(`recieved ${message}`);
// 		ws.send(`Hello, you sent -> ${message}`);
// 	});

// 	ws.send("Hi there, I am a websocket Server");
// });

// // app.get("/status", (req: Request, res: Response) => {
// // 	res.json({ status: "ok", platform: "Express + TS" });
// // });

// server.listen(port, () => {
// 	console.log(`Server started on port ${server.address()} ${port}`);
// });
