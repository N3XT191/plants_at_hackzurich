import { baseURL } from "./constants";

const getData = async (route: string) => {
	const res = await fetch(baseURL + route, {});
	const data = await res.json();
	return data;
};

const sendData = async (route: string, payload: object, method: string = "post") => {
	try {
		const res = await fetch(route, {
			method,
			headers: {
				Authorization: "Bearer " + localStorage.getItem("shelfli_token"),
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
		return await res.json();
	} catch {
		return { success: false, message: "request failed" };
	}
};

export const getSuggestions = (lat: number, long: number) =>
	getData("/attrib?lat=" + lat + "&lon=" + long);
export const searchPlant = (search: string) => getData("/search?name=" + search);

export const getImage = (query: string) =>
	sendData("https://shelf.li/api/getPlantImage", { query });
