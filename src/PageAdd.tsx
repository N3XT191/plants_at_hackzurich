import { Label, ButtonGroup, Button, HTMLSelect, Callout, Colors } from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
import { Link } from "react-router-dom";
import { defaultPlants } from "./constants";
import { Plant } from "./Interfaces";

const styles = {
	container: css({
		width: "100%",
		display: "flex",
		flexDirection: "column",
	}),
	title: css({
		width: "100%",
		height: "35x",
		backgroundColor: "#80f1ba",
		display: "flex",
		paddingLeft: "20px",
		alignItems: "center",
		fontSize: 24,
		fontWeight: 300,
	}),
	suggestions: css({ width: "100%", padding: "0 10px 0 10px" }),
	suggestion: css({
		marginTop: "10px !important",
		backgroundColor: "#80f1ba !important",
	}),
	link: css({
		color: Colors.DARK_GRAY3 + " !important",
		":hover": {
			color: Colors.DARK_GRAY3 + " !important",
			textDecoration: "none !important",
		},
	}),
};

interface Props {
	addPlant: (plant: Plant) => void;
}

const PageAdd: React.FC<Props> = ({ addPlant }) => {
	const [long, setLong] = React.useState(0);
	const [lat, setLat] = React.useState(0);
	const [locationString, setLocationString] = React.useState("unknown location");

	const [indoor, setIndoor] = React.useState(false);
	const [type, setType] = React.useState("any");

	const [suggestions, setSuggestions] = React.useState<Plant[]>([]);

	React.useEffect(() => {
		console.log("fetching coords");
		window.navigator.geolocation.getCurrentPosition(setCoords, console.log, {
			timeout: 10000,
		});
	}, []);
	React.useEffect(() => {
		fetchLocation(long, lat);
	}, [long, lat]);

	const fetchLocation = async (long: number, lat: number) => {
		let res = await fetch(
			` https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en `
		);
		let data = await res.json();
		console.log(data);
		setLocationString(
			data && long && lat ? data.principalSubdivision + ", " + data.countryCode : "unknown"
		);
	};

	const filterPlants = (type: string) => (plant: Plant) =>
		type === "any" ? true : plant.type === type;
	const setCoords = (res: any) => {
		console.log(res);
		setLong(res.coords.longitude);
		setLat(res.coords.latitude);
	};

	return (
		<div {...styles.container}>
			<div {...styles.title}>Add Plants</div>
			My location: {locationString}
			<ButtonGroup>
				<Button icon="home" active={indoor} onClick={() => setIndoor(true)} />
				<Button icon="cloud" active={!indoor} onClick={() => setIndoor(false)} />
			</ButtonGroup>
			<Label>
				Plant Type
				<HTMLSelect
					options={[
						{ value: "any", label: "Any" },
						{ value: "tree", label: "Tree" },
						{ value: "bush", label: "Bush" },
						{ value: "flower", label: "Flower" },
					]}
					value={type}
					onChange={(e: any) => {
						setSuggestions([]);
						setType(e.currentTarget.value);
					}}
				/>
			</Label>
			<Button onClick={() => setSuggestions(defaultPlants.filter(filterPlants(type)))}>
				Suggest me plants!
			</Button>
			<div {...styles.suggestions}>
				{suggestions.map((suggestion) => (
					<Callout {...styles.suggestion}>
						<div>{suggestion.name}</div>
						<div>
							kg CO<sub>2</sub>/unit/year: {suggestion.co2}
						</div>
						<Link to="/plants" {...styles.link}>
							<Button icon="plus" onClick={() => addPlant(suggestion)} />
						</Link>
					</Callout>
				))}
			</div>
		</div>
	);
};

export default PageAdd;
