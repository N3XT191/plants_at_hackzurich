import {
	Label,
	ButtonGroup,
	Button,
	HTMLSelect,
	InputGroup,
	Callout,
	Colors,
} from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
import { Link } from "react-router-dom";
import { getSuggestions, searchPlant } from "./api";
import { mapSuggestions } from "./constants";
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
	controls: css({ width: "100%", padding: "10px" }),
	select: css({ border: "1px solid rgba(24, 32, 38, 0.2) !important" }),
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
	name: css({ whiteSpace: "nowrap", overflow: "hidden", fontSize: 18 }),
	co2: css({ whiteSpace: "nowrap", overflow: "hidden", fontSize: 14, fontWeight: 600 }),
	trait: css({ whiteSpace: "nowrap", overflow: "hidden", fontSize: 14 }),
	callout: css({
		marginTop: "10px !important",
		backgroundColor: "#80f1ba !important",
		display: "flex",
		justifyContent: "space-between",
		width: "200px",
	}),
	imgContainer: css({ height: "170px", overflow: "hidden" }),
	image: css({
		display: "block",
		height: "100%",
		width: "auto !important",
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
	const [search, setSearch] = React.useState("");

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

	const setCoords = (res: any) => {
		console.log(res);
		setLong(res.coords.longitude);
		setLat(res.coords.latitude);
	};

	const [images, setImages] = React.useState<any[]>([]);

	async function fetchImages(suggestions: any[]) {
		const imageResArray = await Promise.all(
			suggestions.map((plant) => setImages(plant.latin_name))
		);
		setImages(imageResArray);
	}

	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		fetchImages(suggestions);
	}, [suggestions]);

	return (
		<div {...styles.container}>
			<div {...styles.title}>Add Plants</div>
			<div {...styles.controls}>
				<div>My location: {locationString}</div>
				<ButtonGroup>
					<Button outlined={true} icon="home" active={indoor} onClick={() => setIndoor(true)} />
					<Button outlined={true} icon="cloud" active={!indoor} onClick={() => setIndoor(false)} />
				</ButtonGroup>
				<Label>
					Plant Type
					<HTMLSelect
						{...styles.select}
						minimal={true}
						options={[
							{ value: "any", label: "Any" },
							{ value: "tree", label: "Tree" },
							{ value: "shrub", label: "Shrub" },
							{ value: "bulb", label: "Bulb" },
						]}
						value={type}
						onChange={(e: any) => {
							setSuggestions([]);
							setType(e.currentTarget.value);
						}}
					/>
				</Label>
				<Button
					outlined={true}
					onClick={async () => {
						const res = await getSuggestions(lat, long);
						const newSuggestions = res.map(mapSuggestions);
						setSuggestions(newSuggestions);
					}}
				>
					Suggest me plants!
				</Button>
				<Label>
					Or search by name:
					<InputGroup
						value={search}
						onChange={(e: any) => {
							setSuggestions([]);
							setSearch(e.target.value);
						}}
					/>
				</Label>
				<Button
					outlined={true}
					onClick={async () => {
						const res = await searchPlant(search);
						const newSuggestions = res.map(mapSuggestions);
						setSuggestions(newSuggestions);
					}}
				>
					Find the plant!
				</Button>
			</div>
			<div {...styles.suggestions}>
				{suggestions.map((suggestion, index) => (
					<Link to={"/plants/" + encodeURIComponent(suggestion.name)} {...styles.link}>
						<Callout {...styles.callout}>
							<div>
								<div {...styles.name}>{suggestion.name}</div>
								<div {...styles.co2}>
									CO<sub>2</sub>: {Math.ceil(suggestion.co2 * 100) / 100}
								</div>
								<div {...styles.trait}>Type: {suggestion.habit}</div>
								<div {...styles.trait}>pH: {suggestion.pH}</div>
								<div {...styles.trait}>Moisture: {suggestion.moisture}</div>
							</div>
							<div {...styles.imgContainer}>
								<img alt={suggestion.name} src={images[index]?.data} {...styles.image} />
							</div>
						</Callout>
					</Link>
				))}
			</div>
		</div>
	);
};

export default PageAdd;
