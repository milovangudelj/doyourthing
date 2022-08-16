import { Section } from "../../types/Section";

import defaults from "../../config/defaults.json" assert { type: "json" };

const { repos, managers } = defaults;

const getSections = (machine): Section[] => {
	return machine.sections.map((section) => {
		let actions;
		switch (section.id) {
			case "repos":
				actions = section.actions.map((action) => {
					return repos[action];
				});

				break;
			case "managers":
				actions = section.actions.map((action) => {
					return managers[action];
				});

				break;

			default:
				actions = section.actions;
				break;
		}

		return { id: section.id, name: section.name, actions };
	});
};

export default getSections;
