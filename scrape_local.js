const fetch = require("node-fetch");
let results = [];
const scrape = async () => {
	for (let i = 0; i < 10; i++) {
		console.log(i);
		const url = `https://i.local.ch/api/en/v14/entries/?lang=en&user=M-2163cf79-66c0-483f-b2c8-53850a93ef92&tid=v1_200915_1600195116612_M-2163cf79-66c0-483f-b2c8-53850a93ef92_e304_9af3&v=1.0&key=F1AD7B165AA149A2AE60374847902A12&platform=ios&pixelratio=3&limit=100&facets=category%2Ccity%3A20&start=${i}&q=G%C3%A4rtnerei`;
		const response = await fetch(url);
		const json = await response.json();
		results.push(
			json.results.map((result) => {
				return { name: result.title, adress: result.subtitle, coords: result.location.coords };
			})
		);
	}
	console.log(JSON.stringify(results.flat(), null, 2), results.length);
};

scrape();
