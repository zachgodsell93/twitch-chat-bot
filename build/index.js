"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const tmi = require("tmi.js");
dotenv_1.default.config();
const opts = {
    identity: {
        username: "",
        password: "",
    },
    channels: ["<Channel Name>"],
};
const client = new tmi.client(opts);
const onMessageHandler = (target, context, msg, self) => {
    if (self) {
        return;
    } // Ignore messages from the bot
    // Remove whitespace from chat message
    const commandName = msg.trim();
    // If the command is known, let's execute it
    if (commandName === "!dice") {
        const num = rollDice();
        client.say(target, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
    }
    else {
        console.log(`* Unknown command ${commandName}`);
    }
};
// Function called when the "dice" command is issued
const rollDice = () => {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
};
// Called every time the bot connects to Twitch chat
const onConnectedHandler = (addr, port) => {
    console.log(`* Connected to ${addr}:${port}`);
};
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
client.connect();
