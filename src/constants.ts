import { Plant, PlantedPlant } from "./Interfaces";

//export const baseURL = "https://plant.bitter.li/api";
export const baseURL = "http://localhost:5000";

export const imageURL =
	"https://i2.wp.com/bigtreetele.com/wp-content/uploads/2015/09/cropped-BigTreeLogo1.png?fit=512%2C512&ssl=1";

export const mapSuggestions = (suggestion: any) => {
	return {
		name: suggestion["Common name"],
		latin_name: suggestion["Latin name"],
		habit: suggestion.Habit,
		family: suggestion.Family,
		hardiness: suggestion.Hardiness,
		soil: suggestion.Soil,
		moisture: suggestion.Moisture,
		pH: suggestion.pH,
		score: suggestion.score,
		co2: suggestion.reduc_in_CO2,
	} as Plant;
};
export const defaultPlants = [
	{
		latin_name: "Veronica americana",
		name: "American Brooklime",
		habit: "Perennial",
		family: "Scrophulariaceae",
		soil: "LMH",
		moisture: "We",
		pH: "ANB",
		score: 3.7,
		number: 1,
		co2: 1,
	},
	{
		latin_name: "Equisetum fluviatile",
		name: "Swamp Horsetail",
		habit: "Perennial",
		family: "Equisetaceae",
		soil: "LMH",
		moisture: "We",
		pH: "ANB",
		score: 3.7777777778,
		number: 1,
		co2: 1,
	},
	{
		latin_name: "Betula pubescens",
		name: "White Birch",
		habit: "Tree",
		family: "Betulaceae",
		soil: "LMH",
		moisture: "MWe",
		pH: "ANB",
		score: 3.6888888889,
		number: 1,
		co2: 1,
	},
	{
		latin_name: "Myrica gale",
		name: "Bog Myrtle",
		habit: "Shrub",
		family: "Myricaceae",
		soil: "LMH",
		moisture: "MWe",
		pH: "ANB",
		score: 3.6888888889,
		number: 1,
		co2: 1,
	},
	{
		latin_name: "Pinguicula vulgaris",
		name: "Butterwort",
		habit: "Perennial",
		family: "Lentibulariaceae",
		soil: "LMH",
		moisture: "We",
		pH: "ANB",
		score: 3.6666666667,
		number: 1,
		co2: 1,
	},
] as PlantedPlant[];

const arrayRotate = (arr: any[], count: number) => {
	count -= arr.length * Math.floor(count / arr.length);
	arr.push.apply(arr, arr.splice(0, count));
	return arr;
};
export const getRandom = (arr: any[], n: number, seed: string) => {
	let copy = [...arr];
	const chars = seed.split("");
	const numberseed = chars.reduce((acc, val) => acc + val.charCodeAt(0), 0) % 100;
	copy = arrayRotate(copy, numberseed);
	let result = [];
	for (let i = 0; i < n; i++) {
		result.push(copy[Math.ceil((i * copy.length) / n)]);
	}
	return result;
};

