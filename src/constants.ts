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

export const getRandom = (arr: any[], n: number) => {
	var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len) throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
		var x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
};

export const locations = [
	{
		name: "Somnio GmbH",
		adress: "Hauptstrasse 17, 4562 Biberist",
		coords: { longitude: 7.56081, latitude: 47.183008 },
	},
	{
		name: "St-François-Fleurs",
		adress: "Place Saint-François 12, 1003 Lausanne",
		coords: { longitude: 6.634459, latitude: 46.519597 },
	},
	{
		name: "STIFTUNG GÄRTNERHAUS",
		adress: "Lindenweg 5, 5616 Meisterschwanden",
		coords: { longitude: 8.231416, latitude: 47.295239 },
	},
	{
		name: "Stöckli Blumen AG",
		adress: "Schulstrasse/, Kirchrain 15, 5070 Frick",
		coords: { longitude: 8.01926, latitude: 47.50394 },
	},
	{
		name: "Strickler Blumen & Gärten AG",
		adress: "Dorfstrasse 66, 8805 Richterswil",
		coords: { longitude: 8.70444, latitude: 47.209049 },
	},
	{
		name: "Style Fleurs",
		adress: "Via San Giobbe 6, 6512 Giubiasco",
		coords: { longitude: 9.00843, latitude: 46.172563 },
	},
	{
		name: "SWIZZ GREEN",
		adress: "Stadthausstrasse 133, 8400 Winterthur",
		coords: { longitude: 8.72548, latitude: 47.499622 },
	},
	{
		name: "Un brin d'Alchémille",
		adress: "Place du Marché 12, 2300 La Chaux-de-Fonds",
		coords: { longitude: 6.83032, latitude: 47.103749 },
	},
	{
		name: "Vegetal Trend Sàrl",
		adress: "Rue de la Filature 30, 1227 Carouge GE",
		coords: { longitude: 6.141035, latitude: 46.185949 },
	},
	{
		name: "Venetoulis SA",
		adress: "Route de Florissant 54, 1206 Genève",
		coords: { longitude: 6.160768, latitude: 46.193479 },
	},
	{
		name: "Verdissimo",
		adress: "Binzstrasse 15, 8125 Zollikerberg",
		coords: { longitude: 8.604588, latitude: 47.346538 },
	},
	{
		name: "Vert Passion Fleuriste",
		adress: "Rue du Théâtre 2, 1800 Vevey",
		coords: { longitude: 6.842894, latitude: 46.460287 },
	},
	{
		name: "Vert'tige",
		adress: "Rue de Monruz 21, 2000 Neuchâtel",
		coords: { longitude: 6.961467, latitude: 47.004901 },
	},
	{
		name: "Voeffray & Fils",
		adress: "Route de Molignon 1, 1950 Sion",
		coords: { longitude: 7.370438, latitude: 46.240471 },
	},
	{
		name: "von Arx Blumen & Garten",
		adress: "Kirchgasse 25, 4600 Olten",
		coords: { longitude: 7.900904, latitude: 47.349609 },
	},
	{
		name: "Waffenschmidt AG",
		adress: "Im Berg 10, 8332 Russikon",
		coords: { longitude: 8.773302, latitude: 47.39693 },
	},
	{
		name: "Wanninger Blumen Gärtnerei",
		adress: "Luzernerstrasse 26, 5630 Muri AG",
		coords: { longitude: 8.342775, latitude: 47.271375 },
	},
	{
		name: "Weber AG Kirchdorf",
		adress: "Landstrasse 200, 5416 Kirchdorf AG",
		coords: { longitude: 8.283423, latitude: 47.491189 },
	},
	{
		name: "Weber Orchideen GmbH",
		adress: "Hofstettenstrasse 40, 4107 Ettingen",
		coords: { longitude: 7.529824, latitude: 47.474841 },
	},
	{
		name: "Wiedmer-Blumen AG",
		adress: "Walperswilstrasse 59, 3270 Aarberg",
		coords: { longitude: 7.26245, latitude: 47.046734 },
	},
	{
		name: "Wilhelm Blumen",
		adress: "Dorfstrasse 17A, 3715 Adelboden",
		coords: { longitude: 7.559734, latitude: 46.493097 },
	},
	{
		name: "Zermattflowers GmbH",
		adress: "vis a vis Migros, Hofmattstrasse 7, 3920 Zermatt",
		coords: { longitude: 7.748553, latitude: 46.021899 },
	},
	{
		name: "Zimmermann Flaach AG",
		adress: "Oberdorfstrasse 9, 8416 Flaach",
		coords: { longitude: 8.612027, latitude: 47.575745 },
	},
	{
		name: "Zweerus Andreas",
		adress: "Bachtobelstrasse 5, 8303 Bassersdorf",
		coords: { longitude: 8.619576, latitude: 47.449606 },
	},
	{
		name: "Artflorspycher Blumengeschäft Mühleberg und Gurbü",
		adress: "Murtenstrasse 27, 3203 Mühleberg",
		coords: { longitude: 7.260236, latitude: 46.953479 },
	},
	{
		name: "àc ô té",
		adress: "Route de la Glâne 120, 1752 Villars-sur-Glâne",
		coords: { longitude: 7.140688, latitude: 46.791259 },
	},
	{
		name: "Blumen Conny",
		adress: "Dorfplatz 5, 6405 Immensee",
		coords: { longitude: 8.462739, latitude: 47.096444 },
	},
	{
		name: "Blumen Gerber & Co.",
		adress: "Stockhornstrasse 9, 3612 Steffisburg",
		coords: { longitude: 7.629755, latitude: 46.770703 },
	},
	{
		name: "Blumen Kaspar AG",
		adress: "Ulmenweg 11, 3604 Thun",
		coords: { longitude: 7.613486, latitude: 46.739713 },
	},
	{
		name: "Blumen Schweizer",
		adress: "Gerichtshausstrasse 56, 8750 Glarus",
		coords: { longitude: 9.064439, latitude: 47.041056 },
	},
	{
		name: "do it Chur",
		adress: "Raschärenstrasse 30, 7000 Chur",
		coords: { longitude: 9.510839, latitude: 46.848694 },
	},
	{
		name: "Doflores",
		adress: "Zugerstrasse 12, 8810 Horgen",
		coords: { longitude: 8.597962, latitude: 47.259682 },
	},
	{
		name: "La Joconde",
		adress: "Avenue Edouard-Dubois 2, 2000 Neuchâtel",
		coords: { longitude: 6.908322, latitude: 46.988332 },
	},
	{
		name: "MOG Design Végétal Sàrl",
		adress: "Place du Molard 7, 1204 Genève",
		coords: { longitude: 6.148072, latitude: 46.203321 },
	},
	{
		name: "De graines en fleurs",
		adress: "Grand-Rue 1, 2735 Malleray",
		coords: { longitude: 7.276925, latitude: 47.23777 },
	},
	{
		name: "Bluemelaube GmbH",
		adress: "Baarerstrasse 27, 6300 Zug",
		coords: { longitude: 8.516208, latitude: 47.17312 },
	},
	{
		name: "Bluemigs & Meh",
		adress: "Untere Bahnhofstrasse 4, 8483 Kollbrunn",
		coords: { longitude: 8.7739, latitude: 47.458325 },
	},
	{
		name: "Blumen Jerg",
		adress: "Gärtnerweg 8, 9403 Goldach",
		coords: { longitude: 9.479923, latitude: 47.472985 },
	},
	{
		name: "Blumengeschäft Centerstage",
		adress: "Bahnhofstrasse 46, 3920 Zermatt",
		coords: { longitude: 7.746124, latitude: 46.021725 },
	},
	{
		name: "Jardinerie du Vallon",
		adress: "Sur l'Eau 7, 2615 Sonvilier",
		coords: { longitude: 6.948205, latitude: 47.134798 },
	},
	{
		name: "petite fleur gmbh",
		adress: "Spitalgasse 34, 3011 Bern",
		coords: { longitude: 7.441837, latitude: 46.948024 },
	},
	{
		name: "Sonnenburg Gärtnerei",
		adress: "Sonnenburggutstrasse 51, 8200 Schaffhausen",
		coords: { longitude: 8.619592, latitude: 47.699522 },
	},
	{
		name: "TEAM einzigartig",
		adress: "Neudorfstrasse 14, 7430 Thusis",
		coords: { longitude: 9.439795, latitude: 46.695008 },
	},
	{
		name: "ABC Floral Morel Denise",
		adress: "Route Aloys-Fauquez 30, 1018 Lausanne",
		coords: { longitude: 6.633145, latitude: 46.532515 },
	},
	{
		name: "Altstetter Blumen",
		adress: "Lindenplatz 4, 8048 Zürich",
		coords: { longitude: 8.485995, latitude: 47.387208 },
	},
	{
		name: "Ambiance Florale GmbH",
		adress: "Schermenweg 192, 3072 Ostermundigen",
		coords: { longitude: 7.480712, latitude: 46.956922 },
	},
	{
		name: "Art de Fleurs",
		adress: "Route de Fribourg 61, 1746 Prez-vers-Noréaz",
		coords: { longitude: 7.018754, latitude: 46.785972 },
	},
	{
		name: "atelier majart, Hochuli",
		adress: "Tösstalstrasse 252, 8405 Winterthur",
		coords: { longitude: 8.760741, latitude: 47.483303 },
	},
	{
		name: "Atelier Naturel",
		adress: "St. Germanstrasse 6, 3212 Gurmels",
		coords: { longitude: 7.173373, latitude: 46.893104 },
	},
	{
		name: "Au Fleurs pour tous",
		adress: "Centre Gare, Rue de l'Abbé Monnin 24, 2854 Bassecourt",
		coords: { longitude: 7.246494, latitude: 47.337067 },
	},
	{
		name: "Au Panier Fleuri Sàrl",
		adress: "Avenue Mercier-de-Molin 5, 3960 Sierre",
		coords: { longitude: 7.528107, latitude: 46.292308 },
	},
	{
		name: "Barnabas Blumen & Wohnen",
		adress: "Schaffhauserstrasse 19, 8451 Kleinandelfingen",
		coords: { longitude: 8.682505, latitude: 47.599062 },
	},
	{
		name: "Bättig's Blumenwelt GmbH",
		adress: "Hohfurlistrasse 2, 6064 Kerns",
		coords: { longitude: 8.276786, latitude: 46.901415 },
	},
	{
		name: "blueme-märit.ch GmbH",
		adress: "Dorfstrasse 8, 2572 Sutz",
		coords: { longitude: 7.218358, latitude: 47.102732 },
	},
	{
		name: "Blueme Werkstatt R. Fässler",
		adress: "Wiler Strasse 28, 9536 Schwarzenbach SG",
		coords: { longitude: 9.070647, latitude: 47.443049 },
	},
	{
		name: "Blueme Werkstatt R. Fässler",
		adress: "Hinterdorfstrasse 24, 9524 Zuzwil SG",
		coords: { longitude: 9.113498, latitude: 47.474435 },
	},
	{
		name: "Bluemegade",
		adress: "Dorfstrasse 60, 5057 Reitnau",
		coords: { longitude: 8.050258, latitude: 47.245683 },
	},
	{
		name: "Bluemehüüsli",
		adress: "Endingerstrasse 11, 5303 Würenlingen",
		coords: { longitude: 8.258987, latitude: 47.531273 },
	},
	{
		name: "Bluemelädäli",
		adress: "Städtchen 22, 8730 Uznach",
		coords: { longitude: 8.986314, latitude: 47.225198 },
	},
	{
		name: "Blumen aller Art GmbH",
		adress: "Luzernerstrasse 44, 6353 Weggis",
		coords: { longitude: 8.425979, latitude: 47.033859 },
	},
	{
		name: "Blumen Bethli / Café Tübli",
		adress: "Wehntalerstrasse 40b, 8157 Dielsdorf",
		coords: { longitude: 8.453355, latitude: 47.481576 },
	},
	{
		name: "Blumen-Caffè Verde",
		adress: "Forchstrasse 136, 8125 Zollikerberg",
		coords: { longitude: 8.596961, latitude: 47.346983 },
	},
	{
		name: "Blumen Calamandrin",
		adress: "Städtlistrasse 1, 7130 Ilanz",
		coords: { longitude: 9.204173, latitude: 46.773663 },
	},
	{
		name: "Blumen etc...",
		adress: "Neumarktstrasse 34, 2502 Biel/Bienne",
		coords: { longitude: 7.24908, latitude: 47.139199 },
	},
	{
		name: "Blumen etc.",
		adress: "Bernstrasse 19, 3150 Schwarzenburg",
		coords: { longitude: 7.341651, latitude: 46.820186 },
	},
	{
		name: "Blumen Garten Spiez GmbH",
		adress: "Gartenweg 3, 3700 Spiez",
		coords: { longitude: 7.678986, latitude: 46.689318 },
	},
	{
		name: "Blumen Gmür",
		adress: "Kantonsstrasse 67, 6048 Horw",
		coords: { longitude: 8.311393, latitude: 47.020124 },
	},
	{
		name: "Blumen Habitus, Regula Elmer",
		adress: "Mitteldorf 5, 8460 Marthalen",
		coords: { longitude: 8.649621, latitude: 47.626016 },
	},
	{
		name: "Blumen Hirt",
		adress: "Schulhausstrasse 10, 8783 Linthal",
		coords: { longitude: 8.996639, latitude: 46.920277 },
	},
	{
		name: "Blumen mit Stiel",
		adress: "Oberer Saltinadamm 2, 3902 Glis",
		coords: { longitude: 7.987741, latitude: 46.315582 },
	},
	{
		name: "Blumen Oase GmbH",
		adress: "Felsenrainstrasse 149A, 8052 Zürich",
		coords: { longitude: 8.538834, latitude: 47.421456 },
	},
	{
		name: "Blumen Pasadena",
		adress: "Schulstrasse 20, 4450 Sissach",
		coords: { longitude: 7.8109, latitude: 47.465969 },
	},
	{
		name: "Blumen Ranch",
		adress: "Watthof 260, 9246 Niederbüren",
		coords: { longitude: 9.230172, latitude: 47.449315 },
	},
	{
		name: "Blumen Ritter",
		adress: "Bözingenstrasse 167, 2504 Biel/Bienne",
		coords: { longitude: 7.265898, latitude: 47.152232 },
	},
	{
		name: "Blumen Vergissmeinnicht",
		adress: "Mitteldorf 2, 8460 Marthalen",
		coords: { longitude: 8.649124, latitude: 47.625779 },
	},
	{
		name: "Blumenboutique Goos",
		adress: "Triemlistrasse 129, 8047 Zürich",
		coords: { longitude: 8.492081, latitude: 47.369459 },
	},
	{
		name: "Blumenboutique La Flora",
		adress: "Kirchstrasse 42, 8807 Freienbach",
		coords: { longitude: 8.759399, latitude: 47.205409 },
	},
	{
		name: "Blumenecke",
		adress: "Romanshornerstrasse 80, 8280 Kreuzlingen",
		coords: { longitude: 9.194537, latitude: 47.639407 },
	},
	{
		name: "Blumengalerie Mattmann AG",
		adress: "Chamerstrasse 9, 6331 Hünenberg",
		coords: { longitude: 8.426819, latitude: 47.174462 },
	},
	{
		name: "Blumengeschäft Toujours Plüss",
		adress: "Bahnhofstrasse 26, 8703 Erlenbach ZH",
		coords: { longitude: 8.591588, latitude: 47.305362 },
	},
	{
		name: "Blumenhaus Erni",
		adress: "Landstrasse 74, 5430 Wettingen",
		coords: { longitude: 8.323575, latitude: 47.466991 },
	},
	{
		name: "Blumenhaus Feld",
		adress: "Stationsstrasse 34, 8833 Samstagern",
		coords: { longitude: 8.6791, latitude: 47.192844 },
	},
	{
		name: "Blumenhaus Keusch",
		adress: "Schulstrasse 5, 8952 Schlieren",
		coords: { longitude: 8.449672, latitude: 47.396688 },
	},
	{
		name: "Blumenland-Heer",
		adress: "Langenthalerstrasse 2, 4802 Strengelbach",
		coords: { longitude: 7.928152, latitude: 47.278656 },
	},
	{
		name: "BlumenLaube GmbH",
		adress: "Hauptstrasse 27, 8259 Wagenhausen",
		coords: { longitude: 8.848173, latitude: 47.659466 },
	},
	{
		name: "Blumenoase Staub",
		adress: "Raindliweg 4, 6315 Oberägeri",
		coords: { longitude: 8.610217, latitude: 47.135876 },
	},
	{
		name: "blütenmehr",
		adress: "Oberlandstrasse 20, 3700 Spiez",
		coords: { longitude: 7.67782, latitude: 46.688781 },
	},
	{
		name: "Blütenpracht Hirschi GmbH",
		adress: "Römerstrasse West 1, 3296 Arch",
		coords: { longitude: 7.425835, latitude: 47.168391 },
	},
	{
		name: "Blütentraum",
		adress: "Ringstrasse 3, 6048 Horw",
		coords: { longitude: 8.311237, latitude: 47.018668 },
	},
	{
		name: "Blütenzeit",
		adress: "Kleinwangenstrasse 14, 6280 Hochdorf",
		coords: { longitude: 8.291617, latitude: 47.167951 },
	},
	{
		name: "De Lafontaine Gaëlle et Thierry",
		adress: "Chemin des Avallons 30, 1247 Anières",
		coords: { longitude: 6.222352, latitude: 46.273043 },
	},
	{
		name: "Dekor Végétal Sàrl",
		adress: "Grand'Rue de Peney 17, 1445 Vuiteboeuf",
		coords: { longitude: 6.56259, latitude: 46.80245 },
	},
	{
		name: "Della Santa Fiorista di Fausta Bernasconi",
		adress: "Via Gismonda 3, 6850 Mendrisio",
		coords: { longitude: 8.985201, latitude: 45.8684 },
	},
	{
		name: "Fischer Gärtner",
		adress: "Mühlegasse 1, 6234 Triengen",
		coords: { longitude: 8.07506, latitude: 47.236464 },
	},
	{
		name: "Fleuriste des Augustins - Vesenaz",
		adress: "Chemin du Vieux-Vésenaz 29, 1222 Vésenaz",
		coords: { longitude: 6.197621, latitude: 46.238532 },
	},
	{
		name: "Floradiso AG",
		adress: "Hirschmattstrasse 56, 6003 Luzern",
		coords: { longitude: 8.308058, latitude: 47.046498 },
	},
	{
		name: "FlorArt GmbH",
		adress: "Husmatt 3, 5405 Dättwil AG",
		coords: { longitude: 8.281986, latitude: 47.454925 },
	},
	{
		name: "Florarte",
		adress: "Bielstrasse 111, 4500 Solothurn",
		coords: { longitude: 7.5201, latitude: 47.212051 },
	},
	{
		name: "Flore & Sens",
		adress: "Place Centrale 14, 1870 Monthey",
		coords: { longitude: 6.946548, latitude: 46.251794 },
	},
	{
		name: "Floriana Paradiso",
		adress: "Mühlestrasse 1A, 8855 Wangen SZ",
		coords: { longitude: 8.8952, latitude: 47.191059 },
	},
];
