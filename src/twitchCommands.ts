import dotenv from "dotenv";

dotenv.config();

const welcomeToTheDojo: Function = (
	username: string,
	client: any,
	target: any
) => {
	const message = `Welcome to the Dojo @${username}. Shoes off before entering, socks and slippers allowed`;
	return client.say(target, message);
};

const computerSpecs = () => {
	const cpu: string = "Ryzen 5600x";
	const ram: string = "32GB DDR5 3200mhz";
	const gfx: string = "Nvidia RTX 2080 12GB";
};

export { welcomeToTheDojo, computerSpecs };
