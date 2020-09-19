import { Plant } from "./Interfaces";

export const defaultPlants = [
	{
		id: 1,
		name: "Adult Tree",
		co2: 24,
		number: 2,
		type: "tree",
	},
	{
		id: 2,
		name: "Young Tree",
		co2: 6.5,
		number: 3,
		type: "tree",
	},
	{
		id: 3,
		name: "Bush",
		co2: 1,
		number: 1,
		type: "bush",
	},
	{
		id: 4,
		name: "Flower",
		co2: 0.1,
		number: 5,
		type: "flower",
	},
] as Plant[];
