import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import { WebSocket } from "ws";
const tmi = require("tmi.js");
import { welcomeToTheDojo, computerSpecs } from "./twitchCommands";

dotenv.config();

const opts: Object = {
	identity: {
		username: "dev_dojo_bot",
		password: process.env.TWITCH_TOKEN,
	},
	channels: ["dobstar93", "thedevdad_"],
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
	const commandName = msg.trim().toLowerCase();

	if (commandName === "!hydrate") {
		client.say(target, "You need to drink water");
	}

	if (commandName === "!welcome") {
		welcomeToTheDojo(context.username, client, target);
	}

	if (commandName === "!specs") {
		computerSpecs(client, target);
	}

	if (commandName.includes("error")) {
		client.say(target, "Oh no, is Dev Dad experiencing another error?");
		console.log("\u0007");
		process.stdout.write("\u0007");
	}

	if (commandName.includes("bug") || commandName.includes("bugs")) {
		client.say(target, "Oh no, is Dev Dad experiencing another error?");
	}
};

// Called every time the bot connects to Twitch chat
const onConnectedHandler = (addr: string, port: number) => {
	console.log(`* Connected to ${addr}:${port}`);
};

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();
