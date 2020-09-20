const fetch = require("node-fetch");
const scrape = async () => {
	const url = `https://api.qwant.com/api/search/images?count=1&t=images&safesearch=1&locale=en_US&uiv=4&q=Veronica%20americana`;
	const response = await fetch(url);
	const json = await response.json();
	console.log(json.data.result.items[0].media);
};

scrape();
