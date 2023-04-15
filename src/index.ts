import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import { WebSocket } from "ws";
const tmi = require("tmi.js");
import { welcomeToTheDojo } from "./twitchCommands";

dotenv.config();

const opts: Object = {
	identity: {
		username: "dev_dojo_bot",
		password: process.env.TWITCH_TOKEN,
	},
	channels: ["dobstar93"],
};

const client = new tmi.client(opts);

const onMessageHandler = (
	target: any,
	context: any,
	msg: string,
	tags: any,
	self: any
) => {
	if (self) {
		return;
	} // Ignore messages from the bot
	console.log(`${context.username}: ${msg}`);
	// Remove whitespace from chat message
	const commandName = msg.trim();

	if (commandName === "!hydrate") {
		client.say(target, "You need to drink water");
	}

	if (commandName === "!welcome") {
		welcomeToTheDojo(context.username, client, target);
		// client.say(target, "welcome");
	}
};

// Function called when the "dice" command is issued
const rollDice = () => {
	const sides = 6;
	return Math.floor(Math.random() * sides) + 1;
};

// Called every time the bot connects to Twitch chat
const onConnectedHandler = (addr: string, port: number) => {
	console.log(`* Connected to ${addr}:${port}`);
};

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();
