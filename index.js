#! /usr/bin/env node
import { program } from "commander";

// Commands
import dyt from "./commands/dyt.js";
import signin from "./commands/signin.js";
import signout from "./commands/signout.js";

program
	.name("doyourthing")
	.alias("dyt")
	.version("0.1.0", "-v, --version", "Print the package's version number")
	.description("Fresh OS installs have never been easier")
	.helpOption("-h, --help", "Display this help message")
	.addHelpCommand(
		"help [command]",
		"Display help message for specified command"
	)
	.action(dyt);

program.command("signin").description("Sign in to your account").action(signin);
program
	.command("signout")
	.description("Sign out form your account")
	.action(signout);

program.parse();
