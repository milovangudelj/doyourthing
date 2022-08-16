import util from "util";
import { exec as ex } from "child_process";

const exec = util.promisify(ex);

const runCommands = async (commands: string[]): Promise<boolean> => {
	let result: boolean = true;

	for (const command of commands) {
		try {
			const { stdout, stderr } = await exec(command);
		} catch (error) {
			if (error && !error.message.includes("is already installed"))
				result = false;
		}
	}

	return result;
};

export default runCommands;
