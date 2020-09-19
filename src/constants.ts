import { Plant } from "./Interfaces";

export const defaultPlants = [
	{
		id: 1,
		name: "Adult Tree",
		co2: 24,
		number: 2,
		type: "tree",
		image:
			"https://i2.wp.com/bigtreetele.com/wp-content/uploads/2015/09/cropped-BigTreeLogo1.png?fit=512%2C512&ssl=1",
	},
	{
		id: 2,
		name: "Young Tree",
		co2: 6.5,
		number: 3,
		type: "tree",
		image: "https://i.pinimg.com/originals/48/5d/ce/485dceadef5cd5c4b3a436d562982e78.jpg",
	},
	{
		id: 3,
		name: "Bush",
		co2: 1,
		number: 1,
		type: "bush",
		image:
			"https://s3-production.bobvila.com/articles/wp-content/uploads/2013/08/how-to-plant-a-bush.jpg",
	},
	{
		id: 4,
		name: "Flower",
		co2: 0.1,
		number: 5,
		type: "flower",
		image:
			"https://www.ikea.com/ch/en/images/products/smycka-artificial-flower-rose-red__0903311_PE596728_S5.JPG?f=s",
	},
] as Plant[];
