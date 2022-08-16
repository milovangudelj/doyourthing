import chalk from "chalk";
import ora from "ora";

import { Action } from "../../types/Action";

import runCommands from "./runCommands.js";

const executeActions = async (actions: Action[]) => {
	for (const action of actions) {
		const { name, commands } = action;

		const spinner = ora({
			text: name,
			color: "blue",
			indent: 2,
			interval: 100,
		}).start();

		const result = await runCommands(commands);

		if (result) {
			spinner.stopAndPersist({ symbol: `${chalk.green("✔")}` });
		} else {
			spinner.stopAndPersist({ symbol: `${chalk.red("✗")}` });
		}
	}
};

export default executeActions;
