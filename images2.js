const { image_search } = require("duckduckgo-images-api");

async function main() {
	const asdf = await image_search({
		query: "Chestnut Tree",
		moderate: true,
		iterations: 1,
	});
	console.log(asdf);
}

console.log(main());
