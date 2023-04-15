"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const wss = new ws_1.WebSocket.Server({ server });
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