export const locations = [
	{
		name: "Galley fleurs",
		adress: "Route de la Gare 8, 1524 Marnand",
		coords: {
			longitude: 6.897586,
			latitude: 46.757709,
		},
	},
	{
		name: "Royal Jardin",
		adress: "Chemin des Tattes 4, 1222 Vésenaz",
		coords: {
			longitude: 6.206473,
			latitude: 46.244945,
		},
	},
	{
		name: "JB Jardins SA",
		adress: "Avenue De-Budé 10, 1202 Genève",
		coords: {
			longitude: 6.13086,
			latitude: 46.22611,
		},
	},
	{
		name: "Senn Blumen AG",
		adress: "Paradiesstrasse 40, 4102 Binningen",
		coords: {
			longitude: 7.567292,
			latitude: 47.538383,
		},
	},
	{
		name: "Rusterholz Pflanzencenter AG",
		adress: "Alte Landstrasse 19, 8942 Oberrieden",
		coords: {
			longitude: 8.575302,
			latitude: 47.279014,
		},
	},
	{
		name: "Gärtnerei Bühler GmbH",
		adress: "Weidweg 1, 4852 Rothrist",
		coords: {
			longitude: 7.893007,
			latitude: 47.301799,
		},
	},
	{
		name: "Blumen Stricker",
		adress: "Chilchgasse 6, 3792 Saanen",
		coords: {
			longitude: 7.259568,
			latitude: 46.490508,
		},
	},
	{
		name: "Heilsarmee Buchseegut",
		adress: "Buchseeweg 15, 3098 Köniz",
		coords: {
			longitude: 7.411101,
			latitude: 46.922699,
		},
	},
	{
		name: "Trinchan Paysages Sàrl",
		adress: "Räbhaltaweg 4, 1734 Tentlingen",
		coords: {
			longitude: 7.193061,
			latitude: 46.768886,
		},
	},
	{
		name: "Glauser's Bio-Baumschule",
		adress: "Limpachmatt 22, 3116 Noflen BE",
		coords: {
			longitude: 7.550784,
			latitude: 46.809542,
		},
	},
	{
		name: "L'Horizon Vert M&M Sàrl",
		adress: "Route des Convers 10, 2616 Renan BE",
		coords: {
			longitude: 6.926623,
			latitude: 47.125592,
		},
	},
	{
		name: "Blumen Petermann",
		adress: "beim Friedhof, Güterstrasse 23, 6374 Buochs",
		coords: {
			longitude: 8.421121,
			latitude: 46.971173,
		},
	},
	{
		name: "VOILLAT SA",
		adress: "Les Flochets, 2525 Le Landeron",
		coords: {
			longitude: 7.066472,
			latitude: 47.051167,
		},
	},
	{
		name: "Blumen Garten Küng AG",
		adress: "Hohenzornstrasse 8, 8500 Frauenfeld",
		coords: {
			longitude: 8.901334,
			latitude: 47.558585,
		},
	},
	{
		name: "Stiftung Brändi, Dorfgärtnerei",
		adress: "Schachenstrasse 33, 6010 Kriens",
		coords: {
			longitude: 8.282838,
			latitude: 47.035342,
		},
	},
	{
		name: "Ryffel + Ryffel AG",
		adress: "Brunnenstrasse 14, 8610 Uster",
		coords: {
			longitude: 8.721226,
			latitude: 47.350779,
		},
	},
	{
		name: "Jacquet SA",
		adress: "Rue des Vollandes 23, 1207 Genève",
		coords: {
			longitude: 6.161233,
			latitude: 46.204551,
		},
	},
	{
		name: "Wartmann AG",
		adress: "Langacherweg 1, 8604 Volketswil",
		coords: {
			longitude: 8.684415,
			latitude: 47.400027,
		},
	},
	{
		name: "Gärtnerei und Blumengeschäft Sommer",
		adress: "Bänackerstrasse 20, 4934 Madiswil",
		coords: {
			longitude: 7.80204,
			latitude: 47.162496,
		},
	},
	{
		name: "Parcs et jardins Krattinger R. SA",
		adress: "Le Sécheron 12, 1745 Lentigny",
		coords: {
			longitude: 7.0006,
			latitude: 46.759016,
		},
	},
	{
		name: "Kuster Gebr. AG",
		adress: "Bahnhofplatz 1, 6370 Stans",
		coords: {
			longitude: 8.366421,
			latitude: 46.958845,
		},
	},
	{
		name: "Grün Schaffhausen",
		adress: "Rheinhardstrasse 6, 8200 Schaffhausen",
		coords: {
			longitude: 8.651397,
			latitude: 47.707145,
		},
	},
	{
		name: "Léman espaces verts Sàrl",
		adress: "Chemin des Chanâts 42, 1293 Bellevue",
		coords: {
			longitude: 6.137433,
			latitude: 46.253707,
		},
	},
	{
		name: "Hydroplant AG",
		adress: "Neunbrunnenstrasse 50, 8050 Zürich",
		coords: {
			longitude: 8.539784,
			latitude: 47.417408,
		},
	},
	{
		name: "AB JARDIN SARL",
		adress: "Route de Presinge 63, 1241 Puplinge",
		coords: {
			longitude: 6.238849,
			latitude: 46.209838,
		},
	},
	{
		name: "Gärtnerei Leonotis Hauert + Balmer AG",
		adress: "Schulhausstrasse, 3257 Grossaffoltern",
		coords: {
			longitude: 7.361083,
			latitude: 47.063665,
		},
	},
	{
		name: "BUTTY JARDINS Sàrl",
		adress: "Chemin De-Sales 10, 1214 Vernier",
		coords: {
			longitude: 6.086986,
			latitude: 46.213366,
		},
	},
	{
		name: "MARTIN ET MARTIN SA",
		adress: "Route d'Hermance 105, 1245 Collonge-Bellerive",
		coords: {
			longitude: 6.203259,
			latitude: 46.252863,
		},
	},
	{
		name: "Cristal Jardin Sàrl",
		adress: "Champs-Martin 6, 2606 Corgémont",
		coords: {
			longitude: 7.133729,
			latitude: 47.193234,
		},
	},
	{
		name: "Bluemehuus Mötteli + Co.",
		adress: "Tösstalstrasse 106, 8488 Turbenthal",
		coords: {
			longitude: 8.846368,
			latitude: 47.434105,
		},
	},
	{
		name: "Muggli AG",
		adress: "Schopfhaldenstrasse 2, 8340 Hinwil",
		coords: {
			longitude: 8.843647,
			latitude: 47.304897,
		},
	},
	{
		name: "Eichenberger Martin",
		adress: "Hubstrasse 25, 8942 Oberrieden",
		coords: {
			longitude: 8.573448,
			latitude: 47.277593,
		},
	},
	{
		name: "Setex SA",
		adress: "Chemin de Tré-la-Villa 40, 1236 Cartigny",
		coords: {
			longitude: 6.020085,
			latitude: 46.164726,
		},
	},
	{
		name: "Blumen Häusler",
		adress: "Thunstrasse 2, 3634 Thierachern",
		coords: {
			longitude: 7.58395,
			latitude: 46.753013,
		},
	},
	{
		name: "altra schaffhausen",
		adress: "Mühlenstrasse 56, 8200 Schaffhausen",
		coords: {
			longitude: 8.627327,
			latitude: 47.693309,
		},
	},
	{
		name: "Claude Giroud Paysagiste Sàrl",
		adress: "Rue du Prieuré 8, 1636 Broc",
		coords: {
			longitude: 7.095745,
			latitude: 46.603449,
		},
	},
	{
		name: "Marti Garten AG",
		adress: "Kobirain 7, 4587 Aetingen",
		coords: {
			longitude: 7.505668,
			latitude: 47.134022,
		},
	},
	{
		name: "Bölsterli Markus",
		adress: "Oberdorf 11, 9056 Gais",
		coords: {
			longitude: 9.455242,
			latitude: 47.363464,
		},
	},
	{
		name: "Tim Schmid Paysages",
		adress: "Chemin de la Planche 7, 1034 Boussens",
		coords: {
			longitude: 6.582853,
			latitude: 46.601821,
		},
	},
	{
		name: "Giardini ArteVerde Sagl",
		adress: "Via Rampiga 2, 6917 Barbengo",
		coords: {
			longitude: 8.92416,
			latitude: 45.962154,
		},
	},
	{
		name: "Gärtnerei Balzer AG",
		adress: "Hofenstrasse 22, 8708 Männedorf",
		coords: {
			longitude: 8.693649,
			latitude: 47.255495,
		},
	},
	{
		name: "Strub Naturgartenbau",
		adress: "Bahnstrasse 157, 3008 Bern",
		coords: {
			longitude: 7.410222,
			latitude: 46.945861,
		},
	},
	{
		name: "Martinelli Service Sagl",
		adress: "Via Vignascia, 6514 Sementina",
		coords: {
			longitude: 8.985815,
			latitude: 46.179309,
		},
	},
	{
		name: "Verdissimo",
		adress: "Binzstrasse 15, 8125 Zollikerberg",
		coords: {
			longitude: 8.604588,
			latitude: 47.346538,
		},
	},
	{
		name: "Sonnenburg Gärtnerei",
		adress: "Sonnenburggutstrasse 51, 8200 Schaffhausen",
		coords: {
			longitude: 8.619592,
			latitude: 47.699522,
		},
	},
	{
		name: "Il Vivaio",
		adress: "Via Porbetto 40, 6614 Brissago",
		coords: {
			longitude: 8.700442,
			latitude: 46.119458,
		},
	},
	{
		name: "Gartenbauschule Hünibach",
		adress: "Chartreusestrasse 7, 3626 Hünibach",
		coords: {
			longitude: 7.645137,
			latitude: 46.746497,
		},
	},
	{
		name: "Pottu & Seitz SA",
		adress: "Route de Certoux 154, 1258 Perly, Certoux",
		coords: {
			longitude: 6.079333,
			latitude: 46.156603,
		},
	},
	{
		name: "Friedhofgärtnerei Köniz",
		adress: "Mösliweg 37, 3098 Köniz",
		coords: {
			longitude: 7.41873,
			latitude: 46.919642,
		},
	},
	{
		name: "Bütikofer Blumen + Gartenbau AG",
		adress: "Hauptstrasse 31, 3422 Alchenflüh",
		coords: {
			longitude: 7.575164,
			latitude: 47.08421,
		},
	},
	{
		name: "Wiedmer-Blumen AG",
		adress: "Walperswilstrasse 59, 3270 Aarberg",
		coords: {
			longitude: 7.26245,
			latitude: 47.046734,
		},
	},
	{
		name: "Evertis SA",
		adress: "Chemin de la Veyre-d'en-Haut D 10, 1806 St-Légier-La Chiésaz",
		coords: {
			longitude: 6.865331,
			latitude: 46.479132,
		},
	},
	{
		name: "Blumen Steiger",
		adress: "beim Friedhof, Fläcke 2, 6215 Beromünster",
		coords: {
			longitude: 8.192697,
			latitude: 47.206781,
		},
	},
	{
		name: "Weber Orchideen GmbH",
		adress: "Hofstettenstrasse 40, 4107 Ettingen",
		coords: {
			longitude: 7.529824,
			latitude: 47.474841,
		},
	},
	{
		name: "Pedrazzi giardini Sagl",
		adress: "Via Vallemaggia 10, 6670 Avegno",
		coords: {
			longitude: 8.749675,
			latitude: 46.19886,
		},
	},
	{
		name: "Alpin Gartencenter Schutz",
		adress: "Quedra 1, 7477 Filisur",
		coords: {
			longitude: 9.686791,
			latitude: 46.67227,
		},
	},
	{
		name: "Bizzini Fausto SA",
		adress: "Via ai Pree 14, 6915 Pambio-Noranco",
		coords: {
			longitude: 8.927074,
			latitude: 45.981054,
		},
	},
	{
		name: "BICA GIARDINI Sagl",
		adress: "Via Campagna 23, 6987 Caslano",
		coords: {
			longitude: 8.874861,
			latitude: 45.974266,
		},
	},
	{
		name: "Morgenthaler Gärtnerei",
		adress: "Dorfstrasse 6, 3415 Hasle b. Burgdorf",
		coords: {
			longitude: 7.652959,
			latitude: 47.016656,
		},
	},
	{
		name: "A.Pinto Fleurs",
		adress: "Avenue du Cimetière 1, 1213 Petit-Lancy",
		coords: {
			longitude: 6.116473,
			latitude: 46.19726,
		},
	},
	{
		name: "TL Giardini",
		adress: "Via Cereda 3, 6883 Novazzano",
		coords: {
			longitude: 8.997553,
			latitude: 45.840806,
		},
	},
	{
		name: "Nübling AG Gartenbau und Landschaftsarchitektur",
		adress: "Rigacherweg 40, 5612 Villmergen",
		coords: {
			longitude: 8.237445,
			latitude: 47.352657,
		},
	},
	{
		name: "Gärtnerei Vogel",
		adress: "Bettenthal 4, 5503 Schafisheim",
		coords: {
			longitude: 8.143848,
			latitude: 47.364159,
		},
	},
	{
		name: "Gartenbau B. Ryffel",
		adress: "Seestrasse 23a, 3800 Unterseen",
		coords: {
			longitude: 7.847191,
			latitude: 46.684226,
		},
	},
	{
		name: "Berufsbildungsheim Neuhof",
		adress: "Pestalozzistrasse 100, 5242 Birr",
		coords: {
			longitude: 8.209826,
			latitude: 47.430792,
		},
	},
	{
		name: "Denis Sippel SA",
		adress: "1271 Givrins",
		coords: {
			longitude: 6.200777,
			latitude: 46.425025,
		},
	},
	{
		name: "Casa Verde Innen & Aussenbegrünung AG",
		adress: "Rorschacher Strasse 308, 9016 St. Gallen",
		coords: {
			longitude: 9.420528,
			latitude: 47.448377,
		},
	},
	{
		name: "Schopfer Gartenbau AG",
		adress: "Gsteigstrasse 19, 3780 Gstaad",
		coords: {
			longitude: 7.285888,
			latitude: 46.468292,
		},
	},
	{
		name: "Wilhelm Blumen",
		adress: "Dorfstrasse 17A, 3715 Adelboden",
		coords: {
			longitude: 7.559734,
			latitude: 46.493097,
		},
	},
	{
		name: "Bünter Gartengestaltung und Pflege GmbH",
		adress: "Eigi 3, 8932 Mettmenstetten",
		coords: {
			longitude: 8.447516,
			latitude: 47.252039,
		},
	},
	{
		name: "Bissat Fleurs",
		adress: "Route de l'Etraz 51, 1267 Vich",
		coords: {
			longitude: 6.252117,
			latitude: 46.417819,
		},
	},
	{
		name: "Orangerie",
		adress: "Rue de l'Orangerie 26, 1202 Genève",
		coords: {
			longitude: 6.133128,
			latitude: 46.214269,
		},
	},
	{
		name: "Abt Jardins et Paysages Sàrl",
		adress: "Chemin de la Viane 103, 1052 Le Mont-sur-Lausanne",
		coords: {
			longitude: 6.621737,
			latitude: 46.55683,
		},
	},
	{
		name: "Blumen Ley",
		adress: "Beim Kantonsspital Luzern, Spitalstrasse 53, 6004 Luzern",
		coords: {
			longitude: 8.297785,
			latitude: 47.057532,
		},
	},
	{
		name: "Tech Jardin SA",
		adress: "Chemin de Blémant 27, 1245 Collonge-Bellerive",
		coords: {
			longitude: 6.206253,
			latitude: 46.248964,
		},
	},
	{
		name: "Asclépiade",
		adress: "Grand-Rue 49, 1630 Bulle",
		coords: {
			longitude: 7.057634,
			latitude: 46.620149,
		},
	},
	{
		name: "Blumen Joos GmbH",
		adress: "Lommiserstrasse, 9545 Wängi",
		coords: {
			longitude: 8.968013,
			latitude: 47.505821,
		},
	},
	{
		name: "Atelier Vert SA",
		adress: "Route de Cartigny 3, 1236 Cartigny",
		coords: {
			longitude: 6.036512,
			latitude: 46.170941,
		},
	},
	{
		name: "Gerber Gottfried",
		adress: "Tösstalstrasse 30, 8486 Rikon im Tösstal",
		coords: {
			longitude: 8.792476,
			latitude: 47.448161,
		},
	},
	{
		name: "Gs Giardini di Gigliotti Santo e Pasquale",
		adress: "Via Cantonale 4, 6814 Cadempino",
		coords: {
			longitude: 8.934477,
			latitude: 46.035155,
		},
	},
	{
		name: "Oh ! Quel beau jardin",
		adress: "Chemin du Stade 17, 1252 Meinier",
		coords: {
			longitude: 6.231158,
			latitude: 46.247488,
		},
	},
	{
		name: "Créalentours Sàrl",
		adress: "P.O. Box, 2830 Courrendlin",
		coords: {
			longitude: 7.373048,
			latitude: 47.339818,
		},
	},
	{
		name: "AUHOF Pflanzen Garten Blumen, Real Toni",
		adress: "Kirchstrasse 18, 9490 Vaduz",
		coords: {
			longitude: 9.519104,
			latitude: 47.137082,
		},
	},
	{
		name: "Ammann Gartenbau AG",
		adress: "Toggwil 2, 8706 Meilen",
		coords: {
			longitude: 8.652419,
			latitude: 47.287781,
		},
	},
	{
		name: "Kuster Gebr. AG",
		adress: "Dorfstrasse 52a, 6390 Engelberg",
		coords: {
			longitude: 8.399022,
			latitude: 46.820084,
		},
	},
	{
		name: "Baumann Peter",
		adress: "Schloss-Strasse 12, 3672 Oberdiessbach",
		coords: {
			longitude: 7.620297,
			latitude: 46.839371,
		},
	},
	{
		name: "Sommerer & Co",
		adress: "Mattweg 85, 4144 Arlesheim",
		coords: {
			longitude: 7.616168,
			latitude: 47.502451,
		},
	},
	{
		name: "Vurlod Fils Sàrl",
		adress: "Rue de Beauregard 11, 2300 La Chaux-de-Fonds",
		coords: {
			longitude: 6.824104,
			latitude: 47.106999,
		},
	},
	{
		name: "Die Idee Blumen & Geschenke",
		adress: "Entlebucherstrasse 3, 6110 Wolhusen",
		coords: {
			longitude: 8.07283,
			latitude: 47.058418,
		},
	},
	{
		name: "Fleischli",
		adress: "Hombergstrasse 37, 4612 Wangen b. Olten",
		coords: {
			longitude: 7.879157,
			latitude: 47.346069,
		},
	},
	{
		name: "a weber gartenbau",
		adress: "Im Brünneli 21, 8127 Forch",
		coords: {
			longitude: 8.656632,
			latitude: 47.328163,
		},
	},
	{
		name: "Wittwer Blumen Gartenbau AG",
		adress: "Stationsstrasse 38, 3645 Gwatt (Thun)",
		coords: {
			longitude: 7.618364,
			latitude: 46.727138,
		},
	},
	{
		name: "Blumen Iten u. Co.",
		adress: "Marausstrasse 5, 7310 Bad Ragaz",
		coords: {
			longitude: 9.502495,
			latitude: 47.007305,
		},
	},
	{
		name: "Blumen Pfister",
		adress: "Röschstrasse 17a, 9000 St. Gallen",
		coords: {
			longitude: 9.400993,
			latitude: 47.431895,
		},
	},
	{
		name: "PAYSAGISTE JARDINIER JOVANOVIC",
		adress: "Chemin du Vieux-Vésenaz 42, 1222 Vésenaz",
		coords: {
			longitude: 6.198145,
			latitude: 46.238862,
		},
	},
	{
		name: "Kunz Werner",
		adress: "Hauptstrasse 4D, 3855 Brienz BE",
		coords: {
			longitude: 8.019956,
			latitude: 46.757196,
		},
	},
	{
		name: "Gärtnerei Niederberger",
		adress: "bei Pilatusbahn, Talacker, 6010 Kriens",
		coords: {
			longitude: 8.279642,
			latitude: 47.029519,
		},
	},
	{
		name: "Blumen Oertig",
		adress: "Schaffhauserstrasse 354, 8050 Zürich",
		coords: {
			longitude: 8.546467,
			latitude: 47.40995,
		},
	},
	{
		name: "Gärtnerei Meier + Co.",
		adress: "Hochfelderstrasse 4, 8174 Stadel b. Niederglatt",
		coords: {
			longitude: 8.472639,
			latitude: 47.524184,
		},
	},
	{
		name: "Blumen Eichenberger",
		adress: "Bahnhofstrasse 10, 8810 Horgen",
		coords: {
			longitude: 8.59779,
			latitude: 47.260916,
		},
	},
	{
		name: "Huber Emil AG",
		adress: "Mythenweg 2, 5610 Wohlen AG",
		coords: {
			longitude: 8.273694,
			latitude: 47.348209,
		},
	},
	{
		name: "Batiflor SA",
		adress: "Chemin de la Gentille 19A, 1222 Vésenaz",
		coords: {
			longitude: 6.216317,
			latitude: 46.255848,
		},
	},
	{
		name: "GD Fleurs",
		adress: "Avenue du Curé Baud 7, 1212 Grand-Lancy",
		coords: {
			longitude: 6.119786,
			latitude: 46.181402,
		},
	},
	{
		name: "Rüegg Blumen",
		adress: "Oberwilerstrasse 2, 8442 Hettlingen",
		coords: {
			longitude: 8.709997,
			latitude: 47.549329,
		},
	},
	{
		name: "Keller Gartengestaltung + Gartenpflege GmbH",
		adress: "Zürcherstrasse 275, 8500 Frauenfeld",
		coords: {
			longitude: 8.905603,
			latitude: 47.562085,
		},
	},
	{
		name: "Chappuis Paysagiste",
		adress: "Chemin des Bulesses 152, 1814 La Tour-de-Peilz",
		coords: {
			longitude: 6.873875,
			latitude: 46.456559,
		},
	},
	{
		name: "Zweerus Andreas",
		adress: "Bachtobelstrasse 5, 8303 Bassersdorf",
		coords: {
			longitude: 8.619576,
			latitude: 47.449606,
		},
	},
	{
		name: "Meyer Orchideen AG",
		adress: "Roswis 14, 8602 Wangen b. Dübendorf",
		coords: {
			longitude: 8.652182,
			latitude: 47.402412,
		},
	},
	{
		name: "Zingreen-Gartenbau",
		adress: "Suterstrasse 7, 3780 Gstaad",
		coords: {
			longitude: 7.287684,
			latitude: 46.473188,
		},
	},
	{
		name: "Hotz Gärtnerei AG",
		adress: "Brunnenweg 8, 5436 Würenlos",
		coords: {
			longitude: 8.367877,
			latitude: 47.446414,
		},
	},
	{
		name: "LDS Paysagiste De Staercke",
		adress: "Montée du Moulin 15, 3973 Venthône",
		coords: {
			longitude: 7.526908,
			latitude: 46.305289,
		},
	},
	{
		name: "Blumen Bahnhof Chur",
		adress: "Bahnhofplatz 3, 7000 Chur",
		coords: {
			longitude: 9.529915,
			latitude: 46.853584,
		},
	},
	{
		name: "Blumen Stricker",
		adress: "Gewerbestrasse 8, 3770 Zweisimmen",
		coords: {
			longitude: 7.375733,
			latitude: 46.556445,
		},
	},
	{
		name: "Rodigari Gartencenter",
		adress: "Churerstrasse 21, 7013 Domat/Ems",
		coords: {
			longitude: 9.465566,
			latitude: 46.838303,
		},
	},
	{
		name: "Zimmermann Flaach AG",
		adress: "Oberdorfstrasse 9, 8416 Flaach",
		coords: {
			longitude: 8.612027,
			latitude: 47.575745,
		},
	},
	{
		name: "GGZ Gartenbau",
		adress: "Im Holzerhurd 56, 8046 Zürich",
		coords: {
			longitude: 8.496545,
			latitude: 47.423623,
		},
	},
	{
		name: "Boschung & fils jardiniers paysagistes Sàrl",
		adress: "Rue Robert-Adrien-Stierlin 14, 1217 Meyrin",
		coords: {
			longitude: 6.096836,
			latitude: 46.237533,
		},
	},
	{
		name: "Gärtnerei Felber GmbH",
		adress: "Grüneggweg 8, 6280 Hochdorf",
		coords: {
			longitude: 8.299292,
			latitude: 47.166239,
		},
	},
	{
		name: "Entre Terre et Ciel Sàrl",
		adress: "Chemin des Blessonniers 6, 1243 Presinge",
		coords: {
			longitude: 6.260478,
			latitude: 46.218811,
		},
	},
	{
		name: "Blumen Grütter",
		adress: "Wangenstrasse 18, 3373 Röthenbach Herzogenbuchsee",
		coords: {
			longitude: 7.681088,
			latitude: 47.20544,
		},
	},
	{
		name: "Blumen Keusch AG",
		adress: "Grünaustrasse 15, 9470 Buchs SG",
		coords: {
			longitude: 9.47529,
			latitude: 47.165598,
		},
	},
	{
		name: "Urfer Paysagiste Sàrl",
		adress: "Route de Rolle 19, 1188 Gimel",
		coords: {
			longitude: 6.313379,
			latitude: 46.505207,
		},
	},
	{
		name: "Donat AG",
		adress: "Friedhofstrasse 10, 5610 Wohlen AG",
		coords: {
			longitude: 8.276677,
			latitude: 47.346028,
		},
	},
	{
		name: "Etablissement Horticole A. Angéloz Sàrl",
		adress: "Route du Centre 34A, 1782 Belfaux",
		coords: {
			longitude: 7.102651,
			latitude: 46.823042,
		},
	},
	{
		name: "Forrer Gärtnerei",
		adress: "Sihleggstrasse 16, 8832 Wollerau",
		coords: {
			longitude: 8.707232,
			latitude: 47.187653,
		},
	},
	{
		name: "Blumen P. Gätzi",
		adress: "Fällandenstrasse 19, 8124 Maur",
		coords: {
			longitude: 8.667127,
			latitude: 47.342624,
		},
	},
	{
		name: "LC Paysages Sàrl",
		adress: "Au Fernotz 1, 1784 Courtepin",
		coords: {
			longitude: 7.130947,
			latitude: 46.86379,
		},
	},
	{
		name: "AV Jardin",
		adress: "Route de Compois 35, 1252 Meinier",
		coords: {
			longitude: 6.22446,
			latitude: 46.245464,
		},
	},
	{
		name: "Parvex Paysagiste",
		adress: "Chemin du Bochet 4, 1196 Gland",
		coords: {
			longitude: 6.273535,
			latitude: 46.416341,
		},
	},
	{
		name: "Erlenhof",
		adress: "Erlenhofstrasse 48, 4153 Reinach BL",
		coords: {
			longitude: 7.571623,
			latitude: 47.490639,
		},
	},
	{
		name: "Müller Gartenbau AG",
		adress: "Zürcherstrasse 380, 8500 Frauenfeld",
		coords: {
			longitude: 8.921337,
			latitude: 47.569656,
		},
	},
	{
		name: "Emch Floristik",
		adress: "Muristrasse 10, 5623 Boswil",
		coords: {
			longitude: 8.316957,
			latitude: 47.29748,
		},
	},
	{
		name: "R. Christen Gärtnerei",
		adress: "Bergstrasse 31, 8108 Dällikon",
		coords: {
			longitude: 8.443493,
			latitude: 47.435717,
		},
	},
	{
		name: "db Garten- und Sportanlagen AG",
		adress: "Doggilochstrasse 128A, 7250 Klosters",
		coords: {
			longitude: 9.898456,
			latitude: 46.860935,
		},
	},
	{
		name: "Formigé Paul Sàrl",
		adress: "Chemin des Bacounis 1, 1245 Collonge-Bellerive",
		coords: {
			longitude: 6.195649,
			latitude: 46.253886,
		},
	},
	{
		name: "Centre Equestre d'Ependes",
		adress: "Chemin du Brésil 1, 1731 Ependes FR",
		coords: {
			longitude: 7.142335,
			latitude: 46.765725,
		},
	},
	{
		name: "H. Gosteli AG",
		adress: "Metzgergasse 4, 3800 Matten b. Interlaken",
		coords: {
			longitude: 7.865696,
			latitude: 46.680425,
		},
	},
	{
		name: "Blumen Belser",
		adress: "St. Gallerstrasse 16, 9230 Flawil",
		coords: {
			longitude: 9.187953,
			latitude: 47.412464,
		},
	},
	{
		name: "Petermann Emmanuel",
		adress: "Rue dos chez Mérat 112, 2854 Bassecourt",
		coords: {
			longitude: 7.251434,
			latitude: 47.335906,
		},
	},
	{
		name: "Blumen-Gärtnerei Müller",
		adress: "Museumstrasse 10, 6060 Sarnen",
		coords: {
			longitude: 8.247562,
			latitude: 46.898224,
		},
	},
	{
		name: "Cédric Chanson Sàrl",
		adress: "Route du Boiron 23, 1260 Nyon",
		coords: {
			longitude: 6.214573,
			latitude: 46.381613,
		},
	},
	{
		name: "Blumen Schenk",
		adress: "beim Spital, Waldhofstrasse 7, 4900 Langenthal",
		coords: {
			longitude: 7.788831,
			latitude: 47.217837,
		},
	},
	{
		name: "Hydroplant AG",
		adress: "Lättichstrasse 6, 6340 Baar",
		coords: {
			longitude: 8.539013,
			latitude: 47.199837,
		},
	},
	{
		name: "Meyer Söhne AG",
		adress: "Allmendstrasse 160, 4058 Basel",
		coords: {
			longitude: 7.623506,
			latitude: 47.563247,
		},
	},
	{
		name: "Wanninger Blumen Gärtnerei",
		adress: "Luzernerstrasse 26, 5630 Muri AG",
		coords: {
			longitude: 8.342775,
			latitude: 47.271375,
		},
	},
	{
		name: "H.P. Frey Gartenbau AG",
		adress: "Paradiesweg 6, 5702 Niederlenz",
		coords: {
			longitude: 8.173669,
			latitude: 47.396434,
		},
	},
	{
		name: "Blumen Maurer AG",
		adress: "Flugplatzstrasse 40, 3122 Kehrsatz",
		coords: {
			longitude: 7.474849,
			latitude: 46.912326,
		},
	},
	{
		name: "Jardinerie Fleuristerie Hämmerli SNC",
		adress: "Chemin du Bouzenet 2, 1033 Cheseaux-sur-Lausanne",
		coords: {
			longitude: 6.60825,
			latitude: 46.581589,
		},
	},
	{
		name: "Züblin Kurt",
		adress: "Mitteldorfstrasse 4, 9608 Ganterschwil",
		coords: {
			longitude: 9.091274,
			latitude: 47.38053,
		},
	},
	{
		name: "JARDIN ALPIN Sàrl",
		adress: "Chemin de Courtelette 8, 1997 Haute-Nendaz",
		coords: {
			longitude: 7.300796,
			latitude: 46.1835,
		},
	},
	{
		name: "Hospenthal - Kägi AG",
		adress: "Landstrasse 37, 5417 Untersiggenthal",
		coords: {
			longitude: 8.262307,
			latitude: 47.49788,
		},
	},
	{
		name: "Frischholz Benjamin",
		adress: "Chemin de la Dôle 32, 1295 Tannay",
		coords: {
			longitude: 6.176823,
			latitude: 46.312858,
		},
	},
	{
		name: "Blumen Chopard AG",
		adress: "Bahnhofstrasse 73, 3232 Ins",
		coords: {
			longitude: 7.102518,
			latitude: 47.003298,
		},
	},
	{
		name: "Evertis SA",
		adress: "Chemin de Combernesse 9, 1728 Rossens FR",
		coords: {
			longitude: 7.087377,
			latitude: 46.723973,
		},
	},
	{
		name: "Blumen Mischler GmbH",
		adress: "Maygutstrasse 8, 3084 Wabern",
		coords: {
			longitude: 7.45901,
			latitude: 46.925444,
		},
	},
	{
		name: "K. Urech Gartenbau GmbH",
		adress: "Strangengasse 15, 5502 Hunzenschwil",
		coords: {
			longitude: 8.123849,
			latitude: 47.384076,
		},
	},
	{
		name: "KOCEV T. Paysagiste Sàrl",
		adress: "Route de Belfaux 16, 1762 Givisiez",
		coords: {
			longitude: 7.12876,
			latitude: 46.815568,
		},
	},
	{
		name: "Millo et Cie",
		adress: "Route de la Garenne 33, 1214 Vernier",
		coords: {
			longitude: 6.064114,
			latitude: 46.207647,
		},
	},
	{
		name: "Heini AG",
		adress: "beim Friedental, St.-Karli-Strasse 81, 6004 Luzern",
		coords: {
			longitude: 8.290747,
			latitude: 47.058609,
		},
	},
	{
		name: "Blumen Galliker",
		adress: "Rothenburgstrasse 2, 6020 Emmenbrücke",
		coords: {
			longitude: 8.272274,
			latitude: 47.081189,
		},
	},
	{
		name: "Blumenland-Heer",
		adress: "Langenthalerstrasse 2, 4802 Strengelbach",
		coords: {
			longitude: 7.928152,
			latitude: 47.278656,
		},
	},
	{
		name: "Gärtnerei Forster AG",
		adress: "Buchen 5, 3184 Wünnewil",
		coords: {
			longitude: 7.290945,
			latitude: 46.888721,
		},
	},
	{
		name: "JOOS FLORISTIK UND INNENBEGRÜNUNG",
		adress: "Sonnenbergstrasse 6, 7000 Chur",
		coords: {
			longitude: 9.535104,
			latitude: 46.857817,
		},
	},
	{
		name: "Mattmann Gartenbau GmbH",
		adress: "Mittlerriedholz 2, 6030 Ebikon",
		coords: {
			longitude: 8.33394,
			latitude: 47.084908,
		},
	},
	{
		name: "Bluemehüsli - Stadtgärtnerei",
		adress: "Stadtverwaltung Rorschach",
		coords: {
			longitude: 9.500498,
			latitude: 47.471108,
		},
	},
	{
		name: "De Lafontaine Gaëlle et Thierry",
		adress: "Chemin des Avallons 30, 1247 Anières",
		coords: {
			longitude: 6.222352,
			latitude: 46.273043,
		},
	},
	{
		name: "Gärtnerei Stiftung Wagerenhof, Heim für Menschen mit geistiger Behinderung",
		adress: "Wermatswilerstrasse 24, 8610 Uster",
		coords: {
			longitude: 8.728752,
			latitude: 47.350569,
		},
	},
	{
		name: "Urech Garten AG",
		adress: "Heroldstrasse 25, 7000 Chur",
		coords: {
			longitude: 9.519389,
			latitude: 46.8541,
		},
	},
	{
		name: "Luzerner Garten AG",
		adress: "Adligenswilerstrasse 113, 6030 Ebikon",
		coords: {
			longitude: 8.346876,
			latitude: 47.072626,
		},
	},
	{
		name: "Bättig's Blumenwelt GmbH",
		adress: "Hohfurlistrasse 2, 6064 Kerns",
		coords: {
			longitude: 8.276786,
			latitude: 46.901415,
		},
	},
	{
		name: "Johanneum",
		adress: "Johanneumstrasse 3, 9652 Neu St. Johann",
		coords: {
			longitude: 9.192754,
			latitude: 47.229112,
		},
	},
	{
		name: "Guye Paysagiste",
		adress: "Rue de l'Horizon 14A, 2206 Les Geneveys-sur-Coffrane",
		coords: {
			longitude: 6.850108,
			latitude: 47.012829,
		},
	},
	{
		name: "Blütenpracht Hirschi GmbH",
		adress: "Römerstrasse West 1, 3296 Arch",
		coords: {
			longitude: 7.425835,
			latitude: 47.168391,
		},
	},
	{
		name: "Ritschard Jörg",
		adress: "Engwangerstrasse 23, 8556 Wigoltingen",
		coords: {
			longitude: 9.035658,
			latitude: 47.597427,
		},
	},
	{
		name: "Challandes Jean-Philippe et Fabienne",
		adress: "Le Breuil 1, 2043 Boudevilliers",
		coords: {
			longitude: 6.887409,
			latitude: 47.022712,
		},
	},
	{
		name: "La Main Verte",
		adress: "Rue du Pelaz 18, 1269 Bassins",
		coords: {
			longitude: 6.232936,
			latitude: 46.461376,
		},
	},
	{
		name: "Altstetter Blumen",
		adress: "Lindenplatz 4, 8048 Zürich",
		coords: {
			longitude: 8.485995,
			latitude: 47.387208,
		},
	},
	{
		name: "Heid Begrünungen GmbH",
		adress: "Brühlstrasse 45, 4107 Ettingen",
		coords: {
			longitude: 7.537896,
			latitude: 47.485933,
		},
	},
	{
		name: "Debrot Jean-Luc - Cultures et dépôt",
		adress: "Route de Chiètres, 1880 Bex",
		coords: {
			longitude: 7.008002,
			latitude: 46.235322,
		},
	},
	{
		name: "Gschwend Viktor",
		adress: "Arbonerstrasse 34, 9315 Neukirch (Egnach)",
		coords: {
			longitude: 9.375051,
			latitude: 47.527157,
		},
	},
	{
		name: "Blumen Garten Spiez GmbH",
		adress: "Gartenweg 3, 3700 Spiez",
		coords: {
			longitude: 7.678986,
			latitude: 46.689318,
		},
	},
	{
		name: "Brander Anton",
		adress: "Hauptwilerstrasse 28, 9205 Waldkirch",
		coords: {
			longitude: 9.280962,
			latitude: 47.470963,
		},
	},
	{
		name: "Paysages & Jardins Morel Sàrl",
		adress: "Route d'Impart 45, 1648 Hauteville",
		coords: {
			longitude: 7.114779,
			latitude: 46.672213,
		},
	},
	{
		name: "Wachter D. Gartenbau GmbH",
		adress: "Tannerbrüelstrasse 12, 7323 Wangs",
		coords: {
			longitude: 9.44533,
			latitude: 47.029564,
		},
	},
	{
		name: "Nideroest Gärtner AG",
		adress: "Ölistrasse 3, 6440 Brunnen",
		coords: {
			longitude: 8.619172,
			latitude: 47.00689,
		},
	},
	{
		name: "Aquilegia Im Garten Zuhause GmbH",
		adress: "Oberwilerstrasse 6, 8442 Hettlingen",
		coords: {
			longitude: 8.708854,
			latitude: 47.554297,
		},
	},
	{
		name: "Oesch Fleurs & Jardins",
		adress: "Les Chavalets, Route de la Croisette 36, 1659 Rougemont",
		coords: {
			longitude: 7.205904,
			latitude: 46.491184,
		},
	},
	{
		name: "Senn Max",
		adress: "Sunnmattstrasse 4, 8330 Pfäffikon ZH",
		coords: {
			longitude: 8.786154,
			latitude: 47.362435,
		},
	},
	{
		name: "Gärtnerei Bürgin AG",
		adress: "Umfahrungsstrasse 5A, 6467 Schattdorf",
		coords: {
			longitude: 8.641741,
			latitude: 46.853251,
		},
	},
	{
		name: "JSVPAYSAGE",
		adress: "Rue de Frémis 7, 1241 Puplinge",
		coords: {
			longitude: 6.229897,
			latitude: 46.21147,
		},
	},
	{
		name: "ANDREA",
		adress: "Route des Fontaines 6, 1992 La Vernaz (Les Agettes)",
		coords: {
			longitude: 7.370413,
			latitude: 46.209751,
		},
	},
	{
		name: "Blumen Jenni und Gärtnerei",
		adress: "Kleine Kirchgasse 22, 5507 Mellingen",
		coords: {
			longitude: 8.273927,
			latitude: 47.418042,
		},
	},
	{
		name: "Herboland",
		adress: "Felmismoosweg 1, 6048 Horw",
		coords: {
			longitude: 8.32386,
			latitude: 47.020002,
		},
	},
	{
		name: "Dobler Gärtnerei AG",
		adress: "Langjurtenstrasse 10, 4132 Muttenz",
		coords: {
			longitude: 7.658468,
			latitude: 47.512138,
		},
	},
	{
		name: "Widmer Hanspeter",
		adress: "Dorfstrasse 40, 3463 Häusernmoos im Emmental",
		coords: {
			longitude: 7.743976,
			latitude: 47.077383,
		},
	},
	{
		name: "Benz Gärtnerei",
		adress: "Brunnenackerstrasse 4, 9437 Marbach SG",
		coords: {
			longitude: 9.567992,
			latitude: 47.390753,
		},
	},
	{
		name: "Fiori Vidal",
		adress: "Corso San Gottardo 145, 6830 Chiasso",
		coords: {
			longitude: 9.019277,
			latitude: 45.839324,
		},
	},
	{
		name: "Blumen Hirter AG",
		adress: "Dorfstrasse 44, 3123 Belp",
		coords: {
			longitude: 7.501367,
			latitude: 46.890645,
		},
	},
	{
		name: "Blumen Specker",
		adress: "Rorschacherstrasse 95, 9424 Rheineck",
		coords: {
			longitude: 9.577997,
			latitude: 47.475225,
		},
	},
	{
		name: "Hauenstein AG",
		adress: "Landstrasse 42, 8197 Rafz",
		coords: {
			longitude: 8.5436,
			latitude: 47.612171,
		},
	},
	{
		name: "Güttinger Ernst et Marlys",
		adress: "Chemin de l'Haut des Champs 2, 1313 Ferreyres",
		coords: {
			longitude: 6.480876,
			latitude: 46.659996,
		},
	},
	{
		name: "Zimmermann Gartenbau AG",
		adress: "Hebelweg 6, 5000 Aarau",
		coords: {
			longitude: 8.047227,
			latitude: 47.385566,
		},
	},
	{
		name: "Die Wildstaudengärtnerei",
		adress: "Neumühle 2, 6274 Eschenbach LU",
		coords: {
			longitude: 8.316224,
			latitude: 47.108082,
		},
	},
	{
		name: "Huber Emil AG",
		adress: "Zelgli, 6286 Altwis",
		coords: {
			longitude: 8.248494,
			latitude: 47.236563,
		},
	},
	{
		name: "Kräutergärtnerei Moll GmbH",
		adress: "Grabenmattenstrasse 18, 5608 Stetten AG",
		coords: {
			longitude: 8.315614,
			latitude: 47.404853,
		},
	},
	{
		name: "Eichenberger Franz",
		adress: "Untere Sandstrasse 19, 5712 Beinwil am See",
		coords: {
			longitude: 8.204478,
			latitude: 47.260701,
		},
	},
	{
		name: "Abderhalden Gartenbau AG",
		adress: "Schönenbodenstrasse 114, 9658 Wildhaus",
		coords: {
			longitude: 9.375111,
			latitude: 47.205217,
		},
	},
	{
		name: "Blumen Dülli",
		adress: "Biberweg 13, 8240 Thayngen",
		coords: {
			longitude: 8.704449,
			latitude: 47.751344,
		},
	},
	{
		name: "Meili Markus",
		adress: "Espiweg 34, 8260 Stein am Rhein",
		coords: {
			longitude: 8.854365,
			latitude: 47.659031,
		},
	},
	{
		name: "Zumstein Michael Gärtnerei",
		adress: "Mittlerfeldweg 34, 4124 Schönenbuch",
		coords: {
			longitude: 7.505012,
			latitude: 47.535341,
		},
	},
	{
		name: "Regionales Wohn- und Pflegeheim St. Niklaus",
		adress: "Bern-Zürichstrasse 38, 3425 Koppigen",
		coords: {
			longitude: 7.61829,
			latitude: 47.130988,
		},
	},
	{
		name: "Rodrigues Joaquim",
		adress: "Route de Saint-Georges 96, 1213 Petit-Lancy",
		coords: {
			longitude: 6.115646,
			latitude: 46.197179,
		},
	},
	{
		name: "Stiftung Lerchenbühl",
		adress: "Lerchenbühlweg 9, 3400 Burgdorf",
		coords: {
			longitude: 7.610351,
			latitude: 47.059553,
		},
	},
	{
		name: "Blumeninsel Huttwil AG",
		adress: "Fiechtenstrasse 5, 4950 Huttwil",
		coords: {
			longitude: 7.837214,
			latitude: 47.114742,
		},
	},
	{
		name: "Ehrle Gärtnerei Martin & Stefanie",
		adress: "In der Halden 418, 8320 Fehraltorf",
		coords: {
			longitude: 8.748803,
			latitude: 47.403255,
		},
	},
	{
		name: "Tschalèr Pius",
		adress: "Via da Vegnas 2, 7403 Rhäzüns",
		coords: {
			longitude: 9.395118,
			latitude: 46.798103,
		},
	},
	{
		name: "Blueme Kari AG",
		adress: "Bahnhofstrasse 20, 5200 Brugg AG",
		coords: {
			longitude: 8.207324,
			latitude: 47.481519,
		},
	},
	{
		name: "Berner",
		adress: "Käterlistrasse 45, 5102 Rupperswil",
		coords: {
			longitude: 8.12177,
			latitude: 47.399568,
		},
	},
	{
		name: "Entreprise Vert-Tige",
		adress: "Route des Chevaliers-de-Malte 43, 1228 Plan-les-Ouates",
		coords: {
			longitude: 6.12318,
			latitude: 46.164221,
		},
	},
	{
		name: "Blumen Jerg",
		adress: "Gärtnerweg 8, 9403 Goldach",
		coords: {
			longitude: 9.479923,
			latitude: 47.472985,
		},
	},
	{
		name: "Gärtnerei Ziegler Samuel",
		adress: "Sonnenhofweg 1, 8810 Horgen",
		coords: {
			longitude: 8.619974,
			latitude: 47.229755,
		},
	},
	{
		name: "Thüring Matthias",
		adress: "Gartenstrasse 2, 4107 Ettingen",
		coords: {
			longitude: 7.542293,
			latitude: 47.481846,
		},
	},
	{
		name: "BV Jardins de Bellevue Sàrl",
		adress: "Route de Tranchepied 36, 1277 Borex",
		coords: {
			longitude: 6.174094,
			latitude: 46.381482,
		},
	},
	{
		name: "Blumen Sardi",
		adress: "Wiesenstrasse 27, 3073 Gümligen",
		coords: {
			longitude: 7.496433,
			latitude: 46.940409,
		},
	},
	{
		name: "Ellenberger Susanne",
		adress: "Herrengasse 19, 3011 Bern",
		coords: {
			longitude: 7.449679,
			latitude: 46.946971,
		},
	},
	{
		name: "BlühLang Gärtnerei GmbH",
		adress: "Beim Friedhof, Schützenhausstrasse, 8750 Glarus",
		coords: {
			longitude: 9.066425,
			latitude: 47.038409,
		},
	},
	{
		name: "Gärtnerei Egli GmbH",
		adress: "Lätten 17, 8132 Egg b. Zürich",
		coords: {
			longitude: 8.699543,
			latitude: 47.30201,
		},
	},
	{
		name: "Dupasquier José",
		adress: "Route des Combes 1, 1628 Vuadens",
		coords: {
			longitude: 7.02753,
			latitude: 46.616401,
		},
	},
	{
		name: "Gärtnerei Hüssy AG",
		adress: "Sandgrubenstrasse 11, 8330 Pfäffikon ZH",
		coords: {
			longitude: 8.776576,
			latitude: 47.36852,
		},
	},
	{
		name: "Kurt Burkart Pflanzenservice",
		adress: "Sennhofweg 18C, 4310 Rheinfelden",
		coords: {
			longitude: 7.781196,
			latitude: 47.545459,
		},
	},
	{
		name: "Gärtnernei Messmer AG",
		adress: "Littenbachstrasse 1351, 9442 Berneck",
		coords: {
			longitude: 9.624729,
			latitude: 47.430174,
		},
	},
	{
		name: "Gärtnerei van Oordt",
		adress: "Chessibülstrasse 19, 8712 Stäfa",
		coords: {
			longitude: 8.732645,
			latitude: 47.244278,
		},
	},
	{
		name: "Gärtnerei Neuhäusler",
		adress: "Funtanatscha 116a, 7550 Scuol",
		coords: {
			longitude: 10.297466,
			latitude: 46.795618,
		},
	},
	{
		name: "Lauper Brigitte",
		adress: "Paradiesstrasse 2, 4573 Lohn-Ammannsegg",
		coords: {
			longitude: 7.53566,
			latitude: 47.173587,
		},
	},
	{
		name: "Wüthrich Heinz AG",
		adress: "Vockigenstrasse 8, 6055 Alpnach Dorf",
		coords: {
			longitude: 8.269009,
			latitude: 46.940081,
		},
	},
	{
		name: "Esprit Jardins Sàrl",
		adress: "Route des Jeunes 49, 1227 Carouge GE",
		coords: {
			longitude: 6.130126,
			latitude: 46.181738,
		},
	},
	{
		name: "Jardin Passion",
		adress: "Route du Vallon 82, 1720 Chésopelloz",
		coords: {
			longitude: 7.080242,
			latitude: 46.807249,
		},
	},
	{
		name: "Dietz Robert AG",
		adress: "Werdstrasse 5, 9410 Heiden",
		coords: {
			longitude: 9.530435,
			latitude: 47.442473,
		},
	},
	{
		name: "Blumen Mathys & Co",
		adress: "Haslifeldweg 15, 3672 Oberdiessbach",
		coords: {
			longitude: 7.62545,
			latitude: 46.847342,
		},
	},
	{
		name: "Blueme Kari AG",
		adress: "Hauptstrasse 83, 5274 Mettau",
		coords: {
			longitude: 8.129143,
			latitude: 47.562807,
		},
	},
	{
		name: "Carrard Lionel Paysagiste",
		adress: "Chemin des Essinges 10, 1041 Poliez-Pittet",
		coords: {
			longitude: 6.683826,
			latitude: 46.629543,
		},
	},
	{
		name: "Schierscher Florin",
		adress: "Wiesengass 50, 9494 Schaan",
		coords: {
			longitude: 9.5016,
			latitude: 47.16431,
		},
	},
	{
		name: "Blumen Flückiger",
		adress: "Oberdorfstrasse 1, 5443 Niederrohrdorf",
		coords: {
			longitude: 8.304855,
			latitude: 47.424354,
		},
	},
	{
		name: "Dähler Gartenunterhalt",
		adress: "Gaiserau 34, 9056 Gais",
		coords: {
			longitude: 9.451663,
			latitude: 47.359505,
		},
	},
	{
		name: "Bio-Gärtnerei am Hirtenweg GmbH",
		adress: "Hirtenweg 30, 4125 Riehen",
		coords: {
			longitude: 7.641626,
			latitude: 47.562066,
		},
	},
	{
		name: "Brechbühl Fleurs",
		adress: "Route Neuve 12A, 1595 Faoug",
		coords: {
			longitude: 7.072339,
			latitude: 46.905652,
		},
	},
	{
		name: "Herrmann Garten & Blumen AG",
		adress: "Deinikon 3, 6340 Baar",
		coords: {
			longitude: 8.539313,
			latitude: 47.204818,
		},
	},
	{
		name: "Kipper AG Gärtnerei",
		adress: "Stäge 2, 8594 Güttingen",
		coords: {
			longitude: 9.276968,
			latitude: 47.608731,
		},
	},
	{
		name: "Dietwyler Martin",
		adress: "Haselweg 3, 5235 Rüfenach AG",
		coords: {
			longitude: 8.208061,
			latitude: 47.515027,
		},
	},
	{
		name: "Gemüsegärtnerei Wettstein",
		adress: "Ettenbühlstrasse 32, 8353 Elgg",
		coords: {
			longitude: 8.87125,
			latitude: 47.499044,
		},
	},
	{
		name: "Blaser Andreas",
		adress: "Kohlplatzstrasse 20, 4932 Lotzwil",
		coords: {
			longitude: 7.794451,
			latitude: 47.189441,
		},
	},
	{
		name: "Olimpio Vidal",
		adress: "Via Lischée 16, 6834 Morbio Inferiore",
		coords: {
			longitude: 9.022087,
			latitude: 45.847903,
		},
	},
	{
		name: "Pantet Anne",
		adress: "Route des Rosalys 320, 1619 Les Paccots",
		coords: {
			longitude: 6.962544,
			latitude: 46.515655,
		},
	},
	{
		name: "Elsensohn Gärtnerei",
		adress: "Neugutweg 9, 9490 Vaduz",
		coords: {
			longitude: 9.520903,
			latitude: 47.126378,
		},
	},
	{
		name: "Jardin des Senteurs",
		adress: "en face de la, Rue de la Dîme 79, 2000 Neuchâtel",
		coords: {
			longitude: 6.963362,
			latitude: 47.009191,
		},
	},
	{
		name: "Hauenstein AG",
		adress: "Imstlerwäg 2, 8197 Rafz",
		coords: {
			longitude: 8.543497,
			latitude: 47.60789,
		},
	},
	{
		name: "Chutzegarte GmbH",
		adress: "Chutzenstrasse 2, 3047 Bremgarten b. Bern",
		coords: {
			longitude: 7.437449,
			latitude: 46.975936,
		},
	},
	{
		name: "Steiner jardin Sàrl",
		adress: "Route de Sonceboz 15, 2604 La Heutte",
		coords: {
			longitude: 7.222694,
			latitude: 47.19018,
		},
	},
	{
		name: "Clément Paysagisme",
		adress: "Chemin du Pralet 3, 1731 Ependes FR",
		coords: {
			longitude: 7.147828,
			latitude: 46.754638,
		},
	},
	{
		name: "Gärtnerei Ilfisbrücke",
		adress: "Zürchermatte 20, 3550 Langnau im Emmental",
		coords: {
			longitude: 7.774241,
			latitude: 46.943631,
		},
	},
	{
		name: "Ethenoz Fleurs S.A.",
		adress: "Chemin des Catons 5, 1258 Perly, Certoux",
		coords: {
			longitude: 6.081227,
			latitude: 46.156463,
		},
	},
	{
		name: "Curti Stéphane",
		adress: "Chemin des Réservoirs 2, 1278 La Rippe",
		coords: {
			longitude: 6.151088,
			latitude: 46.386243,
		},
	},
	{
		name: "SCHANIEL Gartenbau Floristik AG",
		adress: "Grabenstrasse 8, 7304 Maienfeld",
		coords: {
			longitude: 9.532534,
			latitude: 47.007831,
		},
	},
	{
		name: "Borner Pflanzen GmbH",
		adress: "Lettenstrasse 37, 5506 Mägenwil",
		coords: {
			longitude: 8.232913,
			latitude: 47.41101,
		},
	},
	{
		name: "HATTGARTEN GmbH",
		adress: "Glockenstrasse 10, 4415 Lausen",
		coords: {
			longitude: 7.759827,
			latitude: 47.475674,
		},
	},
	{
		name: "Abderhalden Blumen & Garten GmbH",
		adress: "Kirchgasse 13, 9472 Grabs",
		coords: {
			longitude: 9.441928,
			latitude: 47.180508,
		},
	},
	{
		name: "JBS Jardins Sàrl",
		adress: "Planche-Inférieure 35, 1700 Fribourg",
		coords: {
			longitude: 7.165986,
			latitude: 46.802773,
		},
	},
	{
		name: "Friedhofsgärtnerei Reding",
		adress: "Friedhofweg 7, 5200 Brugg AG",
		coords: {
			longitude: 8.212761,
			latitude: 47.484029,
		},
	},
	{
		name: "Martinelli Fioricoltura",
		adress: "Via al Piano, 6514 Sementina",
		coords: {
			longitude: 8.988381,
			latitude: 46.181658,
		},
	},
	{
		name: "Samen Glättli + Co GmbH",
		adress: "Rotackerstrasse 29, 8304 Wallisellen",
		coords: {
			longitude: 8.594006,
			latitude: 47.41338,
		},
	},
	{
		name: "Cyril Saudan Paysage & Création",
		adress: "Chemin du Bois Chexbres 8, 1805 Jongny",
		coords: {
			longitude: 6.841988,
			latitude: 46.489294,
		},
	},
	{
		name: "Gärtnerei Vrenelis Gärtli GmbH",
		adress: "Oberdorfstrasse 10, 8750 Glarus",
		coords: {
			longitude: 9.06332,
			latitude: 47.041476,
		},
	},
	{
		name: "Blumen Hoch Inhaber R. Zogg GmbH",
		adress: "Tramstrasse 71, 5034 Suhr",
		coords: {
			longitude: 8.07394,
			latitude: 47.380098,
		},
	},
	{
		name: "Blumen Vergissmeinnicht",
		adress: "Walenseestrasse 18a, 8882 Unterterzen",
		coords: {
			longitude: 9.254701,
			latitude: 47.11378,
		},
	},
	{
		name: "Blumen Tschäppeler",
		adress: "Hellgasse 2, 3128 Kirchenthurnen",
		coords: {
			longitude: 7.501422,
			latitude: 46.824979,
		},
	},
	{
		name: "Arboriparc LF SA",
		adress: "Chemin de Platton 30, 1256 Troinex",
		coords: {
			longitude: 6.160359,
			latitude: 46.154635,
		},
	},
	{
		name: "Winkenbach Hausen GmbH",
		adress: "Büntefeldstrasse 22, 5212 Hausen AG",
		coords: {
			longitude: 8.208108,
			latitude: 47.465054,
		},
	},
	{
		name: "Vetterli Schnittblumen AG",
		adress: "Unterdorfstrasse 3, 8916 Jonen",
		coords: {
			longitude: 8.385248,
			latitude: 47.297345,
		},
	},
	{
		name: "Fleischlin Gebr. Blumen + Gärtnerei",
		adress: "Rickenstrasse 1, 8730 Uznach",
		coords: {
			longitude: 8.988447,
			latitude: 47.225872,
		},
	},
	{
		name: "T&O Meisterflorist",
		adress: "Am Bogen 2, 5620 Bremgarten AG",
		coords: {
			longitude: 8.341071,
			latitude: 47.351264,
		},
	},
	{
		name: "Blumen Strub",
		adress: "Spittelstrasse 24, 8872 Weesen",
		coords: {
			longitude: 9.092809,
			latitude: 47.134317,
		},
	},
	{
		name: "Biogärtnerei & Naturgärten Neubauer",
		adress: "Lenzenhausstrasse 9, 8586 Erlen",
		coords: {
			longitude: 9.223586,
			latitude: 47.554609,
		},
	},
	{
		name: "Widler Gartenbau + Floristik AG",
		adress: "Dörfli 7, 6036 Dierikon",
		coords: {
			longitude: 8.371098,
			latitude: 47.097332,
		},
	},
	{
		name: "Blumen Gerber & Co.",
		adress: "Stockhornstrasse 9, 3612 Steffisburg",
		coords: {
			longitude: 7.629755,
			latitude: 46.770703,
		},
	},
	{
		name: "JEHLE Garten + Floristik AG",
		adress: "Im Loma 17, 9494 Schaan",
		coords: {
			longitude: 9.500147,
			latitude: 47.167009,
		},
	},
	{
		name: "Arnet Gärtnerei",
		adress: "Mööslimatten 6, 6218 Ettiswil",
		coords: {
			longitude: 8.02123,
			latitude: 47.146772,
		},
	},
	{
		name: "Hartmann Gartenpflege",
		adress: "Helgengüetlistrasse 23, 6015 Luzern",
		coords: {
			longitude: 8.281728,
			latitude: 47.063507,
		},
	},
	{
		name: "Blatti AG",
		adress: "Uttigenstrasse 56, 3661 Uetendorf",
		coords: {
			longitude: 7.591624,
			latitude: 46.777786,
		},
	},
	{
		name: "Blumen Spengler AG",
		adress: "Im Hof 16, 8606 Greifensee",
		coords: {
			longitude: 8.681393,
			latitude: 47.364789,
		},
	},
	{
		name: "Pflanzenboutique Monika Herzog",
		adress: "Buchenweg 1, 6287 Aesch LU",
		coords: {
			longitude: 8.24569,
			latitude: 47.259871,
		},
	},
	{
		name: "Domenico Iaderosa & Fils",
		adress: "Chemin du Cossy 9, 1260 Nyon",
		coords: {
			longitude: 6.231499,
			latitude: 46.386842,
		},
	},
	{
		name: "Blueme Kari AG",
		adress: "Oberdorfstrasse 7, 5703 Seon",
		coords: {
			longitude: 8.158939,
			latitude: 47.345456,
		},
	},
	{
		name: "Felix Gartenbau AG",
		adress: "Mühlau 844, 9602 Bazenheid",
		coords: {
			longitude: 9.078508,
			latitude: 47.412009,
		},
	},
	{
		name: "Blumen Rüegg",
		adress: "Pfarrgässli 1, 3454 Sumiswald",
		coords: {
			longitude: 7.745603,
			latitude: 47.028077,
		},
	},
	{
		name: "Stettler Blumen",
		adress: "Vordere Dorfgasse 13, 3073 Gümligen",
		coords: {
			longitude: 7.511764,
			latitude: 46.933834,
		},
	},
	{
		name: "Aareblumen AG",
		adress: "Talstrasse 35, 5106 Veltheim AG",
		coords: {
			longitude: 8.160046,
			latitude: 47.423441,
		},
	},
	{
		name: "Blumenheini",
		adress: "Lutenwilerstrasse 1, 9650 Nesslau",
		coords: {
			longitude: 9.199523,
			latitude: 47.226922,
		},
	},
	{
		name: "Jakob Antoinette",
		adress: "Route de Châtillon 7, 1470 Lully FR",
		coords: {
			longitude: 6.843092,
			latitude: 46.832452,
		},
	},
	{
		name: "BLUMEN GALERIE",
		adress: "Platz 12, 9100 Herisau",
		coords: {
			longitude: 9.278742,
			latitude: 47.385711,
		},
	},
	{
		name: "Blumen Finsterwald GmbH",
		adress: "Hauptstrasse 4, 6170 Schüpfheim",
		coords: {
			longitude: 8.018183,
			latitude: 46.954064,
		},
	},
	{
		name: "Blumen Barbara",
		adress: "Am Landsgemeindeplatz, Zielstrasse 2, 9050 Appenzell",
		coords: {
			longitude: 9.408085,
			latitude: 47.331871,
		},
	},
	{
		name: "Blumenheini",
		adress: "Bergstrasse 9, 9113 Degersheim",
		coords: {
			longitude: 9.196345,
			latitude: 47.373203,
		},
	},
	{
		name: "Blumen Kaspar AG",
		adress: "Ulmenweg 11, 3604 Thun",
		coords: {
			longitude: 7.613486,
			latitude: 46.739713,
		},
	},
	{
		name: "Ground Up",
		adress: "Chemin des Bougeries 9, 1228 Plan-les-Ouates",
		coords: {
			longitude: 6.117163,
			latitude: 46.164601,
		},
	},
	{
		name: "Keller Urs",
		adress: "Kirchstrasse 10, 8588 Zihlschlacht",
		coords: {
			longitude: 9.258251,
			latitude: 47.521486,
		},
	},
	{
		name: "Pflanzenschau AG",
		adress: "Grüningerstrasse 100, 8634 Hombrechtikon",
		coords: {
			longitude: 8.764552,
			latitude: 47.261997,
		},
	},
	{
		name: "Rollier Paysage SA",
		adress: "Rue du Collège 25, 2043 Boudevilliers",
		coords: {
			longitude: 6.884594,
			latitude: 47.029013,
		},
	},
	{
		name: "Eulenhof Staudengärtnerei",
		adress: "Schaufelgasse 34a, 4313 Möhlin",
		coords: {
			longitude: 7.854169,
			latitude: 47.549808,
		},
	},
	{
		name: "Blumen Müller AG",
		adress: "Nellenweg 22, 6206 Neuenkirch",
		coords: {
			longitude: 8.204717,
			latitude: 47.094864,
		},
	},
	{
		name: "Blumen Suter Emmenbrücke AG",
		adress: "Rüeggisingerstrasse 59, 6020 Emmenbrücke",
		coords: {
			longitude: 8.282669,
			latitude: 47.081455,
		},
	},
	{
		name: "B&J Jezdimirovic",
		adress: "Chemin du Milieu 32, 1245 Collonge-Bellerive",
		coords: {
			longitude: 6.19707,
			latitude: 46.258085,
		},
	},
	{
		name: "Altiplant SA",
		adress: "Route de la Poâ 20, 1966 Signèse (Ayent)",
		coords: {
			longitude: 7.397299,
			latitude: 46.259788,
		},
	},
	{
		name: "Artha Samen",
		adress: "Schwand 1, 3110 Münsingen",
		coords: {
			longitude: 7.558755,
			latitude: 46.888602,
		},
	},
	{
		name: "Rütschi AG",
		adress: "Schmalzgasse 6, 8215 Hallau",
		coords: {
			longitude: 8.456663,
			latitude: 47.695361,
		},
	},
	{
		name: "Les fleurs d'Alena",
		adress: "Sur la Motta 8, 1721 Cournillens",
		coords: {
			longitude: 7.106948,
			latitude: 46.857147,
		},
	},
	{
		name: "Bianca Fleurs Aline",
		adress: "Chemin de la Comba 3, 1616 Attalens",
		coords: {
			longitude: 6.847071,
			latitude: 46.511603,
		},
	},
	{
		name: "Blumen Rusterholz",
		adress: "Wiesengrund 1, 8824 Schönenberg ZH",
		coords: {
			longitude: 8.647745,
			latitude: 47.191738,
		},
	},
	{
		name: "Plantes Vertes Service",
		adress: "Route d'Arzier, 1264 St-Cergue",
	},
	{
		name: "Thommen Gärtnerei",
		adress: "Im Schaufelacker, 4313 Möhlin",
		coords: {
			longitude: 7.848368,
			latitude: 47.548597,
		},
	},
	{
		name: "Blumen Bergmann",
		adress: "Flugbrunnenstrasse 422, 3065 Bolligen",
		coords: {
			longitude: 7.506693,
			latitude: 46.974252,
		},
	},
	{
		name: "Bangerter Daniel u. Susanne",
		adress: "Hauptstrasse 19, 3273 Kappelen",
		coords: {
			longitude: 7.273561,
			latitude: 47.079268,
		},
	},
	{
		name: "Blattstiel AG",
		adress: "Bahnhofstrasse 48, 9602 Bazenheid",
		coords: {
			longitude: 9.064673,
			latitude: 47.408993,
		},
	},
	{
		name: "Blueme-Hans",
		adress: "Jucher 64A, 3036 Detligen",
		coords: {
			longitude: 7.262221,
			latitude: 47.004619,
		},
	},
	{
		name: "Blueme Judith",
		adress: "Marktgasse 36, 9450 Altstätten SG",
		coords: {
			longitude: 9.539285,
			latitude: 47.377756,
		},
	},
	{
		name: "Blumengärtnerei Wismer AG",
		adress: "beim Friedhof, Kirchmattstrasse 10, 6300 Zug",
		coords: {
			longitude: 8.519583,
			latitude: 47.161898,
		},
	},
	{
		name: "Butty Fleurs et Jardins SA",
		adress: "La Pussaz 27, 1510 Moudon",
		coords: {
			longitude: 6.791785,
			latitude: 46.654228,
		},
	},
	{
		name: "Florarte Pflanzenhotel",
		adress: "Bärmattweg 6, 3324 Hindelbank",
		coords: {
			longitude: 7.543098,
			latitude: 47.050153,
		},
	},
	{
		name: "Gärtnerei Bieri-Lehmann",
		adress: "Längersmattstrasse 13, 3297 Leuzigen",
		coords: {
			longitude: 7.462281,
			latitude: 47.177861,
		},
	},
	{
		name: "Gärtnerei Kummer",
		adress: "Bahnhofstrasse 20, 4622 Egerkingen",
		coords: {
			longitude: 7.795569,
			latitude: 47.319653,
		},
	},
	{
		name: "Gärtnerei Meier AG",
		adress: "Dättlikonstrasse 3, 8413 Neftenbach",
		coords: {
			longitude: 8.64963,
			latitude: 47.52148,
		},
	},
	{
		name: "Gärtnerei Nidelbad",
		adress: "Eggrainweg 3, 8803 Rüschlikon",
		coords: {
			longitude: 8.548605,
			latitude: 47.305244,
		},
	},
	{
		name: "Gärtnerei Rindlisbacher GmbH",
		adress: "Kandergrien 2120, 3646 Einigen",
		coords: {
			longitude: 7.640007,
			latitude: 46.71477,
		},
	},
	{
		name: "Gärtnerei Rohner GmbH",
		adress: "Wiesenstrasse 15, 9445 Rebstein",
		coords: {
			longitude: 9.585326,
			latitude: 47.397424,
		},
	},
	{
		name: "Gfeller Hans-Rudolf",
		adress: "Steinweid 44, 3454 Sumiswald",
		coords: {
			longitude: 7.771235,
			latitude: 47.022609,
		},
	},
	{
		name: "Gisler",
		adress: "Hubelstrasse 20, 5524 Niederwil AG",
		coords: {
			longitude: 8.2967,
			latitude: 47.381357,
		},
	},
	{
		name: "Gündel Roger",
		adress: "Birchhausstrasse 593, 8966 Oberwil-Lieli",
		coords: {
			longitude: 8.404233,
			latitude: 47.33816,
		},
	},
	{
		name: "Jardin&Décoration SA",
		adress: "Chemin de la Charbonne, 1285 Athenaz (Avusy)",
		coords: {
			longitude: 5.991567,
			latitude: 46.154187,
		},
	},
	{
		name: "Kakteen Gautschi",
		adress: "Wilstrasse 1, 5503 Schafisheim",
		coords: {
			longitude: 8.141327,
			latitude: 47.371783,
		},
	},
	{
		name: "Kappelhof Gärtnerei",
		adress: "Kappelhof 5, 9300 Wittenbach",
		coords: {
			longitude: 9.397597,
			latitude: 47.461021,
		},
	},
	{
		name: "Karrer Gärtnerei AG",
		adress: "Weinmanngasse 65, 8700 Küsnacht ZH",
		coords: {
			longitude: 8.593536,
			latitude: 47.320832,
		},
	},
	{
		name: "Lapaire Gérard",
		adress: "Chemin des Combes 62, 2902 Fontenais",
		coords: {
			longitude: 7.077469,
			latitude: 47.398695,
		},
	},
	{
		name: "Maeder's Pflanzenhof",
		adress: "Galgenhubelweg 1, 3096 Oberbalm",
		coords: {
			longitude: 7.411493,
			latitude: 46.875915,
		},
	},
	{
		name: "Nafzger Herbert",
		adress: "Florastrasse 26, 8590 Romanshorn",
		coords: {
			longitude: 9.375579,
			latitude: 47.561677,
		},
	},
	{
		name: "Richard Huber AG Dottikon",
		adress: "Rotenbühlstrasse 8, 5605 Dottikon",
		coords: {
			longitude: 8.236726,
			latitude: 47.39133,
		},
	},
	{
		name: "Roduit-Plants SA",
		adress: "Chemin de Grand-Barre 20, 1926 Fully",
		coords: {
			longitude: 7.136026,
			latitude: 46.138262,
		},
	},
	{
		name: "Rutishauser AG",
		adress: "In der Breiti 3, 8117 Fällanden",
		coords: {
			longitude: 8.628146,
			latitude: 47.380336,
		},
	},
	{
		name: "Zbinden Fredi",
		adress: "Thurtalstrasse 32, 8450 Andelfingen",
		coords: {
			longitude: 8.683107,
			latitude: 47.59526,
		},
	},
	{
		name: "Zulauf Gärtnerei-Floristik-Gartenbau AG",
		adress: "Baselstrasse 25, 6252 Dagmersellen",
		coords: {
			longitude: 7.985628,
			latitude: 47.214867,
		},
	},
	{
		name: "Adem Paysagiste",
		adress: "Ruelle de l'Ecusson 4, 1261 Le Vaud",
		coords: {
			longitude: 6.234828,
			latitude: 46.477555,
		},
	},
	{
		name: "Aeschlimann André",
		adress: "Noflenweg 8, 3177 Laupen BE",
		coords: {
			longitude: 7.240885,
			latitude: 46.900267,
		},
	},
	{
		name: "Albisrieder Pflanzen",
		adress: "Hagenbuchrain 100, 8047 Zürich",
		coords: {
			longitude: 8.484124,
			latitude: 47.369496,
		},
	},
	{
		name: "Alpin Blumen- und Gartencenter",
		adress: "7460 Savognin",
		coords: {
			longitude: 9.598657,
			latitude: 46.596323,
		},
	},
	{
		name: "Alpin Blumen- und Gartencenter",
		adress: "7430 Thusis",
		coords: {
			longitude: 9.439443,
			latitude: 46.69577,
		},
	},
	{
		name: "Alte Stadtgärtnerei Koller & Neukom",
		adress: "Mühlemattstrasse 79, 5000 Aarau",
		coords: {
			longitude: 8.049663,
			latitude: 47.395897,
		},
	},
	{
		name: "Arnold Gerold",
		adress: "Kirchbühl 6, 6330 Cham",
		coords: {
			longitude: 8.45844,
			latitude: 47.179304,
		},
	},
	{
		name: "Bachmann Beat und Sylvia",
		adress: "Herrentrottenstrasse 2, 8542 Wiesendangen",
		coords: {
			longitude: 8.798646,
			latitude: 47.524575,
		},
	},
	{
		name: "Ballestraz Steve",
		adress: "Route de Loye 9, 3979 Grône",
		coords: {
			longitude: 7.460442,
			latitude: 46.25079,
		},
	},
	{
		name: "Beeri Martin",
		adress: "Blumenweg 9, 3308 Grafenried",
		coords: {
			longitude: 7.514438,
			latitude: 47.081162,
		},
	},
	{
		name: "Bigger Gartenbau AG",
		adress: "Weiligstrasse 6, 7310 Bad Ragaz",
		coords: {
			longitude: 9.499055,
			latitude: 47.004038,
		},
	},
	{
		name: "Biogärtnerei Zimmermann Emanuel",
		adress: "Oberwil, 6048 Horw",
		coords: {
			longitude: 8.332601,
			latitude: 47.018837,
		},
	},
	{
		name: "BK jardinage",
		adress: "Route du Mandement 125, 1242 Satigny",
		coords: {
			longitude: 6.033782,
			latitude: 46.216009,
		},
	},
	{
		name: "Blumen Brechbühl",
		adress: "Sägestrasse 23, 3415 Rüegsauschachen",
		coords: {
			longitude: 7.65537,
			latitude: 47.020762,
		},
	},
	{
		name: "Blumen Heiniger",
		adress: "Ringgeliweg 3, 3472 Wynigen",
		coords: {
			longitude: 7.672173,
			latitude: 47.107145,
		},
	},
	{
		name: "Blumen Looser",
		adress: "Badstrasse 8a, 9410 Heiden",
		coords: {
			longitude: 9.530155,
			latitude: 47.444799,
		},
	},
	{
		name: "Blumen Muggli AG",
		adress: "Luzernerstrasse 18, 6045 Meggen",
		coords: {
			longitude: 8.368478,
			latitude: 47.045017,
		},
	},
	{
		name: "Blumen Schaffner AG",
		adress: "Hauptstrasse 158, 4466 Ormalingen",
		coords: {
			longitude: 7.873346,
			latitude: 47.469466,
		},
	},
	{
		name: "Blumenladen OESCHBERG",
		adress: "Bern-Zürichstrasse 14, 3425 Koppigen",
		coords: {
			longitude: 7.612241,
			latitude: 47.127237,
		},
	},
	{
		name: "Bonny Fleurs",
		adress: "Chemin des Roseaux 12, 1543 Grandcour",
		coords: {
			longitude: 6.927606,
			latitude: 46.869986,
		},
	},
	{
		name: "Bonsaigarten",
		adress: "Landshutstrasse 8, 3427 Utzenstorf",
		coords: {
			longitude: 7.552776,
			latitude: 47.133427,
		},
	},
	{
		name: "Brühlmann Andreas",
		adress: "Sarganserstrasse 5, 8880 Walenstadt",
		coords: {
			longitude: 9.313697,
			latitude: 47.120282,
		},
	},
	{
		name: "Burdin Jardins",
		adress: "Chemin de la Reine-Berthe 2, 1040 St-Barthélemy VD",
		coords: {
			longitude: 6.606798,
			latitude: 46.636031,
		},
	},
	{
		name: "Chabry Thierry",
		adress: "Route de Valavran 62, 1293 Bellevue",
		coords: {
			longitude: 6.14265,
			latitude: 46.257933,
		},
	},
	{
		name: "Erlenhof",
		adress: "Erlenhofstrasse 48, 4153 Reinach BL",
		coords: {
			longitude: 7.571623,
			latitude: 47.490639,
		},
	},
	{
		name: "ESCHMANN Pflanzen",
		adress: "Waltwil 51, 6032 Emmen",
		coords: {
			longitude: 8.328481,
			latitude: 47.101169,
		},
	},
	{
		name: "Federer Josef-Anton",
		adress: "St. Jodernstrasse 23, 3930 Visp",
		coords: {
			longitude: 7.884658,
			latitude: 46.285538,
		},
	},
	{
		name: "Fiechter Rosa",
		adress: "Landbergstrasse 33, 9230 Flawil",
		coords: {
			longitude: 9.192441,
			latitude: 47.410714,
		},
	},
	{
		name: "Formicola Bruno",
		adress: "Impasse de l'Epine 12, 1564 Domdidier",
		coords: {
			longitude: 7.008549,
			latitude: 46.869843,
		},
	},
	{
		name: "Frangi RDG SA",
		adress: "Route des Fayards 262, 1290 Versoix",
		coords: {
			longitude: 6.164053,
			latitude: 46.273867,
		},
	},
	{
		name: "Friedhofgärtnerei S+M Meier",
		adress: "Stöcklisrainstrasse 7B, 4654 Lostorf",
		coords: {
			longitude: 7.940581,
			latitude: 47.386186,
		},
	},
	{
		name: "Füglister Urs",
		adress: "Feldstrasse 19, 5436 Würenlos",
		coords: {
			longitude: 8.367913,
			latitude: 47.440882,
		},
	},
	{
		name: "Gallay Horticulteurs",
		adress: "Chemin de la Carrière 10, 1277 Borex",
		coords: {
			longitude: 6.179461,
			latitude: 46.375442,
		},
	},
	{
		name: "Gartewärkstatt Venus",
		adress: "Neuenkirchstrasse 38, 6017 Ruswil",
		coords: {
			longitude: 8.132342,
			latitude: 47.084071,
		},
	},
	{
		name: "Gärtnerei Adler",
		adress: "Adlerstrasse 3, 9422 Staad SG",
		coords: {
			longitude: 9.54576,
			latitude: 47.477167,
		},
	},
	{
		name: "Gärtnerei am Bach",
		adress: "Bachstrasse 15, 3367 Thörigen",
		coords: {
			longitude: 7.728167,
			latitude: 47.168632,
		},
	},
	{
		name: "Gärtnerei Bryner & Co",
		adress: "Ettingerstrasse 101, 4147 Aesch BL",
		coords: {
			longitude: 7.579355,
			latitude: 47.473829,
		},
	},
	{
		name: "Gärtnerei Daniel Berger",
		adress: "Zelgweg 15, 3132 Riggisberg",
		coords: {
			longitude: 7.473552,
			latitude: 46.811552,
		},
	},
	{
		name: "Gärtnerei Graf Villmergen GmbH",
		adress: "Schulhausstrasse 25, 5612 Villmergen",
		coords: {
			longitude: 8.241396,
			latitude: 47.348744,
		},
	},
	{
		name: "Gärtnerei Luzia",
		adress: "Enikerhof 1, 6330 Cham",
		coords: {
			longitude: 8.446025,
			latitude: 47.180655,
		},
	},
	{
		name: "Gärtnerei Rutschi",
		adress: "Chramershus 60, 3453 Heimisbach",
		coords: {
			longitude: 7.761565,
			latitude: 47.011275,
		},
	},
	{
		name: "Gärtnerei Schwitter AG",
		adress: "Herzighaus, 6034 Inwil",
		coords: {
			longitude: 8.393024,
			latitude: 47.126558,
		},
	},
	{
		name: "Gärtnerei Witschard & Kohlbrenner",
		adress: "Pletschenstrasse 48, 3952 Susten",
		coords: {
			longitude: 7.640828,
			latitude: 46.307348,
		},
	},
	{
		name: "Gemüsegärtnerei Lohr",
		adress: "Passwangstrasse 31b, 4226 Breitenbach",
		coords: {
			longitude: 7.543549,
			latitude: 47.404621,
		},
	},
	{
		name: "Gerber Blumen AG Bern",
		adress: "Wangenstrasse 132a, 3018 Bern",
		coords: {
			longitude: 7.383981,
			latitude: 46.93092,
		},
	},
	{
		name: "Graf Gärtnerei und Co",
		adress: "Herschärenstrasse 22, 8633 Wolfhausen",
		coords: {
			longitude: 8.806092,
			latitude: 47.252974,
		},
	},
	{
		name: "Granges Guenot Géraldine",
		adress: "Route de Martigny 61, 1926 Fully",
		coords: {
			longitude: 7.112163,
			latitude: 46.134102,
		},
	},
	{
		name: "Groenveld Verena",
		adress: "Dorfstrasse 48, 3053 Diemerswil",
		coords: {
			longitude: 7.424348,
			latitude: 47.014875,
		},
	},
	{
		name: "Hans Müller - Bächler GmbH",
		adress: "Rosenau 1262, 6032 Emmen",
		coords: {
			longitude: 8.285416,
			latitude: 47.077773,
		},
	},
	{
		name: "Holderrieds Pflanzenwelt",
		adress: "Langnaustrasse 100, 3436 Zollbrück",
		coords: {
			longitude: 7.751771,
			latitude: 46.964473,
		},
	},
	{
		name: "Horticulture de la Pale",
		adress: "Route de la Pâle 8, 1026 Denges",
		coords: {
			longitude: 6.540553,
			latitude: 46.519342,
		},
	},
	{
		name: "Huber Gärtnerei",
		adress: "Aumatte, 5624 Waldhäusern AG",
		coords: {
			longitude: 8.307345,
			latitude: 47.330825,
		},
	},
	{
		name: "Huser Armin",
		adress: "Arbachstrasse 11, 5644 Auw",
		coords: {
			longitude: 8.365337,
			latitude: 47.208328,
		},
	},
	{
		name: "Inspiration Végétale",
		adress: "Route du Manège 56B, 1950 Sion",
		coords: {
			longitude: 7.384531,
			latitude: 46.227893,
		},
	},
	{
		name: "Isler Stefan",
		adress: "Obermoos 32, 8332 Russikon",
		coords: {
			longitude: 8.765063,
			latitude: 47.399624,
		},
	},
	{
		name: "Jardin&Décoration SA",
		adress: "Route de la Pierre-aux-Dames 31, 1256 Troinex",
		coords: {
			longitude: 6.156281,
			latitude: 46.156299,
		},
	},
	{
		name: "Jardins d'Ambiances",
		adress: "Route de la Gare 6, 1661 Le Pâquier-Montbarry",
		coords: {
			longitude: 7.057048,
			latitude: 46.594077,
		},
	},
	{
		name: "Jeanneret Dany",
		adress: "Route de Bollion 10, 1470 Bollion",
		coords: {
			longitude: 6.832378,
			latitude: 46.820161,
		},
	},
	{
		name: "Kallen Peter",
		adress: "Allschwilerstrasse 71, 4104 Oberwil BL",
		coords: {
			longitude: 7.543785,
			latitude: 47.525186,
		},
	},
	{
		name: "Krebs Ernest",
		adress: "Place du Marché 8, 2610 St-Imier",
		coords: {
			longitude: 6.996382,
			latitude: 47.152444,
		},
	},
	{
		name: "Krebs Sylvain et Estelle",
		adress: "Chemin des Roseaux 12, 1543 Grandcour",
		coords: {
			longitude: 6.927606,
			latitude: 46.869986,
		},
	},
	{
		name: "Krebs Paysagistes",
		adress: "1860 Aigle",
		coords: {
			longitude: 6.970126,
			latitude: 46.317546,
		},
	},
	{
		name: "Krebs Paysagistes",
		adress: "1000 Lausanne",
		coords: {
			longitude: 6.632452,
			latitude: 46.519573,
		},
	},
	{
		name: "Krebs Paysagistes",
		adress: "1260 Nyon",
		coords: {
			longitude: 6.239087,
			latitude: 46.382352,
		},
	},
	{
		name: "Krebs Paysagistes",
		adress: "1400 Yverdon-les-Bains",
		coords: {
			longitude: 6.641442,
			latitude: 46.778631,
		},
	},
	{
		name: "Kurth",
		adress: "Törliweg 9, 7208 Malans GR",
		coords: {
			longitude: 9.570999,
			latitude: 46.981027,
		},
	},
	{
		name: "Lalanne Philippe",
		adress: "Route de Saint-Julien 150, 1228 Plan-les-Ouates",
		coords: {
			longitude: 6.117199,
			latitude: 46.168434,
		},
	},
	{
		name: "Lamprecht Pflanzen AG",
		adress: "Fraubüchliweg, 8309 Nürensdorf",
		coords: {
			longitude: 8.657968,
			latitude: 47.441013,
		},
	},
	{
		name: "Langenegger Fritz",
		adress: "Weissensteinstrasse 33, 3045 Meikirch",
		coords: {
			longitude: 7.381701,
			latitude: 46.999605,
		},
	},
	{
		name: "Les Jardins de Magali Sàrl",
		adress: "Les Cibleries 6, 1897 Bouveret",
		coords: {
			longitude: 6.853877,
			latitude: 46.378706,
		},
	},
	{
		name: "Leschot Marco Jardinage écologique",
		adress: "Chemin du Sculpteur 12, 1242 Satigny",
		coords: {
			longitude: 6.03688,
			latitude: 46.200879,
		},
	},
	{
		name: "Lischer Urs und Iris",
		adress: "Eggstrasse 13, 6232 Geuensee",
		coords: {
			longitude: 8.113792,
			latitude: 47.199589,
		},
	},
	{
		name: "Lottenbach Erlebnisgärtnerei",
		adress: "Gishalde, 8465 Rudolfingen",
		coords: {
			longitude: 8.667094,
			latitude: 47.644514,
		},
	},
	{
		name: "M.P.T. Paysagisme & Construction",
		adress: "1305 Penthalaz",
		coords: {
			longitude: 6.524354,
			latitude: 46.61029,
		},
	},
	{
		name: "Marte Tobias",
		adress: "Biela 11, 3911 Ried-Brig",
		coords: {
			longitude: 8.015653,
			latitude: 46.321596,
		},
	},
	{
		name: "Marti Hanspeter und Renate",
		adress: "Ludern 779C, 3536 Aeschau",
		coords: {
			longitude: 7.76278,
			latitude: 46.905263,
		},
	},
	{
		name: "MC Paysages",
		adress: "Route des Monts-de-Lavaux 18, 1092 Belmont-sur-Lausanne",
		coords: {
			longitude: 6.677428,
			latitude: 46.521279,
		},
	},
	{
		name: "Menetrey SA",
		adress: "1003 Lausanne",
		coords: {
			longitude: 6.632348,
			latitude: 46.519591,
		},
	},
	{
		name: "Mosimann Ernst",
		adress: "Wittenmattstrasse 20, 3174 Thörishaus",
		coords: {
			longitude: 7.349777,
			latitude: 46.897463,
		},
	},
	{
		name: "Müller Hans Gärtnerei AG",
		adress: "Oberfeldstrasse 5, 9214 Kradolf",
		coords: {
			longitude: 9.203989,
			latitude: 47.523567,
		},
	},
	{
		name: "Nyfeler Heinz",
		adress: "Langnaustrasse 13, 3436 Zollbrück",
		coords: {
			longitude: 7.748928,
			latitude: 46.972649,
		},
	},
	{
		name: "Orlatti Gartenbau",
		adress: "Steinerstrasse 7B, 9052 Niederteufen",
		coords: {
			longitude: 9.373805,
			latitude: 47.389015,
		},
	},
	{
		name: "Pereira Miguel Antonio",
		adress: "Chemin des Hauts-Crêts 116, 1253 Vandoeuvres",
		coords: {
			longitude: 6.190375,
			latitude: 46.219236,
		},
	},
	{
		name: "Petter Michel",
		adress: "Route de la Sauge 119, 1789 Lugnorre",
		coords: {
			longitude: 7.061547,
			latitude: 46.954614,
		},
	},
	{
		name: "Portmann Schötz AG",
		adress: "Nebikerstrasse 19, 6247 Schötz",
		coords: {
			longitude: 7.987708,
			latitude: 47.17313,
		},
	},
	{
		name: "Pré-Monsieur",
		adress: "2942 Alle",
		coords: {
			longitude: 7.113317,
			latitude: 47.419803,
		},
	},
	{
		name: "Ribeaud Jean-Marie",
		adress: "Route de Porrentruy 103k, 2932 Coeuve",
		coords: {
			longitude: 7.098008,
			latitude: 47.445033,
		},
	},
	{
		name: "Rohr Christian et Susanne",
		adress: "Route du Prieuré 22, 2924 Montignez",
		coords: {
			longitude: 7.060746,
			latitude: 47.483177,
		},
	},
	{
		name: "Rohrer Fredi",
		adress: "Groffeldstrasse 9, 9470 Buchs SG",
		coords: {
			longitude: 9.473422,
			latitude: 47.162284,
		},
	},
	{
		name: "Schanz Gärtnerei GmbH",
		adress: "Rüteneweg 3, 8966 Oberwil-Lieli",
		coords: {
			longitude: 8.402655,
			latitude: 47.339424,
		},
	},
	{
		name: "Schellenberg A. + C.",
		adress: "Salenstrasse 10, 8162 Steinmaur",
		coords: {
			longitude: 8.462053,
			latitude: 47.495756,
		},
	},
	{
		name: "Schnider Remo",
		adress: "Mellingerstrasse 37, 5607 Hägglingen",
		coords: {
			longitude: 8.254359,
			latitude: 47.394148,
		},
	},
	{
		name: "Schönenberger Markus",
		adress: "Seckistrasse 16, 9602 Müselbach",
		coords: {
			longitude: 9.043584,
			latitude: 47.390801,
		},
	},
	{
		name: "Schutz Filisur",
		adress: "Quedra 1, 7477 Filisur",
		coords: {
			longitude: 9.686791,
			latitude: 46.67227,
		},
	},
	{
		name: "Spitznagel Jean-François",
		adress: "Rue Saint-Michel 2, 2900 Porrentruy",
		coords: {
			longitude: 7.071314,
			latitude: 47.413219,
		},
	},
	{
		name: "Stiftung BRUNEGG",
		adress: "Brunegg 3, 8634 Hombrechtikon",
		coords: {
			longitude: 8.772363,
			latitude: 47.243528,
		},
	},
	{
		name: "Strebel + Co",
		adress: "Alte Poststrasse 1, 5522 Tägerig",
		coords: {
			longitude: 8.277864,
			latitude: 47.403757,
		},
	},
	{
		name: "Thoma Antoinette",
		adress: "Hauptstrasse 21, 9555 Tobel",
		coords: {
			longitude: 9.032233,
			latitude: 47.515713,
		},
	},
	{
		name: "Thomi, Inh. Hess Theres",
		adress: "3154 Rüschegg Heubach",
		coords: {
			longitude: 7.40692,
			latitude: 46.781876,
		},
	},
	{
		name: "Tobias der Gärtner",
		adress: "Burggass 23, 9442 Berneck",
		coords: {
			longitude: 9.615746,
			latitude: 47.422902,
		},
	},
	{
		name: "TSHjardinage",
		adress: "Boulevard D'Yvoy 13, 1205 Genève",
		coords: {
			longitude: 6.13467,
			latitude: 46.198084,
		},
	},
	{
		name: "Verdonnet-Bouchet",
		adress: "Chemin de la Cantonnière 30, 1256 Troinex",
		coords: {
			longitude: 6.16679,
			latitude: 46.1581,
		},
	},
	{
		name: "Wieland Blumen und Gartencenter",
		adress: "Wasserschmittenweg 1, 7015 Tamins",
		coords: {
			longitude: 9.40953,
			latitude: 46.828503,
		},
	},
	{
		name: "Wieland Blumen und Gartencenter",
		adress: "Neudorfstrasse 63, 7430 Thusis",
		coords: {
			longitude: 9.439376,
			latitude: 46.69749,
		},
	},
	{
		name: "Zurbrügg Daniel",
		adress: "Schosshaldenstrasse 44, 3006 Bern",
		coords: {
			longitude: 7.466716,
			latitude: 46.947526,
		},
	},
	{
		name: "Zwahlen",
		adress: "Ried 48A, 3156 Riffenmatt",
		coords: {
			longitude: 7.336865,
			latitude: 46.766911,
		},
	},
	{
		name: "Zwygart Gartenbau & Showgarten",
		adress: "Sennegasse 43, 8476 Unterstammheim",
		coords: {
			longitude: 8.791462,
			latitude: 47.636745,
		},
	},
	{
		name: "Annen Blumen",
		adress: "Kirchweg 10, 6343 Rotkreuz",
		coords: {
			longitude: 8.429084,
			latitude: 47.139297,
		},
	},
	{
		name: "Bauer Baumschulen AG",
		adress: "Talholzstrasse 35, 4103 Bottmingen",
		coords: {
			longitude: 7.576032,
			latitude: 47.517813,
		},
	},
	{
		name: "BERNET BLUMEN Nottwil GmbH",
		adress: "Kantonsstrasse 6, 6207 Nottwil",
		coords: {
			longitude: 8.138117,
			latitude: 47.135102,
		},
	},
	{
		name: "Blumen Eberhard",
		adress: "Bächelweg 16, 8156 Oberhasli",
		coords: {
			longitude: 8.493369,
			latitude: 47.466008,
		},
	},
	{
		name: "Blumen + Gärtnerei Waldispühl",
		adress: "Kirchstrasse 30, 5643 Sins",
		coords: {
			longitude: 8.392145,
			latitude: 47.195651,
		},
	},
	{
		name: "Blumen Keusch AG",
		adress: "Göldiweg, 9472 Grabs",
		coords: {
			longitude: 9.454561,
			latitude: 47.174304,
		},
	},
	{
		name: "Blumen Oertig",
		adress: "Altwiesenstrasse 31, 8602 Wangen b. Dübendorf",
		coords: {
			longitude: 8.628736,
			latitude: 47.412083,
		},
	},
	{
		name: "Blumen Rossel",
		adress: "Schwadernaustrasse 54, 2558 Aegerten",
		coords: {
			longitude: 7.296077,
			latitude: 47.123895,
		},
	},
	{
		name: "Blumen Vogel",
		adress: "Flumis 14, 7204 Untervaz",
		coords: {
			longitude: 9.536356,
			latitude: 46.933318,
		},
	},
	{
		name: "Blumen Yellow",
		adress: "Kreuzlingenstrasse 11, 8583 Sulgen",
		coords: {
			longitude: 9.180276,
			latitude: 47.546461,
		},
	},
	{
		name: "Blumenwerkstatt",
		adress: "Veia Granda 103, 7440 Andeer",
		coords: {
			longitude: 9.428593,
			latitude: 46.599785,
		},
	},
	{
		name: "Bösch Ueli AG",
		adress: "Rütistrasse 70, 8608 Bubikon",
		coords: {
			longitude: 8.823856,
			latitude: 47.259851,
		},
	},
	{
		name: "Frey Horticulteur",
		adress: "Les Tilles 9, 2016 Cortaillod",
		coords: {
			longitude: 6.832156,
			latitude: 46.945405,
		},
	},
	{
		name: "Gaupp AG",
		adress: "Burgweg 9, 7204 Untervaz",
		coords: {
			longitude: 9.545239,
			latitude: 46.911271,
		},
	},
	{
		name: "GÜETLI HOF",
		adress: "Baarerstrasse 8, 8932 Mettmenstetten",
		coords: {
			longitude: 8.480335,
			latitude: 47.22844,
		},
	},
	{
		name: "Hungerbühler David",
		adress: "Chemin du Bois de Bamp 2, 1270 Trélex",
		coords: {
			longitude: 6.192043,
			latitude: 46.424056,
		},
	},
	{
		name: "Kammermann Stefan",
		adress: "Bachgraben 67, 3614 Unterlangenegg",
		coords: {
			longitude: 7.700114,
			latitude: 46.803514,
		},
	},
	{
		name: "Kappeler Ferdinand",
		adress: "Hofen 1, 9527 Niederhelfenschwil",
		coords: {
			longitude: 9.186853,
			latitude: 47.475014,
		},
	},
	{
		name: "Labhart Daniel",
		adress: "Alte Seonerstrasse 26, 5503 Schafisheim",
		coords: {
			longitude: 8.142973,
			latitude: 47.368086,
		},
	},
	{
		name: "Lanz Verena",
		adress: "Am Wald 88, 4944 Auswil",
		coords: {
			longitude: 7.83956,
			latitude: 47.139551,
		},
	},
	{
		name: "Mühlhof Biologische Gärtnerei, Gemüse, Früchte",
		adress: "Goldacherstrasse 29, 9327 Tübach",
		coords: {
			longitude: 9.461754,
			latitude: 47.484757,
		},
	},
	{
		name: "Nature et Paysage Sàrl",
		adress: "Avenue des Communes-Réunies 6, 1212 Grand-Lancy",
		coords: {
			longitude: 6.12021,
			latitude: 46.182603,
		},
	},
	{
		name: "Rosen Koller",
		adress: "Dorfstrasse 109, 4813 Uerkheim",
		coords: {
			longitude: 8.016805,
			latitude: 47.296271,
		},
	},
	{
		name: "Staudenkulturen D. Schneider",
		adress: "Bummerten 14, 4315 Zuzgen",
		coords: {
			longitude: 7.901492,
			latitude: 47.522737,
		},
	},
	{
		name: "Wyler Blumen Gartenbau",
		adress: "Schlossstrasse 1, 3427 Utzenstorf",
		coords: {
			longitude: 7.551145,
			latitude: 47.135282,
		},
	},
	{
		name: "Züttel-Pflanzen",
		adress: "Neuengasse 13, 3225 Müntschemier",
		coords: {
			longitude: 7.148836,
			latitude: 46.994691,
		},
	},
	{
		name: "Blumenladen Blütenreich",
		adress: "Stadtverwaltung Thun",
		coords: {
			longitude: 7.616773,
			latitude: 46.752508,
		},
	},
	{
		name: "Gemeindegärtnerei Schwyz",
		adress: "Schwyz (mit Filialen Ibach, Seewen und Rickenbach)",
		coords: {
			longitude: 8.644486,
			latitude: 47.015578,
		},
	},
	{
		name: "100% Nature, Julien Agasse",
		adress: "ZI En Bucleis, Route de Genolier 15, 1266 Duillier",
		coords: {
			longitude: 6.226281,
			latitude: 46.413785,
		},
	},
	{
		name: "Alpin Gartencenter Floristik",
		adress: "Quedra 1, 7477 Filisur",
		coords: {
			longitude: 9.686791,
			latitude: 46.67227,
		},
	},
	{
		name: "Alpin Pflanzen und Garten Zermatt",
		adress: "Spissstrasse 58, 3920 Zermatt",
		coords: {
			longitude: 7.751496,
			latitude: 46.026316,
		},
	},
	{
		name: "Alpin Pflanzencenter Schutz",
		adress: "Prolizun, 7505 Celerina/Schlarigna",
		coords: {
			longitude: 9.860055,
			latitude: 46.51268,
		},
	},
	{
		name: "altra schaffhausen Bio - Gärtnerei Neubrunn",
		adress: "Nordstrasse 145, 8200 Schaffhausen",
		coords: {
			longitude: 8.626219,
			latitude: 47.70745,
		},
	},
	{
		name: "Bécheiraz Bernard",
		adress: "Route de Matran 71, 1725 Posieux",
		coords: {
			longitude: 7.095867,
			latitude: 46.766962,
		},
	},
	{
		name: "Bio-Gärtnerei der Stiftung Bühl",
		adress: "Rötibodenstrasse 10, 8820 Wädenswil",
		coords: {
			longitude: 8.661255,
			latitude: 47.226769,
		},
	},
	{
		name: "Blumen Aebi AG Meiringen",
		adress: "Kirchgasse 4, 3860 Meiringen",
		coords: {
			longitude: 8.1876,
			latitude: 46.727668,
		},
	},
	{
		name: "Blumen am Bahnhof",
		adress: "Am Bahnhof, 8570 Weinfelden",
		coords: {
			longitude: 9.107205,
			latitude: 47.566077,
		},
	},
	{
		name: "Blumen Baumberger",
		adress: "Friedhofweg 6, 3425 Koppigen",
		coords: {
			longitude: 7.601141,
			latitude: 47.135079,
		},
	},
	{
		name: "Blumen-Boutique Schutz",
		adress: "Silvrettacenter, 7270 Davos Platz",
		coords: {
			longitude: 9.820362,
			latitude: 46.79214,
		},
	},
	{
		name: "Blumen Tschopp AG",
		adress: "Feldlistrasse 11, 9000 St. Gallen",
		coords: {
			longitude: 9.356022,
			latitude: 47.421682,
		},
	},
	{
		name: "Blumen und Gartenhaus zur Gale",
		adress: "Friedhofstrasse 6, 2543 Lengnau BE",
		coords: {
			longitude: 7.368328,
			latitude: 47.178759,
		},
	},
	{
		name: "Blumenhalle Häusermann AG",
		adress: "Untergasse 25, 4922 Thunstetten",
		coords: {
			longitude: 7.760445,
			latitude: 47.204319,
		},
	},
	{
		name: "Boccard Parcs et Jardins SA",
		adress: "La Petite-Grave, Route Croix-en-Champagne 6, 1236 Cartigny",
		coords: {
			longitude: 6.039903,
			latitude: 46.17352,
		},
	},
	{
		name: "Bölsterli Blumen",
		adress: "Gulpstrasse 6, 6130 Willisau",
		coords: {
			longitude: 7.987288,
			latitude: 47.12186,
		},
	},
	{
		name: "BRAUX PAYSAGE",
		adress: "Chemin du Champ-des-Filles 19, 1228 Plan-les-Ouates",
		coords: {
			longitude: 6.106878,
			latitude: 46.165802,
		},
	},
	{
		name: "Buchs Biedermann Rosi und Fredi",
		adress: "Dürrenbergstrasse 30, 1734 Tentlingen",
		coords: {
			longitude: 7.202065,
			latitude: 46.76376,
		},
	},
	{
		name: "Bühler Peter",
		adress: "Hängertstrasse 7, 3114 Wichtrach",
		coords: {
			longitude: 7.577114,
			latitude: 46.843551,
		},
	},
	{
		name: "Cédric Chanson Sàrl",
		adress: "Route de Crassier, 1298 Céligny",
		coords: {
			longitude: 6.194326,
			latitude: 46.353007,
		},
	},
	{
		name: "Côté du Jardin",
		adress: "P.O. Box, 1211 Genève 6",
		coords: {
			longitude: 6.142743,
			latitude: 46.208334,
		},
	},
	{
		name: "Deriaz Jean-Jacques",
		adress: "Route du Bois de Finges 25, 3960 Sierre",
		coords: {
			longitude: 7.552405,
			latitude: 46.295084,
		},
	},
	{
		name: "Dorfgärtnerei Raschle AG",
		adress: "Neue Dorfstrasse 35, 8135 Langnau am Albis",
		coords: {
			longitude: 8.53828,
			latitude: 47.288098,
		},
	},
	{
		name: "Edwin Ranft Gärtnerei",
		adress: "Schwendistrasse 18, 8615 Freudwil",
		coords: {
			longitude: 8.72947,
			latitude: 47.378034,
		},
	},
	{
		name: "Eichberg Seengen AG",
		adress: "Eichbergstrasse 38, 5707 Seengen",
		coords: {
			longitude: 8.205285,
			latitude: 47.33905,
		},
	},
	{
		name: "Entretien tombes funéraires",
		adress: "Rue de la Servette 19, 1201 Genève",
		coords: {
			longitude: 6.137994,
			latitude: 46.209692,
		},
	},
	{
		name: "Fawer AG",
		adress: "Ober Halden 5, 8132 Hinteregg",
		coords: {
			longitude: 8.689413,
			latitude: 47.311008,
		},
	},
	{
		name: "Flora",
		adress: "Brüelgarten 6, 8226 Schleitheim",
		coords: {
			longitude: 8.485571,
			latitude: 47.747863,
		},
	},
	{
		name: "Frei Heinrich AG",
		adress: "Industriestrasse 18, 6074 Giswil",
		coords: {
			longitude: 8.182714,
			latitude: 46.842036,
		},
	},
	{
		name: "Gärtner Pflugshaupt AG",
		adress: "Dägersteinstrasse 14, 6210 Sursee",
		coords: {
			longitude: 8.106757,
			latitude: 47.169928,
		},
	},
	{
		name: "Gärtnerei",
		adress: "Im Berg, 8537 Nussbaumen TG",
		coords: {
			longitude: 8.829291,
			latitude: 47.629426,
		},
	},
	{
		name: "Gärtnerei des Diakonissenhauses",
		adress: "Schmiedgasse 39, 4125 Riehen",
		coords: {
			longitude: 7.653224,
			latitude: 47.584664,
		},
	},
	{
		name: "Gärtnerei Grüens Härz",
		adress: "Wiedenhubstrasse 49, 4410 Liestal",
		coords: {
			longitude: 7.725111,
			latitude: 47.488086,
		},
	},
	{
		name: "Gärtnerei Realta",
		adress: "P.O. Box, 7408 Cazis",
		coords: {
			longitude: 9.428264,
			latitude: 46.72243,
		},
	},
	{
		name: "Gärtnerei Stiftung Lerchenbühl",
		adress: "Lerchenbühlweg 9, 3400 Burgdorf",
		coords: {
			longitude: 7.610351,
			latitude: 47.059553,
		},
	},
	{
		name: "Gärtnerei Thomas Jud",
		adress: "Mörgeli, 8722 Kaltbrunn",
		coords: {
			longitude: 9.025142,
			latitude: 47.213245,
		},
	},
	{
		name: "Gärtnerei / Verkaufsladen",
		adress: "Zürcherstrasse 100, 8142 Uitikon Waldegg",
		coords: {
			longitude: 8.444912,
			latitude: 47.368441,
		},
	},
	{
		name: "Gärtnerei Wigger Jürg",
		adress: "Freiheitsstrasse 7, 2544 Bettlach",
		coords: {
			longitude: 7.425826,
			latitude: 47.202157,
		},
	},
	{
		name: "Gärtnerei Windeggli",
		adress: "Windegglistrasse 3, 6064 Kerns",
		coords: {
			longitude: 8.272652,
			latitude: 46.910782,
		},
	},
	{
		name: "Gasser Hans und Annelies",
		adress: "Schwändeliweg 15, 3436 Zollbrück",
		coords: {
			longitude: 7.750444,
			latitude: 46.973625,
		},
	},
	{
		name: "Hartmann Monika",
		adress: "Fischbachstrasse 16, 8717 Benken SG",
		coords: {
			longitude: 8.999332,
			latitude: 47.190728,
		},
	},
	{
		name: "Hasler Pflanzen AG",
		adress: "Silbernstrasse 4, 8953 Dietikon",
		coords: {
			longitude: 8.39797,
			latitude: 47.415182,
		},
	},
	{
		name: "Horizon Vert, Valencia Castillo",
		adress: "Rue de Lyon 33, 1201 Genève",
		coords: {
			longitude: 6.136053,
			latitude: 46.208464,
		},
	},
	{
		name: "Jäggi Gärtnerei",
		adress: "Neuhofstrasse 21, 6020 Emmenbrücke",
		coords: {
			longitude: 8.258436,
			latitude: 47.071852,
		},
	},
	{
		name: "Julien Michel Sàrl",
		adress: "Route d'Yverdon-les-Bains 359, 1468 Cheyres",
		coords: {
			longitude: 6.787767,
			latitude: 46.814959,
		},
	},
	{
		name: "Kistler Peter",
		adress: "Neulandstrasse 1, 8864 Reichenburg",
		coords: {
			longitude: 8.987233,
			latitude: 47.180348,
		},
	},
	{
		name: "Klostergärtnerei",
		adress: "Benediktinerkloster 1, 6390 Engelberg",
		coords: {
			longitude: 8.409614,
			latitude: 46.820256,
		},
	},
	{
		name: "Kollegi-Gärtnerei",
		adress: "Brünigstrasse 184, 6060 Sarnen",
		coords: {
			longitude: 8.24457,
			latitude: 46.890365,
		},
	},
	{
		name: "Komminoth Christian und Barbara",
		adress: "Lenglod 5, 3182 Ueberstorf",
		coords: {
			longitude: 7.336675,
			latitude: 46.879974,
		},
	},
	{
		name: "Krebs Gärtnerei",
		adress: "Zelglistrasse 12, 4566 Kriegstetten",
		coords: {
			longitude: 7.595307,
			latitude: 47.173072,
		},
	},
	{
		name: "Küng Pflanzen AG gärtnerei + floraland",
		adress: "Matzingerstrasse 14, 8512 Thundorf",
		coords: {
			longitude: 8.962284,
			latitude: 47.543101,
		},
	},
	{
		name: "Lauchenauer Ernst",
		adress: "Rütistrasse 7, 9325 Roggwil TG",
		coords: {
			longitude: 9.393687,
			latitude: 47.49864,
		},
	},
	{
		name: "Mäder Karin",
		adress: "Waldhaus 31, 3432 Lützelflüh-Goldbach",
		coords: {
			longitude: 7.707025,
			latitude: 47.01343,
		},
	},
	{
		name: "Maison Keller",
		adress: "Rue Fritz-Marchand 15, 2615 Sonvilier",
		coords: {
			longitude: 6.961597,
			latitude: 47.13776,
		},
	},
	{
		name: "Mesa Jardin",
		adress: "Quartier de la Levratte 28, 1260 Nyon",
		coords: {
			longitude: 6.229278,
			latitude: 46.388527,
		},
	},
	{
		name: "N'Belles Fleurs Horticulture",
		adress: "Les Petits-Marais 300, 2108 Couvet",
		coords: {
			longitude: 6.629599,
			latitude: 46.918334,
		},
	},
	{
		name: "Neuhof Gärtnerei",
		adress: "Pestalozzistrasse 100, 5242 Birr",
		coords: {
			longitude: 8.209826,
			latitude: 47.430792,
		},
	},
	{
		name: "Oberdorfgärtnerei M. Kaufmann & E. Bühler",
		adress: "Dorfstrasse 6, 6213 Knutwil",
		coords: {
			longitude: 8.072943,
			latitude: 47.198292,
		},
	},
	{
		name: "Oertig W. AG",
		adress: "Altwiesenstrasse 31, 8602 Wangen b. Dübendorf",
		coords: {
			longitude: 8.628736,
			latitude: 47.412083,
		},
	},
	{
		name: "Osis Gartengestaltung",
		adress: "Lettenstrasse 54, 8408 Winterthur",
		coords: {
			longitude: 8.690351,
			latitude: 47.503255,
		},
	},
	{
		name: "Pittet André",
		adress: "Route de la Paix 1, 1315 La Sarraz",
		coords: {
			longitude: 6.514226,
			latitude: 46.657411,
		},
	},
	{
		name: "Ribeaud Olivier pépiniériste",
		adress: "Chemin des Grandes-Vies 19, 2900 Porrentruy",
		coords: {
			longitude: 7.080349,
			latitude: 47.429194,
		},
	},
	{
		name: "Röthlisberger Stefan",
		adress: "Mattacker 48, 3663 Gurzelen",
		coords: {
			longitude: 7.547451,
			latitude: 46.773878,
		},
	},
	{
		name: "Roy Remy et René",
		adress: "Route de Thonon 200, 1222 Vésenaz",
		coords: {
			longitude: 6.221811,
			latitude: 46.253173,
		},
	},
	{
		name: "Rüegg Urs",
		adress: "Hölzliweg 8, 3455 Grünen",
		coords: {
			longitude: 7.737452,
			latitude: 47.026515,
		},
	},
	{
		name: "Sardi Markus und Margrit",
		adress: "Wiesenstrasse 27, 3073 Gümligen",
		coords: {
			longitude: 7.496433,
			latitude: 46.940409,
		},
	},
	{
		name: "Schloss-Gärtnerei",
		adress: "Schloss Teufen 6, 8428 Teufen ZH",
		coords: {
			longitude: 8.573272,
			latitude: 47.544263,
		},
	},
	{
		name: "Schutz Alpin Pflanzencenter",
		adress: "Prolizun, 7505 Celerina/Schlarigna",
		coords: {
			longitude: 9.860055,
			latitude: 46.51268,
		},
	},
	{
		name: "Schutz Filisur, Filiale Gärtnerei Zermatt",
		adress: "Spissstrasse 58, 3920 Zermatt",
		coords: {
			longitude: 7.751496,
			latitude: 46.026316,
		},
	},
	{
		name: "Schutz Filisur, Samen und Pflanzen AG",
		adress: "Quedra 1, 7477 Filisur",
		coords: {
			longitude: 9.686791,
			latitude: 46.67227,
		},
	},
	{
		name: "Sennhauser Max",
		adress: "Lettenweg 2, 9434 Au SG",
		coords: {
			longitude: 9.636644,
			latitude: 47.426853,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Talstrasse 99, 4144 Arlesheim",
		coords: {
			longitude: 7.610982,
			latitude: 47.503547,
		},
	},
	{
		name: "Stift Höfli Wildstaudengärtnerei",
		adress: "Im Berg, 8537 Nussbaumen TG",
		coords: {
			longitude: 8.829291,
			latitude: 47.629426,
		},
	},
	{
		name: "Stift Höfli Zierpflanzengärtnerei",
		adress: "Im Berg, 8537 Nussbaumen TG",
		coords: {
			longitude: 8.829291,
			latitude: 47.629426,
		},
	},
	{
		name: "Stiftung Brändi, Klostergärtnerei",
		adress: "Alte Klosterstrasse 6, 6283 Baldegg",
		coords: {
			longitude: 8.27859,
			latitude: 47.180029,
		},
	},
	{
		name: "Stiftung Stöckenweid",
		adress: "Bünishoferstrasse 295, 8706 Meilen",
		coords: {
			longitude: 8.628065,
			latitude: 47.28414,
		},
	},
	{
		name: "Sutter",
		adress: "Boningerstrasse 32, 4629 Fulenbach",
		coords: {
			longitude: 7.838042,
			latitude: 47.279138,
		},
	},
	{
		name: "Vosti Francesco",
		adress: "6516 Cugnasco",
		coords: {
			longitude: 8.917756,
			latitude: 46.175245,
		},
	},
	{
		name: "Wapf Rolf",
		adress: "Hintergass 7, 6147 Altbüron",
		coords: {
			longitude: 7.880468,
			latitude: 47.183054,
		},
	},
	{
		name: "Weber AG",
		adress: "Tösstalstrasse 139, 8623 Wetzikon ZH",
		coords: {
			longitude: 8.824032,
			latitude: 47.329279,
		},
	},
	{
		name: "Wolf Willi",
		adress: "Hintere Bahnhofstrasse 2, 8756 Mitlödi",
		coords: {
			longitude: 9.080526,
			latitude: 47.01066,
		},
	},
	{
		name: "Zehendermätteli",
		adress: "Reichenbachstrasse 161, 3004 Bern",
		coords: {
			longitude: 7.444191,
			latitude: 46.979543,
		},
	},
	{
		name: "Zurbuchen Alfred und Hanna",
		adress: "Scheunenberg 39, 3251 Wengi b. Büren",
		coords: {
			longitude: 7.37738,
			latitude: 47.086261,
		},
	},
	{
		name: "Gärtnerei",
		adress: "Gärtnerei",
		coords: {
			longitude: 7.615026,
			latitude: 47.534444,
		},
	},
	{
		name: "Gärtnerei",
		adress: "Stiftung Balm - für Menschen mit Behinderung",
		coords: {
			longitude: 8.808672,
			latitude: 47.245918,
		},
	},
	{
		name: "Gärtnerei",
		adress: "Bürgerspital Basel",
		coords: {
			longitude: 7.561806,
			latitude: 47.57243,
		},
	},
	{
		name: "Gärtnerei",
		adress: "Gemeindeverwaltung",
		coords: {
			longitude: 7.653542,
			latitude: 47.587901,
		},
	},
	{
		name: "Gärtnerei",
		adress: "Stadtverwaltung Thun",
		coords: {
			longitude: 7.616773,
			latitude: 46.752508,
		},
	},
	{
		name: "Gärtnerei",
		adress: "Psychiatrisches Zentrum Appenzell Ausserrhoden",
		coords: {
			longitude: 9.264379,
			latitude: 47.385993,
		},
	},
	{
		name: "Gärtnerei",
		adress: "Stadtverwaltung",
		coords: {
			longitude: 9.189398,
			latitude: 47.647023,
		},
	},
	{
		name: "Gärtnerei",
		adress: "Talbachstrasse 27, 7250 Klosters",
		coords: {
			longitude: 9.889136,
			latitude: 46.867174,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Gärtnerei",
		coords: {
			longitude: 7.615013,
			latitude: 47.534453,
		},
	},
	{
		name: "Schober Giardini",
		adress: "Via Ferrera 103, 6612 Ascona",
		coords: {
			longitude: 8.77522,
			latitude: 46.162205,
		},
	},
	{
		name: "AMS Atelier Mécanique",
		adress: "Route de Vernand 29, 1052 Le Mont-sur-Lausanne",
		coords: {
			longitude: 6.623578,
			latitude: 46.567954,
		},
	},
	{
		name: "Chalut Green Service SA",
		adress: "Chemin de la Rosaire 5, 1123 Aclens",
		coords: {
			longitude: 6.522672,
			latitude: 46.570909,
		},
	},
	{
		name: "Chalut Green Service SA",
		adress: "Route de la Gare 22, 1295 Mies",
		coords: {
			longitude: 6.168487,
			latitude: 46.297893,
		},
	},
	{
		name: "ArchiTime SA",
		adress: "Via Calancasca 2, 6537 Grono",
		coords: {
			longitude: 9.140697,
			latitude: 46.244995,
		},
	},
	{
		name: "Cercle des Agriculteurs de Genève et Environs",
		adress: "Rue des Sablières 15, 1242 Satigny",
		coords: {
			longitude: 6.060121,
			latitude: 46.219978,
		},
	},
	{
		name: "Clalüna Gartenbau GmbH",
		adress: "Scheibenstrasse 6, 4803 Vordemwald",
		coords: {
			longitude: 7.895934,
			latitude: 47.273076,
		},
	},
	{
		name: "FELA Ticino SA",
		adress: "Via Stazione 10, 6593 Cadenazzo",
		coords: {
			longitude: 8.93841,
			latitude: 46.152534,
		},
	},
	{
		name: "Flückiger Gartenbau",
		adress: "Neuweilerstrasse 28, 4123 Allschwil",
		coords: {
			longitude: 7.534295,
			latitude: 47.549702,
		},
	},
	{
		name: "Hacker Giardini Sagl",
		adress: "Via Brere 3, 6598 Tenero",
		coords: {
			longitude: 8.857805,
			latitude: 46.170787,
		},
	},
	{
		name: "Landi Moulin Courtepin",
		adress: "Route de Morat 15, 1784 Courtepin",
		coords: {
			longitude: 7.122488,
			latitude: 46.870486,
		},
	},
	{
		name: "Maréchal Géraldo",
		adress: "Route de la Branvaude 21, 1290 Versoix",
		coords: {
			longitude: 6.128755,
			latitude: 46.311898,
		},
	},
	{
		name: "Punto Fiorito",
		adress: "Via Vallemaggia 3, 6670 Avegno",
		coords: {
			longitude: 8.753046,
			latitude: 46.195168,
		},
	},
	{
		name: "Stern Gartenbau",
		adress: "Hinterbergstrasse 1, 6318 Walchwil",
		coords: {
			longitude: 8.516817,
			latitude: 47.099862,
		},
	},
	{
		name: "Horisberger Yvorne SA",
		adress: "Versvey, 1853 Yvorne",
		coords: {
			longitude: 6.932842,
			latitude: 46.33947,
		},
	},
	{
		name: "Jenni Gartenbau",
		adress: "Birrfeldstrasse 37, 5507 Mellingen",
		coords: {
			longitude: 8.267733,
			latitude: 47.417682,
		},
	},
	{
		name: "Plantes et Fleurs SA",
		adress: "Chemin Vert 10, 1234 Vessy",
		coords: {
			longitude: 6.142099,
			latitude: 46.173941,
		},
	},
	{
		name: "Samen Mauser AG",
		adress: "Industriestrasse 24, 8404 Winterthur",
		coords: {
			longitude: 8.755009,
			latitude: 47.496187,
		},
	},
	{
		name: "Sputnick GmbH",
		adress: "Weidengasse 18, 5012 Schönenwerd",
		coords: {
			longitude: 8.002174,
			latitude: 47.36821,
		},
	},
	{
		name: "HH Shop Orbe",
		adress: "Rue des Ducats 40B, 1350 Orbe",
		coords: {
			longitude: 6.545718,
			latitude: 46.721085,
		},
	},
	{
		name: "Tempel-Store GmbH",
		adress: "Utengasse 24, 4058 Basel",
		coords: {
			longitude: 7.592749,
			latitude: 47.560225,
		},
	},
	{
		name: "Hawalo swiss GmbH",
		adress: "Burgerweg 15, 3238 Gals",
		coords: {
			longitude: 7.041444,
			latitude: 47.024097,
		},
	},
	{
		name: "Heiniger Urs und Elsbeth",
		adress: "Unter der Fluh 173, 3822 Lauterbrunnen",
		coords: {
			longitude: 7.913298,
			latitude: 46.594049,
		},
	},
	{
		name: "Hornbach",
		adress: "Route de l'Industrie, 1163 Etoy",
		coords: {
			longitude: 6.424444,
			latitude: 46.475091,
		},
	},
	{
		name: "Let's Grow",
		adress: "Rue de l'Industrie 52, 1030 Bussigny",
		coords: {
			longitude: 6.558044,
			latitude: 46.545658,
		},
	},
	{
		name: "Point Vert SA",
		adress: "Route Cantonale 21, 1964 Conthey",
		coords: {
			longitude: 7.299603,
			latitude: 46.224186,
		},
	},
	{
		name: "Tosaerba e Giardinaggio SA",
		adress: "Via Cantonale 67, 6983 Magliaso",
		coords: {
			longitude: 8.880689,
			latitude: 45.982414,
		},
	},
	{
		name: "Garden Center Bürgi",
		adress: "In Tirada 11, 6528 Camorino",
		coords: {
			longitude: 8.999608,
			latitude: 46.166163,
		},
	},
	{
		name: "JardiTEC.ch",
		adress: "Route de la Venoge C, 1302 Vufflens-la-Ville",
		coords: {
			longitude: 6.527316,
			latitude: 46.570137,
		},
	},
	{
		name: "Let's Grow",
		adress: "Rue Saint-Martin 38B, 1005 Lausanne",
		coords: {
			longitude: 6.637348,
			latitude: 46.52425,
		},
	},
	{
		name: "Renovita AG",
		adress: "Weidstrasse 11, 9535 Wilen b. Wil",
		coords: {
			longitude: 9.039028,
			latitude: 47.453872,
		},
	},
	{
		name: "Simon Motorgeräte AG",
		adress: "Seewenweg 5, 4153 Reinach BL",
		coords: {
			longitude: 7.601491,
			latitude: 47.485807,
		},
	},
	{
		name: "Société de Laiterie et agricole de Monthey et environs SA",
		adress: "Rue des Bourguignons 4-6, 1870 Monthey",
		coords: {
			longitude: 6.947844,
			latitude: 46.251854,
		},
	},
	{
		name: "Vision of Hemp",
		adress: "Güterstrasse 138, 4053 Basel",
		coords: {
			longitude: 7.589171,
			latitude: 47.544725,
		},
	},
	{
		name: "Grow System GmbH",
		adress: "Bürerfeld 8, 9245 Oberbüren",
		coords: {
			longitude: 9.16162,
			latitude: 47.446479,
		},
	},
	{
		name: "Point Vert SA",
		adress: "Chemin du Grand-Pré 4C, 1510 Moudon",
		coords: {
			longitude: 6.791702,
			latitude: 46.657861,
		},
	},
	{
		name: "Swiss Finest Smoke Sàrl",
		adress: "Rue du Scex 45, 1950 Sion",
		coords: {
			longitude: 7.366508,
			latitude: 46.232633,
		},
	},
	{
		name: "Gärtnerei Vogel",
		adress: "Seetalstrasse 103, 5703 Seon",
		coords: {
			longitude: 8.16144,
			latitude: 47.342499,
		},
	},
	{
		name: "Kern Gärtnerei",
		adress: "Glärnischstrasse 54, 8810 Horgen",
		coords: {
			longitude: 8.607505,
			latitude: 47.255007,
		},
	},
	{
		name: "Leuenberger AG Gärtnerei",
		adress: "Baslerstrasse 14, 5080 Laufenburg",
	},
	{
		name: "Maurer Oeko Gärtnerei Gartenbau",
		adress: "Bernstrasse 17, 3110 Münsingen",
		coords: {
			longitude: 7.56125,
			latitude: 46.877949,
		},
	},
	{
		name: "Moor-Nebel Gärtnerei GmbH",
		adress: "Herrenmattweg 1, 4146 Hochwald",
		coords: {
			longitude: 7.637582,
			latitude: 47.453966,
		},
	},
	{
		name: "Viola Floristik und Gärtnerei",
		adress: "Dorfstrasse 31, 9104 Waldstatt",
		coords: {
			longitude: 9.282771,
			latitude: 47.356308,
		},
	},
	{
		name: "Gärtnerei Blattgrün",
		adress: "Allmendstrasse 1, 8911 Rifferswil",
		coords: {
			longitude: 8.507942,
			latitude: 47.249281,
		},
	},
	{
		name: "Bio Gemüse Gärtnerei",
		adress: "Bahnhofstrasse 24, 8360 Eschlikon TG",
		coords: {
			longitude: 8.963655,
			latitude: 47.463122,
		},
	},
	{
		name: "Blumen Helg Gärtnerei",
		adress: "Basadingerstrasse 30, 8253 Diessenhofen",
		coords: {
			longitude: 8.749932,
			latitude: 47.685361,
		},
	},
	{
		name: "Blumengarten und Gärtnerei",
		adress: "St. Urbanstrasse 21, 6144 Zell LU",
		coords: {
			longitude: 7.922501,
			latitude: 47.139125,
		},
	},
	{
		name: "Blumenhaus und Gärtnerei",
		adress: "Sarganserstrasse 5, 8880 Walenstadt",
		coords: {
			longitude: 9.313697,
			latitude: 47.120282,
		},
	},
	{
		name: "Gärtnerei und Blumengeschäft Sommer",
		adress: "Unterdorfstrasse 4, 4934 Madiswil",
		coords: {
			longitude: 7.797922,
			latitude: 47.165918,
		},
	},
	{
		name: "Gärtnerei Vogel",
		adress: "Metzgermattstrasse 1, 3380 Wangen an der Aare",
		coords: {
			longitude: 7.660405,
			latitude: 47.23421,
		},
	},
	{
		name: "Goetheanum Gärtnerei",
		adress: "Hügelweg 74, 4143 Dornach",
		coords: {
			longitude: 7.621685,
			latitude: 47.485633,
		},
	},
	{
		name: "Allemann R. Gärtnerei",
		adress: "Benkenstrasse 266, 4108 Witterswil",
		coords: {
			longitude: 7.519279,
			latitude: 47.493772,
		},
	},
	{
		name: "Blumengeschäft und Gärtnerei",
		adress: "Römerbrunnenweg 10, 2540 Grenchen",
		coords: {
			longitude: 7.394298,
			latitude: 47.185221,
		},
	},
	{
		name: "Gärtnerei Homatt AG",
		adress: "Homatt, 6017 Ruswil",
		coords: {
			longitude: 8.141646,
			latitude: 47.077519,
		},
	},
	{
		name: "Gärtnerei Oerlikon",
		adress: "Thurgauerstrasse 34, 8050 Zürich",
		coords: {
			longitude: 8.551405,
			latitude: 47.413519,
		},
	},
	{
		name: "Gärtnerei Seefeldstrasse",
		adress: "Seefeldstrasse 25, 8008 Zürich",
		coords: {
			longitude: 8.549544,
			latitude: 47.363713,
		},
	},
	{
		name: "Niederberger Gärtnerei AG",
		adress: "Mettlen 7, 6365 Kehrsiten",
		coords: {
			longitude: 8.373414,
			latitude: 47.002031,
		},
	},
	{
		name: "Rohrer Gärtnerei AG",
		adress: "Luss 9, 4317 Wegenstetten",
		coords: {
			longitude: 7.932439,
			latitude: 47.495133,
		},
	},
	{
		name: "Schleusser Gärtnerei + Blumenladen",
		adress: "Lengwilerstrasse 15A, 8574 Dettighofen (Lengwil)",
		coords: {
			longitude: 9.203464,
			latitude: 47.620506,
		},
	},
	{
		name: "Waibel Gärtnerei & Floristik",
		adress: "Obere Sternengasse 20, 4500 Solothurn",
		coords: {
			longitude: 7.543878,
			latitude: 47.214056,
		},
	},
	{
		name: "Weber Gärtnerei Oberglatt",
		adress: "Rankstrasse 17, 8154 Oberglatt ZH",
		coords: {
			longitude: 8.506415,
			latitude: 47.481558,
		},
	},
	{
		name: "Blumenladen / Gärtnerei",
		adress: "Diakoniewerk Neumünster - Schweizerische Pflegerinnenschule",
		coords: {
			longitude: 8.59809,
			latitude: 47.348987,
		},
	},
	{
		name: "Gärtnerei und Friedhöfe, Krematorium, Bestattungswesen",
		adress: "Stadt Biel",
		coords: {
			longitude: 7.260696,
			latitude: 47.12685,
		},
	},
	{
		name: "André Benz Gärtnerei Blumen",
		adress: "Brunnenackerstrasse 4, 9437 Marbach SG",
		coords: {
			longitude: 9.567992,
			latitude: 47.390753,
		},
	},
	{
		name: "Blumen Diehl Gärtnerei",
		adress: "Hochstrasse 65, 8044 Zürich",
		coords: {
			longitude: 8.556078,
			latitude: 47.378564,
		},
	},
	{
		name: "Blumen + Gärtnerei Waldispühl",
		adress: "Luzernerstrasse 1, 5643 Sins",
		coords: {
			longitude: 8.395837,
			latitude: 47.190996,
		},
	},
	{
		name: "Bürgin Gärtnerei AG",
		adress: "Umfahrungsstrasse 5A, 6467 Schattdorf",
		coords: {
			longitude: 8.641741,
			latitude: 46.853251,
		},
	},
	{
		name: "Gärtnerei der Stiftung zur Palme",
		adress: "Speckstrasse 2, 8330 Pfäffikon ZH",
		coords: {
			longitude: 8.772642,
			latitude: 47.370571,
		},
	},
	{
		name: "Gärtnerei Homatt AG",
		adress: "Burgerstrasse 17, 6003 Luzern",
		coords: {
			longitude: 8.302889,
			latitude: 47.049946,
		},
	},
	{
		name: "Gärtnerei Ritter AG",
		adress: "Volkenmatte 7, 3904 Naters",
		coords: {
			longitude: 7.996164,
			latitude: 46.328054,
		},
	},
	{
		name: "Gärtnerei Roger Badertscher",
		adress: "Höhenstrasse, 8303 Bassersdorf",
		coords: {
			longitude: 8.63937,
			latitude: 47.431196,
		},
	},
	{
		name: "Gärtnerei Röthlisberger",
		adress: "Mattacker 48, 3663 Gurzelen",
		coords: {
			longitude: 7.547451,
			latitude: 46.773878,
		},
	},
	{
		name: "Gärtnerei Tobelhof",
		adress: "Tobelhofstrasse 209, 8044 Zürich",
		coords: {
			longitude: 8.584635,
			latitude: 47.38253,
		},
	},
	{
		name: "Gärtnerei Waldhaus Dahlienschau und Naturkräuter",
		adress: "Waldhaus 31, 3432 Lützelflüh-Goldbach",
		coords: {
			longitude: 7.707025,
			latitude: 47.01343,
		},
	},
	{
		name: "Gärtnerei Wyttenbach",
		adress: "Venusstrasse 2, 4302 Augst BL",
		coords: {
			longitude: 7.728056,
			latitude: 47.532005,
		},
	},
	{
		name: "Gärtnerei zum Glück",
		adress: "Alte Landstrasse 236b, 8708 Männedorf",
		coords: {
			longitude: 8.693907,
			latitude: 47.253558,
		},
	},
	{
		name: "Grüter Gärtnerei",
		adress: "Unterdorfstrasse 10, 6232 Geuensee",
		coords: {
			longitude: 8.107036,
			latitude: 47.196534,
		},
	},
	{
		name: "Hotel Alte Gärtnerei, Ernst Studer",
		adress: "Hauptgasse 15, 4624 Härkingen",
		coords: {
			longitude: 7.81647,
			latitude: 47.308703,
		},
	},
	{
		name: "Huber Gärtnerei",
		adress: "Cholerweg 10, 5212 Hausen AG",
		coords: {
			longitude: 8.208185,
			latitude: 47.459432,
		},
	},
	{
		name: "Jenni Blumen und Gärtnerei",
		adress: "Kleine Kirchgasse 22, 5507 Mellingen",
		coords: {
			longitude: 8.273927,
			latitude: 47.418042,
		},
	},
	{
		name: "Jerg Gärtnerei",
		adress: "Gärtnerweg 8, 9403 Goldach",
		coords: {
			longitude: 9.479923,
			latitude: 47.472985,
		},
	},
	{
		name: "Morf Gärtnerei",
		adress: "Oberwilerstrasse 31, 8311 Brütten",
		coords: {
			longitude: 8.667465,
			latitude: 47.471046,
		},
	},
	{
		name: "Schertenleib Ruth Gärtnerei GmbH",
		adress: "Kanderstegstrasse 30A, 3714 Frutigen",
		coords: {
			longitude: 7.648048,
			latitude: 46.585408,
		},
	},
	{
		name: "Wapf Gärtnerei + Blumenladen",
		adress: "Hintergass 7, 6147 Altbüron",
		coords: {
			longitude: 7.880468,
			latitude: 47.183054,
		},
	},
	{
		name: "ZBINDEN Gärtnerei",
		adress: "Thurtalstrasse 32, 8450 Andelfingen",
		coords: {
			longitude: 8.683107,
			latitude: 47.59526,
		},
	},
	{
		name: "Buchter Gärten GmbH",
		adress: "Lindenmoosstrasse 4, 8910 Affoltern am Albis",
		coords: {
			longitude: 8.445848,
			latitude: 47.27008,
		},
	},
	{
		name: "Lutz Gärten",
		adress: "Tobelmülistrasse 9, 8126 Zumikon",
		coords: {
			longitude: 8.624361,
			latitude: 47.326906,
		},
	},
	{
		name: "Passion Verde GmbH",
		adress: "Bergstrasse 31C, 8890 Flums",
		coords: {
			longitude: 9.341592,
			latitude: 47.087729,
		},
	},
	{
		name: "amera garten GmbH",
		adress: "Neumattstrasse 41, 4147 Aesch BL",
		coords: {
			longitude: 7.589838,
			latitude: 47.470371,
		},
	},
	{
		name: "Friederika Stiftung",
		adress: "Hauptstrasse 31, 3512 Walkringen",
		coords: {
			longitude: 7.618072,
			latitude: 46.943297,
		},
	},
	{
		name: "Baumschule Gehrig GmbH",
		adress: "Strass 864, 9240 Niederglatt SG",
		coords: {
			longitude: 9.162309,
			latitude: 47.422305,
		},
	},
	{
		name: "Bruderer Gartenbau AG",
		adress: "Waldstrasse 5, 8125 Zollikerberg",
		coords: {
			longitude: 8.593101,
			latitude: 47.344737,
		},
	},
	{
		name: "CGU GmbH",
		adress: "Grellingerstrasse 23, 4208 Nunningen",
		coords: {
			longitude: 7.613818,
			latitude: 47.396991,
		},
	},
	{
		name: "Eggler Gartengestaltung",
		adress: "Dorfstrasse 5, 8934 Knonau",
		coords: {
			longitude: 8.463537,
			latitude: 47.224281,
		},
	},
	{
		name: "Gartus Gartenbau",
		adress: "Moosgarten 620, 9200 Gossau SG",
		coords: {
			longitude: 9.228177,
			latitude: 47.435347,
		},
	},
	{
		name: "Hollenstein Lachen AG",
		adress: "Oberdorfstrasse 42, 8853 Lachen SZ",
		coords: {
			longitude: 8.858436,
			latitude: 47.187731,
		},
	},
	{
		name: "Kallen Gartenbau und Unterhalt",
		adress: "Guggigässli 20, 3714 Frutigen",
		coords: {
			longitude: 7.655456,
			latitude: 46.581643,
		},
	},
	{
		name: "Lanz Jardin SA",
		adress: "Rue du Chalet 18, 2710 Tavannes",
		coords: {
			longitude: 7.201105,
			latitude: 47.226044,
		},
	},
	{
		name: "Müko Gartengestaltung AG",
		adress: "Fabrikstrasse 8, 9470 Buchs SG",
		coords: {
			longitude: 9.481155,
			latitude: 47.172359,
		},
	},
	{
		name: "Plankis Stiftung",
		adress: "Emserstrasse 44, 7000 Chur",
		coords: {
			longitude: 9.499932,
			latitude: 46.845076,
		},
	},
	{
		name: "Portmann Garten AG",
		adress: "Bahnhofstrasse 2, 6030 Ebikon",
		coords: {
			longitude: 8.343466,
			latitude: 47.083592,
		},
	},
	{
		name: "Portmann Garten AG",
		adress: "Grüsshaldenstrasse 14, 6390 Engelberg",
		coords: {
			longitude: 8.394703,
			latitude: 46.824079,
		},
	},
	{
		name: "Portmann Garten AG",
		adress: "Mittelgasse 5, 6056 Kägiswil",
		coords: {
			longitude: 8.261543,
			latitude: 46.920785,
		},
	},
	{
		name: "Portmann Garten AG",
		adress: "Oberrickenbachstrasse 29, 6386 Wolfenschiessen",
		coords: {
			longitude: 8.398794,
			latitude: 46.909497,
		},
	},
	{
		name: "Schneider Gartenbau / Tiefbau GmbH",
		adress: "Rossgrabenstrasse 6, 3089 Hinterfultigen",
		coords: {
			longitude: 7.40301,
			latitude: 46.831646,
		},
	},
	{
		name: "Stiftung Bächtelen",
		adress: "Grünaustrasse 53, 3084 Wabern",
		coords: {
			longitude: 7.453745,
			latitude: 46.9246,
		},
	},
	{
		name: "wag GmbH Werkstatt - Arbeit - Grundbildung",
		adress: "Solistrasse 74, 8180 Bülach",
		coords: {
			longitude: 8.540573,
			latitude: 47.53114,
		},
	},
	{
		name: "WENK Garten",
		adress: "Rössligasse 28, 4125 Riehen",
		coords: {
			longitude: 7.652137,
			latitude: 47.585503,
		},
	},
	{
		name: "Bolz Gartenbau GmbH",
		adress: "Gantrischweg 4, 3110 Münsingen",
		coords: {
			longitude: 7.552582,
			latitude: 46.873146,
		},
	},
	{
		name: "ok gartenbau gmbh",
		adress: "Tegerfelderstrasse 25, 5303 Würenlingen",
		coords: {
			longitude: 8.256474,
			latitude: 47.536291,
		},
	},
	{
		name: "AB Liegenschaften Service GmbH",
		adress: "Dorfstrasse 15, 8715 Bollingen",
		coords: {
			longitude: 8.895379,
			latitude: 47.220897,
		},
	},
	{
		name: "Arnet Gartenbau AG",
		adress: "Mööslimatten 3, 6218 Ettiswil",
		coords: {
			longitude: 8.020892,
			latitude: 47.147205,
		},
	},
	{
		name: "Blumen & Gärten Schalch",
		adress: "Wanngasse 29, 8240 Thayngen",
		coords: {
			longitude: 8.71424,
			latitude: 47.747568,
		},
	},
	{
		name: "Blumen Münger AG",
		adress: "Friedhofstrasse 4, 9220 Bischofszell",
		coords: {
			longitude: 9.242617,
			latitude: 47.495191,
		},
	},
	{
		name: "Fellmann Garten AG",
		adress: "Im Jöchler 2, 6340 Baar",
		coords: {
			longitude: 8.524886,
			latitude: 47.202868,
		},
	},
	{
		name: "Forster Baumschule",
		adress: "Erlachstrasse 20, 3234 Vinelz",
		coords: {
			longitude: 7.105423,
			latitude: 47.0372,
		},
	},
	{
		name: "Gartenbau Rolf AG",
		adress: "Auschachen 1, 5105 Auenstein",
		coords: {
			longitude: 8.153623,
			latitude: 47.415844,
		},
	},
	{
		name: "Gartenheini",
		adress: "Hof 501, 9103 Schwellbrunn",
		coords: {
			longitude: 9.224063,
			latitude: 47.369619,
		},
	},
	{
		name: "Gerber Fleurs SA",
		adress: "Halte de Trey 5, 1552 Trey",
		coords: {
			longitude: 6.9182,
			latitude: 46.783569,
		},
	},
	{
		name: "Graf Gartenbau AG",
		adress: "Spitalstrasse 74, 8952 Schlieren",
		coords: {
			longitude: 8.426787,
			latitude: 47.396338,
		},
	},
	{
		name: "Habegger Stephan",
		adress: "Bündtenweg 4, 4461 Böckten",
		coords: {
			longitude: 7.836455,
			latitude: 47.46369,
		},
	},
	{
		name: "Haldi Erich",
		adress: "Cheserystrasse 50, 3780 Gstaad",
		coords: {
			longitude: 7.292145,
			latitude: 46.479814,
		},
	},
	{
		name: "Huplant Pflanzenkulturen AG",
		adress: "Holzikerstrasse 11, 5042 Hirschthal",
		coords: {
			longitude: 8.043592,
			latitude: 47.318468,
		},
	},
	{
		name: "Kappeler Gartenwelt",
		adress: "Hummelweg 15, 9244 Niederuzwil",
		coords: {
			longitude: 9.145808,
			latitude: 47.449655,
		},
	},
	{
		name: "Löw Gartenbau AG",
		adress: "Im Schwobenacher 8, 4133 Pratteln",
		coords: {
			longitude: 7.690853,
			latitude: 47.513915,
		},
	},
	{
		name: "Siegenthaler Gartenbau",
		adress: "Kohlackerstrasse 6, 4323 Wallbach",
		coords: {
			longitude: 7.900635,
			latitude: 47.555514,
		},
	},
	{
		name: "WERKSTAR Stiftung",
		adress: "Ermitagestrasse 1, 4144 Arlesheim",
		coords: {
			longitude: 7.620098,
			latitude: 47.494962,
		},
	},
	{
		name: "Würth Gartenbau AG",
		adress: "Dorfstrasse 33, 9305 Berg SG",
		coords: {
			longitude: 9.407326,
			latitude: 47.486596,
		},
	},
	{
		name: "Stadler Friedhofgärtnerei & Gartenbau GmbH",
		adress: "Toggenburgerstrasse 20, 9230 Flawil",
		coords: {
			longitude: 9.166634,
			latitude: 47.415502,
		},
	},
	{
		name: "Fröhlich Thomas Landschaftsgärtnerei AG",
		adress: "Parkstrasse 50, 4106 Therwil",
		coords: {
			longitude: 7.554237,
			latitude: 47.50172,
		},
	},
	{
		name: "Die Dorfgärtnerei G & K GmbH",
		adress: "Thunstettenstrasse 2, 3368 Bleienbach",
		coords: {
			longitude: 7.753417,
			latitude: 47.185225,
		},
	},
	{
		name: "Blumengärtnerei Kägi GmbH",
		adress: "Kalcheggstrasse 16, 8495 Schmidrüti",
		coords: {
			longitude: 8.902751,
			latitude: 47.41141,
		},
	},
	{
		name: "Vogt Roger Staudengärtnerei",
		adress: "Wannenstrasse 21, 8703 Erlenbach ZH",
		coords: {
			longitude: 8.598188,
			latitude: 47.299952,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Stadtverwaltung",
		coords: {
			longitude: 9.05774,
			latitude: 47.461222,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Stadtverwaltung",
		coords: {
			longitude: 7.793784,
			latitude: 47.212182,
		},
	},
	{
		name: "Friedhofgärtnerei",
		adress: "Stadtverwaltung Thun",
		coords: {
			longitude: 7.616773,
			latitude: 46.752508,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Bau- und Verkehrsdepartement",
		coords: {
			longitude: 7.594826,
			latitude: 47.552407,
		},
	},
	{
		name: "Friedhofgärtnerei",
		adress: "Einwohnergemeinde Gerlafingen",
		coords: {
			longitude: 7.646091,
			latitude: 47.251533,
		},
	},
	{
		name: "Gemeindegärtnerei",
		adress: "Binningen",
		coords: {
			longitude: 7.572398,
			latitude: 47.529842,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Stadtverwaltung Thun",
		coords: {
			longitude: 7.616773,
			latitude: 46.752508,
		},
	},
	{
		name: "Friedhofgärtnerei",
		adress: "Horgen",
		coords: {
			longitude: 8.59605,
			latitude: 47.259251,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Stadt Luzern Stadtverwaltung",
		coords: {
			longitude: 8.31091,
			latitude: 47.041421,
		},
	},
	{
		name: "Produktion Stadtgärtnerei",
		adress: "Stadt Luzern Stadtverwaltung",
		coords: {
			longitude: 8.296338,
			latitude: 47.061698,
		},
	},
	{
		name: "der Stadtgärtnerei",
		adress: "Talstrasse 99, 4144 Arlesheim",
		coords: {
			longitude: 7.610982,
			latitude: 47.503547,
		},
	},
	{
		name: "Friedhofgärtnerei",
		adress: "3400 Burgdorf",
		coords: {
			longitude: 7.624498,
			latitude: 47.054845,
		},
	},
	{
		name: "Friedhofgärtnerei",
		adress: "Niedermatte 115B, 3813 Saxeten",
		coords: {
			longitude: 7.832879,
			latitude: 46.636014,
		},
	},
	{
		name: "Friedhofgärtnerei",
		adress: "Pestalozzistrasse 48, 3600 Thun",
		coords: {
			longitude: 7.616773,
			latitude: 46.752508,
		},
	},
	{
		name: "Friedhofgärtnerei",
		adress: "Friedhofstrasse 10, 5610 Wohlen AG",
		coords: {
			longitude: 8.276677,
			latitude: 47.346028,
		},
	},
	{
		name: "Gemeindegärtnerei",
		adress: "Geissbergweg 25, 4900 Langenthal",
		coords: {
			longitude: 7.793784,
			latitude: 47.212182,
		},
	},
	{
		name: "Schutz Filisur, Alpin Engrosgärtnerei GmbH",
		adress: "Quedra 2, 7477 Filisur",
		coords: {
			longitude: 9.685368,
			latitude: 46.67264,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Talstrasse 99, 4144 Arlesheim",
		coords: {
			longitude: 7.610982,
			latitude: 47.503547,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Unter Brüglingen 3a, 4052 Basel",
		coords: {
			longitude: 7.615026,
			latitude: 47.534444,
		},
	},
	{
		name: "Stadtgärtnerei",
		adress: "Mattenstrasse 5, 2540 Grenchen",
		coords: {
			longitude: 7.405389,
			latitude: 47.192745,
		},
	},
	{
		name: "Staudengärtnerei Hofer Adrian",
		adress: "Zehendermätteli, Reichenbachstrasse 161, 3004 Bern",
		coords: {
			longitude: 7.444191,
			latitude: 46.979543,
		},
	},
	{
		name: "Blumen Haueter",
		adress: "Dorfstrasse 28, 3472 Wynigen",
		coords: {
			longitude: 7.66542,
			latitude: 47.105395,
		},
	},
	{
		name: "Blumen Hug AG",
		adress: "Hohenrainstrasse 2, 4133 Pratteln",
		coords: {
			longitude: 7.690122,
			latitude: 47.524926,
		},
	},
	{
		name: "Schaufelbühl AG",
		adress: "Köllikerstrasse 66, 5036 Oberentfelden",
		coords: {
			longitude: 8.038374,
			latitude: 47.34976,
		},
	},
	{
		name: "Frey H.P. Blumen + Floristik AG",
		adress: "Paradiesweg 6, 5702 Niederlenz",
		coords: {
			longitude: 8.173669,
			latitude: 47.396434,
		},
	},
	{
		name: "Hirschi Marcel",
		adress: "Haslerenstrasse 4, 3703 Aeschi b. Spiez",
		coords: {
			longitude: 7.688611,
			latitude: 46.661663,
		},
	},
	{
		name: "Singer René",
		adress: "Poststrasse 5, 8272 Ermatingen",
		coords: {
			longitude: 9.083049,
			latitude: 47.670158,
		},
	},
	{
		name: "Blättler Gartenbau GmbH",
		adress: "Gerbistrasse 3, 6064 Kerns",
		coords: {
			longitude: 8.267581,
			latitude: 46.891739,
		},
	},
	{
		name: "Gartencenter Hoffmann AG",
		adress: "Untere Bergstrasse 11, 8103 Unterengstringen",
		coords: {
			longitude: 8.448686,
			latitude: 47.412456,
		},
	},
	{
		name: "Grieb Manfred AG",
		adress: "Birchstrasse 6, 3186 Düdingen",
		coords: {
			longitude: 7.192189,
			latitude: 46.856095,
		},
	},
	{
		name: "Blaser Benjamin",
		adress: "Chemin du Petit Lac 1, 1585 Salavaux",
		coords: {
			longitude: 7.023828,
			latitude: 46.919294,
		},
	},
	{
		name: "Blumen Stalder",
		adress: "Grauenstein 11, 3325 Hettiswil b. Hindelbank",
		coords: {
			longitude: 7.559874,
			latitude: 47.031184,
		},
	},
	{
		name: "Arxhof, Staatliche Lehrbetriebe",
		adress: "Arxhof 1, 4435 Niederdorf",
		coords: {
			longitude: 7.732778,
			latitude: 47.422653,
		},
	},
	{
		name: "Blumen Grüter",
		adress: "Unterdorfstrasse 10, 6232 Geuensee",
		coords: {
			longitude: 8.107036,
			latitude: 47.196534,
		},
	},
	{
		name: "Blumen u. Garten Anstalt",
		adress: "Eschner Strasse 37, 9487 Gamprin-Bendern",
		coords: {
			longitude: 9.508,
			latitude: 47.211407,
		},
	},
	{
		name: "Gabriel Blumen & Garten AG",
		adress: "Haldenmatt 1, 6204 Sempach",
		coords: {
			longitude: 8.192529,
			latitude: 47.130206,
		},
	},
	{
		name: "Locher Heinz",
		adress: "Niederhornweg 17, 3702 Hondrich",
		coords: {
			longitude: 7.686822,
			latitude: 46.676186,
		},
	},
	{
		name: "Oswald Alois",
		adress: "Amriswilerstrasse 23, 8589 Sitterdorf",
		coords: {
			longitude: 9.244593,
			latitude: 47.501008,
		},
	},
	{
		name: "Rüdisüli Robert AG",
		adress: "Rickenstrasse 23, 8722 Kaltbrunn",
		coords: {
			longitude: 9.027814,
			latitude: 47.216968,
		},
	},
	{
		name: "Arnold Blumen",
		adress: "Herblingerstrasse 34, 8207 Schaffhausen",
		coords: {
			longitude: 8.655128,
			latitude: 47.718763,
		},
	},
	{
		name: "Blumen Hüssy",
		adress: "Sandgrubenstrasse 11, 8330 Pfäffikon ZH",
		coords: {
			longitude: 8.776576,
			latitude: 47.36852,
		},
	},
	{
		name: "BLUMEN rosabraun GmbH",
		adress: "beim Stadtweier, Mörikonerstrasse, 9552 Bronschhofen",
		coords: {
			longitude: 9.018984,
			latitude: 47.478769,
		},
	},
	{
		name: "Pure Foods AG",
		adress: "Stockerstrasse 55, 8002 Zürich",
		coords: {
			longitude: 8.533973,
			latitude: 47.368773,
		},
	},
	{
		name: "Senn Blumen AG",
		adress: "Hauptstrasse 30, 4102 Binningen",
		coords: {
			longitude: 7.574341,
			latitude: 47.542224,
		},
	},
	{
		name: "Aebi Doris",
		adress: "Kirchgasse 4, 3860 Meiringen",
		coords: {
			longitude: 8.1876,
			latitude: 46.727668,
		},
	},
	{
		name: "Aeschbacher Alfred u. Edith (-Bleuler)",
		adress: "Schulstrasse 8, 8965 Berikon",
		coords: {
			longitude: 8.373218,
			latitude: 47.351125,
		},
	},
	{
		name: "Aeschlimann André jun. (-Dick)",
		adress: "Noflenweg 8, 3177 Laupen BE",
		coords: {
			longitude: 7.240885,
			latitude: 46.900267,
		},
	},
	{
		name: "Auf der Maur Edwin u. Hedy (-Herger)",
		adress: "St. Franziskus 1, 6443 Morschach",
		coords: {
			longitude: 8.618187,
			latitude: 46.975243,
		},
	},
	{
		name: "Bäbler Hans",
		adress: "Bergen, 8765 Engi",
		coords: {
			longitude: 9.151252,
			latitude: 46.985486,
		},
	},
	{
		name: "Bastawrous Youssef (-Matter)",
		adress: "Brüelgarten 6, 8226 Schleitheim",
		coords: {
			longitude: 8.485571,
			latitude: 47.747863,
		},
	},
	{
		name: "Baumann Peter (-Hoppeler)",
		adress: "Bernstrasse 235, 8965 Berikon",
		coords: {
			longitude: 8.359906,
			latitude: 47.359705,
		},
	},
	{
		name: "Baumgartner Daniel",
		adress: "Unterbergen, 4416 Bubendorf",
		coords: {
			longitude: 7.733948,
			latitude: 47.464023,
		},
	},
	{
		name: "Bayer André",
		adress: "Untere Geerenstrasse 49, 8600 Dübendorf",
		coords: {
			longitude: 8.612997,
			latitude: 47.386401,
		},
	},
	{
		name: "Beck Hansruedi (-Rütsche)",
		adress: "Hinterweg 6, 8468 Waltalingen",
		coords: {
			longitude: 8.777964,
			latitude: 47.623419,
		},
	},
	{
		name: "Blättler Noldi (-Raab)",
		adress: "Gerbistrasse 3, 6064 Kerns",
		coords: {
			longitude: 8.267581,
			latitude: 46.891739,
		},
	},
	{
		name: "Briner Karl",
		adress: "Schwizerstrasse 53, 8610 Uster",
		coords: {
			longitude: 8.720877,
			latitude: 47.339008,
		},
	},
	{
		name: "Bryner Beat",
		adress: "Ettingerstrasse 101, 4147 Aesch BL",
		coords: {
			longitude: 7.579355,
			latitude: 47.473829,
		},
	},
	{
		name: "Chopard Peter (-Reubi)",
		adress: "Bahnhofstrasse 73, 3232 Ins",
		coords: {
			longitude: 7.102518,
			latitude: 47.003298,
		},
	},
	{
		name: "Christen Robert u. Anita (-Baumgartner)",
		adress: "Bergstrasse 31, 8108 Dällikon",
		coords: {
			longitude: 8.443493,
			latitude: 47.435717,
		},
	},
	{
		name: "Conti Peter (-Schmidheiny)",
		adress: "Bächlerstrasse 23, 8802 Kilchberg ZH",
		coords: {
			longitude: 8.539803,
			latitude: 47.329867,
		},
	},
	{
		name: "Dubach Josef und Annelies (-Häfliger)",
		adress: "Ettiswilerstrasse 9, 6130 Willisau",
		coords: {
			longitude: 7.993591,
			latitude: 47.123449,
		},
	},
	{
		name: "Dubach Liliane",
		adress: "Wiesenweg 5, 8115 Hüttikon",
		coords: {
			longitude: 8.386276,
			latitude: 47.441678,
		},
	},
	{
		name: "Durrer Edgar",
		adress: "Windegglistrasse 3, 6064 Kerns",
		coords: {
			longitude: 8.272652,
			latitude: 46.910782,
		},
	},
	{
		name: "Eberhard Hansruedi und Charlotte (-Bantli)",
		adress: "Bächelweg 16, 8156 Oberhasli",
		coords: {
			longitude: 8.493369,
			latitude: 47.466008,
		},
	},
	{
		name: "Eggen Jakob",
		adress: "Schwarzenmatt 424, 3766 Boltigen",
		coords: {
			longitude: 7.368395,
			latitude: 46.623232,
		},
	},
	{
		name: "Ehrle Martin und Stefanie",
		adress: "In der Halden 418, 8320 Fehraltorf",
		coords: {
			longitude: 8.748803,
			latitude: 47.403255,
		},
	},
	{
		name: "Eisenhut Vivaio",
		adress: "Via Parco Botanico 21, 6575 Vairano",
		coords: {
			longitude: 8.817353,
			latitude: 46.13459,
		},
	},
	{
		name: "El Garhy Khaled Transporte",
		adress: "Arlesheimerstrasse 15, 4053 Basel",
		coords: {
			longitude: 7.600471,
			latitude: 47.539043,
		},
	},
	{
		name: "Engler Ruth (-Sixt)",
		adress: "Blauenstrasse 2, 4104 Oberwil BL",
		coords: {
			longitude: 7.546438,
			latitude: 47.510847,
		},
	},
	{
		name: "Etterlin Hans und Vreni (-Annen)",
		adress: "Kirchweg 10, 6343 Rotkreuz",
		coords: {
			longitude: 8.429084,
			latitude: 47.139297,
		},
	},
	{
		name: "Fasolini Albin",
		adress: "Aktienstrasse 70, 7411 Sils im Domleschg",
		coords: {
			longitude: 9.45266,
			latitude: 46.704374,
		},
	},
	{
		name: "Fässler Stefan",
		adress: "Hotterdingerstrasse 25, 8590 Romanshorn",
		coords: {
			longitude: 9.359923,
			latitude: 47.558384,
		},
	},
	{
		name: "Fenner Rudolf",
		adress: "Schonau, 8911 Rifferswil",
		coords: {
			longitude: 8.495888,
			latitude: 47.242313,
		},
	},
	{
		name: "Fischer Max (-Maag) jun.",
		adress: "Moos 1, 8311 Brütten",
		coords: {
			longitude: 8.679875,
			latitude: 47.469564,
		},
	},
	{
		name: "Flurs Sampaguita",
		adress: "Via Sontga Gada 18, 7180 Disentis/Mustér",
		coords: {
			longitude: 8.850107,
			latitude: 46.700118,
		},
	},
	{
		name: "Friedli Christian",
		adress: "Moosweg 5, 5512 Wohlenschwil, Büblikon",
		coords: {
			longitude: 8.259618,
			latitude: 47.415662,
		},
	},
	{
		name: "Friedrich Hans und Margrit (-Peter)",
		adress: "Jucher 64A, 3036 Detligen",
		coords: {
			longitude: 7.262221,
			latitude: 47.004619,
		},
	},
	{
		name: "Gartmann Andreas (-Ehrensperger)",
		adress: "8165 Oberweningen",
		coords: {
			longitude: 8.405034,
			latitude: 47.50069,
		},
	},
	{
		name: "Giardinaria Müller SA",
		adress: "Quadras 3, 7542 Susch",
		coords: {
			longitude: 10.079753,
			latitude: 46.7509,
		},
	},
	{
		name: "Gisler Alex",
		adress: "Hubelstrasse 20, 5524 Niederwil AG",
		coords: {
			longitude: 8.2967,
			latitude: 47.381357,
		},
	},
	{
		name: "Halama Werner",
		adress: "Dorfstrasse 37, 8802 Kilchberg ZH",
		coords: {
			longitude: 8.547416,
			latitude: 47.321851,
		},
	},
	{
		name: "Haudenschild Peter und Irene (-Krähenbühl)",
		adress: "Oberfeldweg 2, 4704 Niederbipp",
		coords: {
			longitude: 7.692748,
			latitude: 47.26513,
		},
	},
	{
		name: "Haueter Markus",
		adress: "Kaltackerstrasse 3, 3412 Heimiswil",
		coords: {
			longitude: 7.658679,
			latitude: 47.064454,
		},
	},
	{
		name: "Haueter Markus",
		adress: "Moos 437, 3413 Kaltacker",
		coords: {
			longitude: 7.65319,
			latitude: 47.074566,
		},
	},
	{
		name: "Heini AG",
		adress: "Waltwil 55, 6032 Emmen",
		coords: {
			longitude: 8.329577,
			latitude: 47.101286,
		},
	},
	{
		name: "Heinz Reto (-Janggen)",
		adress: "Stückliweg 43, 7434 Sufers",
		coords: {
			longitude: 9.367022,
			latitude: 46.570746,
		},
	},
	{
		name: "Herger Seppi",
		adress: "Unterdorfstrasse 27a, 6033 Buchrain",
		coords: {
			longitude: 8.352127,
			latitude: 47.096432,
		},
	},
	{
		name: "Hiltbrand Hannes",
		adress: "Im Bättel 239, 4618 Boningen",
		coords: {
			longitude: 7.853093,
			latitude: 47.305942,
		},
	},
	{
		name: "Hirter Blumen AG",
		adress: "Dorfstrasse 44, 3123 Belp",
		coords: {
			longitude: 7.501367,
			latitude: 46.890645,
		},
	},
	{
		name: "Ingold Monika und Simon (-Schori)",
		adress: "Fiechtenstrasse 5, 4950 Huttwil",
		coords: {
			longitude: 7.837214,
			latitude: 47.114742,
		},
	},
	{
		name: "Kammermann Beatrice u. Stefan (-Grünenwald)",
		adress: "Bachgraben 67, 3614 Unterlangenegg",
		coords: {
			longitude: 7.700114,
			latitude: 46.803514,
		},
	},
	{
		name: "Kohli Hanspeter und Brigitte (-Krebs)",
		adress: "Grabmattweg 30, 3174 Thörishaus",
		coords: {
			longitude: 7.36515,
			latitude: 46.884197,
		},
	},
	{
		name: "Kummer Werner und Veronika",
		adress: "Bahnhofstrasse 20, 4622 Egerkingen",
		coords: {
			longitude: 7.795569,
			latitude: 47.319653,
		},
	},
	{
		name: "Kurmann Alois",
		adress: "Luzernstrasse 31, 6144 Zell LU",
		coords: {
			longitude: 7.937733,
			latitude: 47.13691,
		},
	},
	{
		name: "Kwasnitschka Günter",
		adress: "Untere Bachmatt 16, 6452 Sisikon",
		coords: {
			longitude: 8.620433,
			latitude: 46.947673,
		},
	},
	{
		name: "Lamprecht Pflanzen AG",
		adress: "Hirschacherstrasse 10, 8308 Illnau",
		coords: {
			longitude: 8.741026,
			latitude: 47.409775,
		},
	},
	{
		name: "Lanz Samuel und Verena (-Güdel)",
		adress: "Am Wald 88, 4944 Auswil",
		coords: {
			longitude: 7.83956,
			latitude: 47.139551,
		},
	},
	{
		name: "Luginbühl Hanspeter und Philine",
		adress: "Bemer 9, 8903 Birmensdorf ZH",
		coords: {
			longitude: 8.418593,
			latitude: 47.35128,
		},
	},
	{
		name: "Martin-Stiftung",
		adress: "8703 Erlenbach ZH",
		coords: {
			longitude: 8.591354,
			latitude: 47.304941,
		},
	},
	{
		name: "Muggli Hans-Ulrich",
		adress: "Schopfhaldenstrasse 2, 8340 Hinwil",
		coords: {
			longitude: 8.843647,
			latitude: 47.304897,
		},
	},
	{
		name: "Müller Leo und Zita (-Muff)",
		adress: "Nellenweg 22, 6206 Neuenkirch",
		coords: {
			longitude: 8.204717,
			latitude: 47.094864,
		},
	},
	{
		name: "Müller Margrit",
		adress: "Wartstrasse 31, 8400 Winterthur",
		coords: {
			longitude: 8.719122,
			latitude: 47.501807,
		},
	},
	{
		name: "Nützi Werner",
		adress: "Hirschenstrasse 8, 9242 Oberuzwil",
		coords: {
			longitude: 9.127034,
			latitude: 47.432721,
		},
	},
	{
		name: "Parletta Giovanni (-Lampert)",
		adress: "Blumenfeldstrasse 99, 8046 Zürich",
		coords: {
			longitude: 8.50568,
			latitude: 47.42576,
		},
	},
	{
		name: "Qengaj Musli u. Ismete (-Ibishi)",
		adress: "Birkenaustrasse 8, 9470 Buchs SG",
		coords: {
			longitude: 9.482406,
			latitude: 47.166075,
		},
	},
	{
		name: "Ramseier Margrit (-Hänni)",
		adress: "Auweg 19, 3628 Uttigen",
		coords: {
			longitude: 7.577227,
			latitude: 46.795678,
		},
	},
	{
		name: "Remund Gerhard",
		adress: "Grossmatt 8, 3664 Burgistein",
		coords: {
			longitude: 7.51119,
			latitude: 46.798941,
		},
	},
	{
		name: "Röthlisberger Stefan u. Simone (-Donzé)",
		adress: "Mattacker 48, 3663 Gurzelen",
		coords: {
			longitude: 7.547451,
			latitude: 46.773878,
		},
	},
	{
		name: "Rüegg Silvia u. Werner",
		adress: "Oberwilerstrasse 2, 8442 Hettlingen",
		coords: {
			longitude: 8.709997,
			latitude: 47.549329,
		},
	},
	{
		name: "Rusterholz Albert (-Strehler)",
		adress: "Wiesengrund 1, 8824 Schönenberg ZH",
		coords: {
			longitude: 8.647745,
			latitude: 47.191738,
		},
	},
	{
		name: "Schacher Anton und Annemarie (-Buholzer)",
		adress: "Kropfgasse 8, 6102 Malters",
		coords: {
			longitude: 8.184523,
			latitude: 47.036068,
		},
	},
	{
		name: "Schacher Hansrudolf (-Grau)",
		adress: "Hagenbuchrain 100, 8047 Zürich",
		coords: {
			longitude: 8.484124,
			latitude: 47.369496,
		},
	},
	{
		name: "Schenk Blumen",
		adress: "beim Spital, Waldhofstrasse 7, 4900 Langenthal",
		coords: {
			longitude: 7.7905,
			latitude: 47.216698,
		},
	},
	{
		name: "Schilliger Martin u. Franziska",
		adress: "Höchistrasse 43, 6353 Weggis",
		coords: {
			longitude: 8.415793,
			latitude: 47.031562,
		},
	},
	{
		name: "Schmitt Hilda (-Stade)",
		adress: "Neumattstrasse 25, 4147 Aesch BL",
		coords: {
			longitude: 7.592622,
			latitude: 47.469981,
		},
	},
	{
		name: "Spörndli Hansruedi (-Grossenbacher)",
		adress: "Schleitheimerstrasse 32, 8222 Beringen",
		coords: {
			longitude: 8.570293,
			latitude: 47.698142,
		},
	},
	{
		name: "Stieger Wilfried",
		adress: "Adlerstrasse 2, 9463 Oberriet SG",
		coords: {
			longitude: 9.563601,
			latitude: 47.31655,
		},
	},
	{
		name: "Stiftung BRUNEGG",
		adress: "Brunegg 3, 8634 Hombrechtikon",
		coords: {
			longitude: 8.772363,
			latitude: 47.243528,
		},
	},
	{
		name: "Stiftung LBB Lehrbetriebe beider Basel",
		adress: "Bungestrasse 75, 4055 Basel",
		coords: {
			longitude: 7.564575,
			latitude: 47.568686,
		},
	},
	{
		name: "Strub Werner (-Crausaz)",
		adress: "Römerbrunnenweg 10, 2540 Grenchen",
		coords: {
			longitude: 7.394298,
			latitude: 47.185221,
		},
	},
	{
		name: "Stucki Fritz und Alice",
		adress: "Halenweg 2, 3032 Hinterkappelen",
		coords: {
			longitude: 7.380409,
			latitude: 46.966287,
		},
	},
	{
		name: "Suter Markus und Therese (-Kocher)",
		adress: "Sensemattstrasse 55, 3174 Thörishaus",
		coords: {
			longitude: 7.353383,
			latitude: 46.89143,
		},
	},
	{
		name: "Tobler Eugen",
		adress: "Alpenstrasse 1, 2540 Grenchen",
		coords: {
			longitude: 7.396993,
			latitude: 47.196924,
		},
	},
	{
		name: "Tüscher Christian und Eduard Gebr.",
		adress: "Mösliweg 10, 3207 Golaten",
		coords: {
			longitude: 7.233722,
			latitude: 46.988794,
		},
	},
	{
		name: "VEBO Genossenschaft",
		adress: "Dorfstrasse 33, 4713 Matzendorf",
		coords: {
			longitude: 7.629704,
			latitude: 47.305214,
		},
	},
	{
		name: "Verhoeven Erwin",
		adress: "Sonnenburggutstrasse 51, 8200 Schaffhausen",
		coords: {
			longitude: 8.619592,
			latitude: 47.699522,
		},
	},
	{
		name: "Waffenschmidt Helmut",
		adress: "Faichrüti 248, 8330 Pfäffikon ZH",
		coords: {
			longitude: 8.759741,
			latitude: 47.359736,
		},
	},
	{
		name: "Wapf Rolf und Monika",
		adress: "Hintergass 7, 6147 Altbüron",
		coords: {
			longitude: 7.880468,
			latitude: 47.183054,
		},
	},
	{
		name: "Weber Hansruedi und Marianne (-Bolli)",
		adress: "Oberhof 14, 8242 Hofen SH",
		coords: {
			longitude: 8.675704,
			latitude: 47.78253,
		},
	},
	{
		name: "Weber Urs (-Lenz)",
		adress: "Bahnhofstrasse 8, 9606 Bütschwil",
		coords: {
			longitude: 9.073973,
			latitude: 47.358834,
		},
	},
	{
		name: "Wicki Beat",
		adress: "Rothenburgstrasse 2, 6020 Emmenbrücke",
		coords: {
			longitude: 8.272274,
			latitude: 47.081189,
		},
	},
	{
		name: "Widmer Moritz",
		adress: "Bachhüsliweg 8, 6042 Dietwil",
		coords: {
			longitude: 8.390391,
			latitude: 47.147477,
		},
	},
	{
		name: "Widmer Thomas",
		adress: "Bachhüsliweg 8, 6042 Dietwil",
		coords: {
			longitude: 8.390391,
			latitude: 47.147477,
		},
	},
	{
		name: "Ziegler Samuel (-Höhn)",
		adress: "Sonnenhofweg 1, 8810 Horgen",
		coords: {
			longitude: 8.62009,
			latitude: 47.229628,
		},
	},
	{
		name: "Zurmühle Ernst jun.",
		adress: "Neumoosstrasse 9, 6023 Rothenburg",
		coords: {
			longitude: 8.274935,
			latitude: 47.103163,
		},
	},
	{
		name: "Zurmühle Pia",
		adress: "Thurmweg 6, 6023 Rothenburg",
		coords: {
			longitude: 8.279597,
			latitude: 47.100521,
		},
	},
	{
		name: "Zwahlen von Niederhäusern Karin",
		adress: "Ried 48A, 3156 Riffenmatt",
		coords: {
			longitude: 7.336865,
			latitude: 46.766911,
		},
	},
	{
		name: "Blumenland Schweiz AG",
		adress: "Rainstrasse 50, 8426 Lufingen",
		coords: {
			longitude: 8.591487,
			latitude: 47.480076,
		},
	},
	{
		name: "Dr. med. D. Cahen Yves",
		adress: "Schützenmattstrasse 41, 4051 Basel",
		coords: {
			longitude: 7.580299,
			latitude: 47.555114,
		},
	},
	{
		name: "Daepp Gartenpflanzen",
		adress: "Bärenstutz 7, 3110 Münsingen",
		coords: {
			longitude: 7.563251,
			latitude: 46.880871,
		},
	},
	{
		name: "Kreienbühl - Schädlingsbekämpfung",
		adress: "Oberhofstettenstrasse 10A, 9012 St. Gallen",
	},
	{
		name: "ADES AG",
		adress: "Ruchstuckstrasse 19, 8306 Brüttisellen",
		coords: {
			longitude: 8.630753,
			latitude: 47.417549,
		},
	},
	{
		name: "Aemmer AG",
		adress: "Oeleweg 12, 3250 Lyss",
		coords: {
			longitude: 7.315752,
			latitude: 47.06734,
		},
	},
	{
		name: "Bieli Bestattungen - Beerdigungsinstitut",
		adress: "Baslerstrasse 136, 4123 Allschwil",
		coords: {
			longitude: 7.545684,
			latitude: 47.551941,
		},
	},
	{
		name: "Bieli Bestattungen - Beerdigungsinstitut",
		adress: "Im Langen Loh 231, 4054 Basel",
		coords: {
			longitude: 7.560302,
			latitude: 47.548392,
		},
	},
	{
		name: "Bieli Bestattungen - Beerdigungsinstitut",
		adress: "Hauptstrasse 10, 4127 Birsfelden",
		coords: {
			longitude: 7.618428,
			latitude: 47.554684,
		},
	},
	{
		name: "Bieli Bestattungen - Beerdigungsinstitut",
		adress: "Mühlegasse 11, 4410 Liestal",
		coords: {
			longitude: 7.734286,
			latitude: 47.484313,
		},
	},
	{
		name: "Bieli Bestattungen - Beerdigungsinstitut",
		adress: "Hauptstrasse 51, 4132 Muttenz",
		coords: {
			longitude: 7.645907,
			latitude: 47.525157,
		},
	},
	{
		name: "Bieli Bestattungen - Beerdigungsinstitut",
		adress: "Bahnhofstrasse 28, 4133 Pratteln",
		coords: {
			longitude: 7.691493,
			latitude: 47.519913,
		},
	},
	{
		name: "Bigler Gartenbau",
		adress: "Spicherweg 68E, 3075 Vielbringen b. Worb",
		coords: {
			longitude: 7.550711,
			latitude: 46.91368,
		},
	},
	{
		name: "Blattstiel AG",
		adress: "Säntisstrasse 2, 9500 Wil SG",
		coords: {
			longitude: 9.041429,
			latitude: 47.4618,
		},
	},
	{
		name: "Blumen Dufour AG",
		adress: "Spalenberg 4, 4051 Basel",
		coords: {
			longitude: 7.58655,
			latitude: 47.55749,
		},
	},
	{
		name: "Blumen Dufour AG",
		adress: "Baselstrasse 60, 4142 Münchenstein",
		coords: {
			longitude: 7.617178,
			latitude: 47.522695,
		},
	},
	{
		name: "Blumen Oase",
		adress: "Limmattalstrasse 64, 8955 Oetwil an der Limmat",
		coords: {
			longitude: 8.402288,
			latitude: 47.423853,
		},
	},
	{
		name: "Blumenhaus Viola",
		adress: "Bernstrasse 118, 4852 Rothrist",
		coords: {
			longitude: 7.890093,
			latitude: 47.305894,
		},
	},
	{
		name: "Florena Blumen & Geschenke",
		adress: "Affolternstrasse 7, 8908 Hedingen",
		coords: {
			longitude: 8.448785,
			latitude: 47.296824,
		},
	},
	{
		name: "GARBA A.Herrsche AG",
		adress: "Untersandstrasse 15, 9642 Ebnat-Kappel",
		coords: {
			longitude: 9.12235,
			latitude: 47.260734,
		},
	},
	{
		name: "Kies AG Glattfelden",
		adress: "Stationsstrasse 1, 8192 Glattfelden",
		coords: {
			longitude: 8.52547,
			latitude: 47.550487,
		},
	},
	{
		name: "Meyer Söhne AG",
		adress: "Hörnliallee 79, 4125 Riehen",
		coords: {
			longitude: 7.63598,
			latitude: 47.566114,
		},
	},
	{
		name: "Mühlhof - Zentrum für Suchttherapie & Rehabilitation",
		adress: "Goldacherstrasse 29, 9327 Tübach",
		coords: {
			longitude: 9.461754,
			latitude: 47.484757,
		},
	},
	{
		name: "Pfister grün und bunt AG",
		adress: "Brunnengasse 1, 8566 Dotnacht",
		coords: {
			longitude: 9.140038,
			latitude: 47.600602,
		},
	},
	{
		name: "Rutishauser Gartenbau GmbH",
		adress: "Bachstrasse 4, 8580 Amriswil",
		coords: {
			longitude: 9.304012,
			latitude: 47.546685,
		},
	},
	{
		name: "Stiftung Tannenhof",
		adress: "Tannenhof 225, 3236 Gampelen",
		coords: {
			longitude: 7.052935,
			latitude: 46.999373,
		},
	},
	{
		name: "Strobel Uhren und Schmuck",
		adress: "Hauptstrasse 19, 4144 Arlesheim",
		coords: {
			longitude: 7.619496,
			latitude: 47.493479,
		},
	},
	{
		name: "Blumen Hirt",
		adress: "Schulhausstrasse 10, 8783 Linthal",
		coords: {
			longitude: 8.996639,
			latitude: 46.920277,
		},
	},
	{
		name: "Blumenoase Staub",
		adress: "Raindliweg 4, 6315 Oberägeri",
		coords: {
			longitude: 8.610217,
			latitude: 47.135876,
		},
	},
	{
		name: "Fischer Gärtner",
		adress: "Mühlegasse 1, 6234 Triengen",
		coords: {
			longitude: 8.07506,
			latitude: 47.236464,
		},
	},
	{
		name: "Lampi's Velo - Lädeli",
		adress: "Hauptstrasse 28, 4654 Lostorf",
		coords: {
			longitude: 7.949344,
			latitude: 47.384259,
		},
	},
	{
		name: "Stiftung Schloss Turbenthal Gehörlosendorf",
		adress: "St. Gallerstrasse 8, 8488 Turbenthal",
		coords: {
			longitude: 8.849224,
			latitude: 47.435329,
		},
	},
	{
		name: "Meier's Bluemelädeli",
		adress: "Hochfelderstrasse 2, 8174 Stadel b. Niederglatt",
		coords: {
			longitude: 8.471745,
			latitude: 47.524624,
		},
	},
	{
		name: "Stadtbauamt, Abt. Hochbau",
		adress: "Stadt Solothurn",
		coords: {
			longitude: 7.541718,
			latitude: 47.210064,
		},
	},
	{
		name: "Grünhaus AG",
		adress: "Herostrasse 7, 8048 Zürich",
		coords: {
			longitude: 8.487918,
			latitude: 47.394108,
		},
	},
	{
		name: "Hortussa AG",
		adress: "Uttigenstrasse 75, 3661 Uetendorf",
		coords: {
			longitude: 7.589431,
			latitude: 46.780262,
		},
	},
	{
		name: "Alpin Gartencenter",
		adress: "7460 Savognin",
		coords: {
			longitude: 9.598657,
			latitude: 46.596323,
		},
	},
	{
		name: "Altwegg Gartenbau",
		adress: "Alpenblickstrasse 5, 8630 Rüti ZH",
		coords: {
			longitude: 8.845948,
			latitude: 47.257766,
		},
	},
	{
		name: "Baumann Gartenbau AG",
		adress: "Hünibachstrasse 31, 3652 Hilterfingen",
		coords: {
			longitude: 7.654408,
			latitude: 46.741235,
		},
	},
	{
		name: "Ryffel Verena",
		adress: "Grütstrasse 84, 8704 Herrliberg",
		coords: {
			longitude: 8.605811,
			latitude: 47.290547,
		},
	},
	{
		name: "Blumen Burkhalter GmbH",
		adress: "Sigriswilstrasse 151, 3655 Sigriswil",
		coords: {
			longitude: 7.714631,
			latitude: 46.716692,
		},
	},
	{
		name: "Alpin Pflanzencenter Celerina",
		adress: "Prolizun, 7505 Celerina/Schlarigna",
		coords: {
			longitude: 9.860055,
			latitude: 46.51268,
		},
	},
	{
		name: "Barmettler Heinrich",
		adress: "Dorfstrasse 145, 4612 Wangen b. Olten",
		coords: {
			longitude: 7.875612,
			latitude: 47.34468,
		},
	},
	{
		name: "Fegatec M. Feustle",
		adress: "Unterrindal 6, 9604 Unterrindal",
		coords: {
			longitude: 9.088263,
			latitude: 47.409046,
		},
	},
	{
		name: "Florarte Pflanzenhotel",
		adress: "Im Grüenen 976, 3122 Kehrsatz",
		coords: {
			longitude: 7.484107,
			latitude: 46.916001,
		},
	},
	{
		name: "Friedhof",
		adress: "Friedhofstrasse 1, 9500 Wil SG",
		coords: {
			longitude: 9.05774,
			latitude: 47.461222,
		},
	},
	{
		name: "Leuenberger Martin und Monika (-Wüthrich)",
		adress: "Unterfuhrenberg, 3457 Wasen im Emmental",
		coords: {
			longitude: 7.794555,
			latitude: 47.046115,
		},
	},
	{
		name: "Mathis Gartenbau",
		adress: "Hauptstrasse 119, 8357 Guntershausen b. Aadorf",
		coords: {
			longitude: 8.927512,
			latitude: 47.471329,
		},
	},
	{
		name: "Meyer Adolf",
		adress: "Herrenmattstrasse 21, 3175 Flamatt",
		coords: {
			longitude: 7.332497,
			latitude: 46.889667,
		},
	},
	{
		name: "Reist & Co",
		adress: "Gewerbestrasse 3, 4552 Derendingen",
		coords: {
			longitude: 7.597001,
			latitude: 47.197427,
		},
	},
	{
		name: "Weber Franz",
		adress: "Waldhäusernstrasse 4, 5624 Bünzen",
		coords: {
			longitude: 8.323524,
			latitude: 47.311579,
		},
	},
	{
		name: "Winkler & Richard AG",
		adress: "Frauenfelderstrasse 27, 9545 Wängi",
		coords: {
			longitude: 8.950907,
			latitude: 47.499065,
		},
	},
	{
		name: "Genossenschaft Berner Blumenbörsen",
		adress: "Löchliweg 27, 3014 Bern",
		coords: {
			longitude: 7.467266,
			latitude: 46.970562,
		},
	},
	{
		name: "Etter-Bangerter Hans",
		adress: "Kreuzweg 26, 3216 Ried b. Kerzers",
		coords: {
			longitude: 7.183114,
			latitude: 46.955428,
		},
	},
	{
		name: "Herrmann Pflanzen GmbH",
		adress: "Bürenstrasse 1, 2554 Meinisberg",
		coords: {
			longitude: 7.371414,
			latitude: 47.158981,
		},
	},
	{
		name: "Koran AG Bewässerung",
		adress: "Werk-Strasse 10, 8627 Grüningen",
		coords: {
			longitude: 8.756131,
			latitude: 47.283854,
		},
	},
	{
		name: "Stalder Schweizerfrüchte AG",
		adress: "Vorderdorf 1, 6287 Aesch LU",
		coords: {
			longitude: 8.241994,
			latitude: 47.253123,
		},
	},
	{
		name: "Blumenboutique Goos",
		adress: "Triemlistrasse 129, 8047 Zürich",
		coords: {
			longitude: 8.492081,
			latitude: 47.369459,
		},
	},
	{
		name: "A.T.U Auto-Technik-Unger GmbH",
		adress: "Gärtnereiweg 4, 4665 Oftringen",
		coords: {
			longitude: 7.933452,
			latitude: 47.301435,
		},
	},
	{
		name: "discountfit.ch",
		adress: "Gärtnereiweg 4a, 4665 Oftringen",
		coords: {
			longitude: 7.933334,
			latitude: 47.301588,
		},
	},
	{
		name: "Maio Sandra",
		adress: "Gärtnereiweg 10, 3047 Bremgarten b. Bern",
		coords: {
			longitude: 7.441353,
			latitude: 46.982385,
		},
	},
	{
		name: "GOLDEN GAMES Peter Schorno",
		adress: "Gärtnereiweg 23, 4665 Oftringen",
		coords: {
			longitude: 7.934298,
			latitude: 47.301476,
		},
	},
	{
		name: "Life Investment Group AG",
		adress: "Gärtnereiweg 4b, 4665 Oftringen",
		coords: {
			longitude: 7.933569,
			latitude: 47.301254,
		},
	},
	{
		name: "Simec AG",
		adress: "Gärtnereiweg 4b, 4665 Oftringen",
		coords: {
			longitude: 7.933569,
			latitude: 47.301254,
		},
	},
	{
		name: "Venenzentrum Olten / Aarau",
		adress: "Gärtnereiweg 4A, 4665 Oftringen",
		coords: {
			longitude: 7.933334,
			latitude: 47.301588,
		},
	},
	{
		name: "Andriaccio Gesualdo",
		adress: "Gärtnereiweg 13, 4665 Oftringen",
		coords: {
			longitude: 7.933162,
			latitude: 47.302983,
		},
	},
	{
		name: "Arena Malerei & Gipserei AG",
		adress: "Gärtnereiweg 23, 4665 Oftringen",
		coords: {
			longitude: 7.934298,
			latitude: 47.301476,
		},
	},
	{
		name: "Aumann Torsten",
		adress: "Gärtnereiweg 1, 9477 Trübbach",
		coords: {
			longitude: 9.481699,
			latitude: 47.071933,
		},
	},
	{
		name: "Autokom AG",
		adress: "Gärtnereiweg 23, 4665 Oftringen",
		coords: {
			longitude: 7.934298,
			latitude: 47.301476,
		},
	},
	{
		name: "Bachmann Patrick Andreas",
		adress: "Gärtnereistrasse 1, 4536 Attiswil",
		coords: {
			longitude: 7.612898,
			latitude: 47.248539,
		},
	},
	{
		name: "Baric Vlado",
		adress: "Gärtnereiweg 15, 4665 Oftringen",
		coords: {
			longitude: 7.933162,
			latitude: 47.302983,
		},
	},
	{
		name: "Baselgia-Bucher Thomas und Sandra",
		adress: "Gärtnereistrasse 3, 9425 Thal",
		coords: {
			longitude: 9.564606,
			latitude: 47.467222,
		},
	},
	{
		name: "Berger Erwin (-Seifert)",
		adress: "Gärtnereistrasse 1, 9466 Sennwald",
		coords: {
			longitude: 9.501386,
			latitude: 47.260698,
		},
	},
	{
		name: "Bosshart Alexandra und Reto (-Piccolin)",
		adress: "Gärtnereistrasse 7, 9425 Thal",
		coords: {
			longitude: 9.564141,
			latitude: 47.467203,
		},
	},
	{
		name: "Bouvrot René und Ruth",
		adress: "Gärtnereiweg 6, 3047 Bremgarten b. Bern",
		coords: {
			longitude: 7.441116,
			latitude: 46.98243,
		},
	},
	{
		name: "Cipriano Fanny",
		adress: "Gärtnereistrasse 1, 9425 Thal",
		coords: {
			longitude: 9.564525,
			latitude: 47.46752,
		},
	},
	{
		name: "Dütschler Martin",
		adress: "Gärtnereiweg 1, 9477 Trübbach",
		coords: {
			longitude: 9.481699,
			latitude: 47.071933,
		},
	},
	{
		name: "Enzler Philipp und Claudia (-Gmünder)",
		adress: "Gärtnereistrasse 9, 9425 Thal",
		coords: {
			longitude: 9.563702,
			latitude: 47.467175,
		},
	},
	{
		name: "Glauser Sabine, Fiona und Livia (-Wyrsch)",
		adress: "Gärtnereiweg 18, 3047 Bremgarten b. Bern",
		coords: {
			longitude: 7.44109,
			latitude: 46.982152,
		},
	},
	{
		name: "Gulli Giuseppe (-Scotece)",
		adress: "Gärtnereiweg 2, 9477 Trübbach",
		coords: {
			longitude: 9.482456,
			latitude: 47.071758,
		},
	},
	{
		name: "Haug Andreas und Gabriela (-Kurmann)",
		adress: "Gärtnereistrasse 6, 4536 Attiswil",
		coords: {
			longitude: 7.611986,
			latitude: 47.248576,
		},
	},
	{
		name: "Hauser Sylvia",
		adress: "Gärtnereiweg 13, 4665 Oftringen",
		coords: {
			longitude: 7.933162,
			latitude: 47.302983,
		},
	},
	{
		name: "Heeb Hanspeter und Marlis (-Rüdisühli)",
		adress: "Gärtnereistrasse 4, 9466 Sennwald",
		coords: {
			longitude: 9.501964,
			latitude: 47.260616,
		},
	},
	{
		name: "Hofstetter Markus und Inès (-Willimann)",
		adress: "Gärtnereiweg 9, 4665 Oftringen",
		coords: {
			longitude: 7.932955,
			latitude: 47.303497,
		},
	},
	{
		name: "Holliger Gerald und Maria",
		adress: "Gärtnereiweg 1, 5035 Unterentfelden",
		coords: {
			longitude: 8.050128,
			latitude: 47.367148,
		},
	},
	{
		name: "Hug Othmar und Marianne (-Gfeller)",
		adress: "Gärtnereistrasse 2, 4536 Attiswil",
		coords: {
			longitude: 7.612594,
			latitude: 47.24871,
		},
	},
	{
		name: "Jans Erich und Lilian (-Zingg)",
		adress: "Gärtnereiweg 16, 3047 Bremgarten b. Bern",
		coords: {
			longitude: 7.440787,
			latitude: 46.982331,
		},
	},
	{
		name: "Jordi Thomas und Daniela (-Schaad)",
		adress: "Gärtnereiweg 5, 4556 Aeschi SO",
		coords: {
			longitude: 7.667333,
			latitude: 47.180264,
		},
	},
	{
		name: "Kämpfer René",
		adress: "Gärtnereiweg 2, 3047 Bremgarten b. Bern",
		coords: {
			longitude: 7.440932,
			latitude: 46.982502,
		},
	},
	{
		name: "Keranovic Esad",
		adress: "Gärtnereiweg 15, 4665 Oftringen",
		coords: {
			longitude: 7.933162,
			latitude: 47.302983,
		},
	},
	{
		name: "Knellwolf Ulrich",
		adress: "Gärtnereistrasse 11, 9425 Thal",
		coords: {
			longitude: 9.563384,
			latitude: 47.467199,
		},
	},
	{
		name: "Lenzin Celia",
		adress: "Gärtnereiweg 15, 4665 Oftringen",
		coords: {
			longitude: 7.933162,
			latitude: 47.302983,
		},
	},
	{
		name: "Maio Juan und Sandra (-Lüthi)",
		adress: "Gärtnereiweg 10, 3047 Bremgarten b. Bern",
		coords: {
			longitude: 7.441353,
			latitude: 46.982385,
		},
	},
	{
		name: "Müller Werner",
		adress: "Gärtnereiweg 11, 4665 Oftringen",
		coords: {
			longitude: 7.932902,
			latitude: 47.303434,
		},
	},
	{
		name: "Murati Djemailj",
		adress: "Gärtnereiweg 9, 4665 Oftringen",
		coords: {
			longitude: 7.932955,
			latitude: 47.303497,
		},
	},
	{
		name: "Optima Versicherungsbroker AG",
		adress: "Gärtnereistrasse 6, 9466 Sennwald",
		coords: {
			longitude: 9.501953,
			latitude: 47.261012,
		},
	},
	{
		name: "Penitzka Daniel u. Hitz Penitzka Cornelia",
		adress: "Gärtnereiweg 12, 3047 Bremgarten b. Bern",
		coords: {
			longitude: 7.440787,
			latitude: 46.982331,
		},
	},
	{
		name: "Peter Arno",
		adress: "Gärtnereiweg 11, 4665 Oftringen",
		coords: {
			longitude: 7.932902,
			latitude: 47.303434,
		},
	},
	{
		name: "Pfiffner Ingrid und Jonas (-Kinz)",
		adress: "Gärtnereistrasse 6, 9466 Sennwald",
		coords: {
			longitude: 9.501953,
			latitude: 47.261012,
		},
	},
	{
		name: "PrestigeBowling",
		adress: "Gärtnereiweg 4A, 4665 Oftringen",
		coords: {
			longitude: 7.933334,
			latitude: 47.301588,
		},
	},
	{
		name: "Reichhart Franz",
		adress: "Gärtnereistrasse 4, 4536 Attiswil",
		coords: {
			longitude: 7.612211,
			latitude: 47.248702,
		},
	},
	{
		name: "Romeo Angela",
		adress: "Gärtnereiweg 15, 4665 Oftringen",
		coords: {
			longitude: 7.933334,
			latitude: 47.302982,
		},
	},
	{
		name: "Rutishauser Silvia",
		adress: "Gärtnereistrasse 2, 9425 Thal",
		coords: {
			longitude: 9.564227,
			latitude: 47.467382,
		},
	},
	{
		name: "Sanfilippo Salvatore und Sanfilippo-Rizzo Lorella",
		adress: "Gärtnereistrasse 2, 4536 Attiswil",
		coords: {
			longitude: 7.612594,
			latitude: 47.24871,
		},
	},
	{
		name: "Selvathamby Selvachandran",
		adress: "Gärtnereiweg 13, 4665 Oftringen",
		coords: {
			longitude: 7.933162,
			latitude: 47.302983,
		},
	},
	{
		name: "Singer Lukas Michael",
		adress: "Gärtnereiweg 2, 9477 Trübbach",
		coords: {
			longitude: 9.482456,
			latitude: 47.071758,
		},
	},
	{
		name: "Siskos Vlassis und Georgia (-Pliaka)",
		adress: "Gärtnereiweg 9, 4665 Oftringen",
		coords: {
			longitude: 7.932955,
			latitude: 47.303497,
		},
	},
	{
		name: "Stöckli Daniel",
		adress: "Gärtnereistrasse 2, 4536 Attiswil",
		coords: {
			longitude: 7.612594,
			latitude: 47.24871,
		},
	},
	{
		name: "SUPRABEAM AG",
		adress: "Gärtnereiweg 4, 4665 Oftringen",
		coords: {
			longitude: 7.933452,
			latitude: 47.301435,
		},
	},
	{
		name: "Sürmeli Dervis",
		adress: "Gärtnereiweg 11, 4665 Oftringen",
		coords: {
			longitude: 7.932902,
			latitude: 47.303434,
		},
	},
	{
		name: "Taverna Thomas und Michèle (-Burgermeister)",
		adress: "Gärtnereistrasse 6A, 9425 Thal",
		coords: {
			longitude: 9.563941,
			latitude: 47.467531,
		},
	},
	{
		name: "VMS AG",
		adress: "Gärtnereiweg 11, 4665 Oftringen",
		coords: {
			longitude: 7.932902,
			latitude: 47.303434,
		},
	},
	{
		name: "Witschi Bettina (-Fröhlich)",
		adress: "Gärtnereiweg 22, 3047 Bremgarten b. Bern",
		coords: {
			longitude: 7.440932,
			latitude: 46.982053,
		},
	},
	{
		name: "Blumenland Müller",
		adress: "Hauptstrasse 60, 9214 Kradolf",
		coords: {
			longitude: 9.201574,
			latitude: 47.524036,
		},
	},
	{
		name: "Johanneum",
		adress: "Johanneumstrasse 3, 9652 Neu St. Johann",
		coords: {
			longitude: 9.192767,
			latitude: 47.229112,
		},
	},
	{
		name: "Orchideen Weber GmbH",
		adress: "Spalenring 127, 4055 Basel",
		coords: {
			longitude: 7.576142,
			latitude: 47.55556,
		},
	},
	{
		name: "Steinhölzli Bildungswege",
		adress: "Kirchstrasse 24, 3097 Liebefeld",
		coords: {
			longitude: 7.429073,
			latitude: 46.930474,
		},
	},
	{
		name: "Stiftung zur Palme",
		adress: "Hochstrasse 31, 8330 Pfäffikon ZH",
		coords: {
			longitude: 8.785312,
			latitude: 47.365756,
		},
	},
	{
		name: "Interlaken",
		adress: "General-Guisanstrasse 43, 3800 Interlaken",
		coords: {
			longitude: 7.852706,
			latitude: 46.680725,
		},
	},
	{
		name: "Martin-Stiftung",
		adress: "Im Bindschädler 10, 8703 Erlenbach ZH",
		coords: {
			longitude: 8.60148,
			latitude: 47.295035,
		},
	},
	{
		name: "Martin-Stiftung",
		adress: "Bergstrasse 47, 8704 Herrliberg",
		coords: {
			longitude: 8.607353,
			latitude: 47.29395,
		},
	},
	{
		name: "Betriebe und Werkstätten",
		adress: "Friedrich Miescher-Strasse 30, 4056 Basel",
		coords: {
			longitude: 7.561806,
			latitude: 47.57243,
		},
	},
	{
		name: "Blumen Mathys & Co",
		adress: "Burgdorfstrasse 12, 3672 Oberdiessbach",
		coords: {
			longitude: 7.619293,
			latitude: 46.840884,
		},
	},
	{
		name: "Justizvollzugsanstalt Wauwilermoos",
		adress: "Wauwilermoos 1, 6243 Egolzwil",
		coords: {
			longitude: 8.004896,
			latitude: 47.175619,
		},
	},
	{
		name: "Schloss Oberhofen",
		adress: "P.O. Box, 3653 Oberhofen am Thunersee",
		coords: {
			longitude: 7.669123,
			latitude: 46.730736,
		},
	},
	{
		name: "Weber Orchideen GmbH",
		adress: "Spalenring 127, 4055 Basel",
		coords: {
			longitude: 7.576036,
			latitude: 47.55574,
		},
	},
	{
		name: "Wüthrich Heinz AG",
		adress: "Brünigstrasse 27, 6055 Alpnach Dorf",
		coords: {
			longitude: 8.271019,
			latitude: 46.940093,
		},
	},
	{
		name: "Massnahmenzentrum Uitikon (MZU)",
		adress: "Zürich",
		coords: {
			longitude: 8.444912,
			latitude: 47.368441,
		},
	},
	{
		name: "Annen Blumen",
		adress: "Waldeggstrasse 30, 6343 Rotkreuz",
		coords: {
			longitude: 8.43331,
			latitude: 47.140421,
		},
	},
	{
		name: "Arnet Blumenhaus",
		adress: "Dorf 19, 6218 Ettiswil",
		coords: {
			longitude: 8.017075,
			latitude: 47.150301,
		},
	},
	{
		name: "Baumann Elisabeth",
		adress: "Beitenwil 61v, 3113 Rubigen",
		coords: {
			longitude: 7.558226,
			latitude: 46.910497,
		},
	},
	{
		name: "Beer Werner",
		adress: "Einschlagweg 79, 3414 Oberburg",
		coords: {
			longitude: 7.628755,
			latitude: 47.041489,
		},
	},
	{
		name: "Benediktinerkloster",
		adress: "Benediktinerkloster 1, 6390 Engelberg",
		coords: {
			longitude: 8.409614,
			latitude: 46.820256,
		},
	},
	{
		name: "Bildungszentrum Wallierhof",
		adress: "Höhenstrasse 46, 4533 Riedholz",
		coords: {
			longitude: 7.563278,
			latitude: 47.235012,
		},
	},
	{
		name: "Bluemä-Kari",
		adress: "Grundstrasse 114, 6430 Schwyz",
		coords: {
			longitude: 8.657776,
			latitude: 47.009986,
		},
	},
	{
		name: "Blumen Annen",
		adress: "Waldeggstrasse 30, 6343 Rotkreuz",
		coords: {
			longitude: 8.43331,
			latitude: 47.140421,
		},
	},
	{
		name: "Di Mucci Luigi",
		adress: "Bachmattstrasse 18, 8048 Zürich",
		coords: {
			longitude: 8.484036,
			latitude: 47.39068,
		},
	},
	{
		name: "Diakonie Nidelbad",
		adress: "Eggrainweg 3, 8803 Rüschlikon",
		coords: {
			longitude: 8.548198,
			latitude: 47.306012,
		},
	},
	{
		name: "DreamPlant GmbH",
		adress: "Püntenhofstrasse 4, 8425 Oberembrach",
		coords: {
			longitude: 8.617598,
			latitude: 47.487809,
		},
	},
	{
		name: "Fischer Josef u. Brigitte (-Lüscher)",
		adress: "Mühlegasse 3, 6234 Triengen",
		coords: {
			longitude: 8.07416,
			latitude: 47.236325,
		},
	},
	{
		name: "Gartmann Andreas (-Ehrensperger)",
		adress: "Friedhofweg 6, 5425 Schneisingen",
		coords: {
			longitude: 8.354854,
			latitude: 47.522576,
		},
	},
	{
		name: "Dr. Kaestlin Jürg (-Leininger)",
		adress: "Schloss Louisenberg, Louisenbergstrasse 12, 8268 Mannenbach-Salenstein",
		coords: {
			longitude: 9.048556,
			latitude: 47.671856,
		},
	},
	{
		name: "Kommunität Diakonissenhaus Riehen",
		adress: "Schützengasse 51, 4125 Riehen",
		coords: {
			longitude: 7.654492,
			latitude: 47.585966,
		},
	},
	{
		name: "Kröni Blumen",
		adress: "Steinacherstrasse 38, 9327 Tübach",
		coords: {
			longitude: 9.448816,
			latitude: 47.490102,
		},
	},
	{
		name: "Kurth Hans Ulrich und Heidi (-Warnier)",
		adress: "Törliweg 9, 7208 Malans GR",
		coords: {
			longitude: 9.570999,
			latitude: 46.981027,
		},
	},
	{
		name: "Landheim Brüttisellen",
		adress: "Neue Winterthurerstrasse 40, 8303 Bassersdorf",
		coords: {
			longitude: 8.638007,
			latitude: 47.427774,
		},
	},
	{
		name: "Landwirtschaftszentrum",
		adress: "Talstrasse 3, 3930 Visp",
		coords: {
			longitude: 7.881084,
			latitude: 46.286344,
		},
	},
	{
		name: "Lang Holger",
		adress: "Herrenweg 23, 8752 Näfels",
		coords: {
			longitude: 9.059183,
			latitude: 47.0988,
		},
	},
	{
		name: "Mansio",
		adress: "Spitalstrasse 4, 8596 Münsterlingen",
		coords: {
			longitude: 9.23508,
			latitude: 47.629611,
		},
	},
	{
		name: "Marti Roland und Annalis (-Haldemann)",
		adress: "Kobirain 7, 4587 Aetingen",
		coords: {
			longitude: 7.505668,
			latitude: 47.134022,
		},
	},
	{
		name: "Mosimann Hans (-Schieber)",
		adress: "Gartenweg 7, 5503 Schafisheim",
		coords: {
			longitude: 8.147018,
			latitude: 47.379574,
		},
	},
	{
		name: "Müller Blumenland",
		adress: "Hauptstrasse 60, 9214 Kradolf",
		coords: {
			longitude: 9.201574,
			latitude: 47.524036,
		},
	},
	{
		name: "Neeser AG",
		adress: "Höchfluh 4, 6260 Reiden",
		coords: {
			longitude: 7.972934,
			latitude: 47.235264,
		},
	},
	{
		name: "Rüegg Urs und Birgitte (-Pedersen)",
		adress: "Pfarrgässli 1, 3454 Sumiswald",
		coords: {
			longitude: 7.745603,
			latitude: 47.028077,
		},
	},
	{
		name: "Salvisberg Elisabeth (-Horisberger)",
		adress: "Hitzenberg 6, 4952 Eriswil",
		coords: {
			longitude: 7.85672,
			latitude: 47.076516,
		},
	},
];
