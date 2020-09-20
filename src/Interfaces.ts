export interface Plant {
	name: string;
	latin_name: string;
	habit: string;
	family: string;
	hardiness: string;
	soil: string;
	moisture: string;
	pH: string;
	score: number;
	co2: number;
}

export interface PlantedPlant extends Plant {
	number: number;
}
