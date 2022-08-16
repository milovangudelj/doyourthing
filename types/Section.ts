import { Action } from "./Action";

export type Section = {
	id: string;
	name: string;
	actions: Action[];
};
