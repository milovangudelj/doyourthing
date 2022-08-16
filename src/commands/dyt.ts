import process from "process";
import chalk from "chalk";

import config from "../../config/config.json" assert { type: "json" };

import getSections from "../helpers/getSections.js";
import executeActions from "../helpers/executeActions.js";

const machine = config.machines[0];

const dyt = async () => {
	if (process.getuid() != 0) {
		console.log("You need root privileges to run this command.");
		return;
	}

	const sections = getSections(machine);

	for (const section of sections) {
		const { id, name, actions } = section;

		console.log("\n" + chalk.bold(name) + "\n");

		await executeActions(actions);
	}
};

export default dyt;
