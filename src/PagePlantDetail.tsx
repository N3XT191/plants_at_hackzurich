import { Alert, Button, ButtonGroup, H3, Spinner } from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
import { Plant, PlantedPlant } from "./Interfaces";

import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import { getRandom, locations, mapSuggestions } from "./constants";
import { getImage, searchPlant } from "./api";

const styles = {
	container: css({
		width: "100%",
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
	body: css({ display: "flex", justifyContent: "space-between", padding: "20px" }),
	imgContainer: css({ height: "170px", overflow: "hidden" }),
	image: css({
		display: "block",
		height: "100%",
		width: "auto !important",
	}),
	text: css({}),
	map: css({ width: "100%", maxHeight: "100%", overflow: "hidden" }),
	spinner: css({ marginTop: "50px" }),
	name: css({ whiteSpace: "nowrap", overflow: "hidden", fontSize: 18 }),
	co2: css({ whiteSpace: "nowrap", overflow: "hidden", fontSize: 14, fontWeight: 600 }),
	trait: css({ whiteSpace: "nowrap", overflow: "hidden", fontSize: 14 }),
};
interface Props {
	plant: PlantedPlant | undefined;
	setPlantCount: (count: number) => void;
	addPlant: (plant: Plant) => void;
}
const PagePlantDetail: React.FC<Props> = ({ plant, addPlant, setPlantCount }) => {
	const [openShop, setOpenShop] = React.useState<any>({});

	const [long, setLong] = React.useState(0);
	const [lat, setLat] = React.useState(0);
	const [newPlant, setnewPlant] = React.useState<any>({});
	const [imageURL, setImageURL] = React.useState<any>(undefined);

	const setCoords = (res: any) => {
		console.log(res);
		setLong(res.coords.longitude);
		setLat(res.coords.latitude);
	};

	async function fetchImage() {
		const imageRes = await getImage(encodeURIComponent(!plant ? "" : plant.latin_name));
		const image = imageRes;
		setImageURL(image.data);
	}
	async function fetchPlant() {
		const res = await searchPlant(plant!.latin_name);
		setnewPlant({ ...mapSuggestions(res[0]), number: 0 });
	}
	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		!plant || plant.number ? undefined : fetchPlant();
		fetchImage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	React.useEffect(() => {
		console.log("fetching coords");
		window.navigator.geolocation.getCurrentPosition(setCoords, console.log, {
			timeout: 10000,
		});
	}, []);

	const actualPlant = plant?.number ? plant : newPlant?.number === 0 ? newPlant : undefined;
	return (
		<div {...styles.container}>
			{actualPlant ? (
				<>
					<div {...styles.title}>{actualPlant.name}</div>
					<div {...styles.body}>
						<div>
							<div {...styles.name}>{actualPlant.number + "x " + actualPlant.name}</div>
							<ButtonGroup>
								<Button
									icon="plus"
									onClick={() =>
										actualPlant.number
											? setPlantCount(actualPlant.number + 1)
											: addPlant({ ...actualPlant, number: 1 })
									}
								/>
								<Button icon="minus" onClick={() => setPlantCount(actualPlant.number - 1)} />
							</ButtonGroup>
							<div {...styles.co2}>
								CO<sub>2</sub>: {Math.ceil(actualPlant.co2 * 100) / 100}
							</div>
							<div {...styles.trait}>Type: {actualPlant.habit}</div>
							<div {...styles.trait}>pH: {actualPlant.pH}</div>
							<div {...styles.trait}>Moisture: {actualPlant.moisture}</div>
							<Button icon="trash" onClick={() => setPlantCount(0)} />
						</div>
						<div {...styles.imgContainer}>
							<img alt={actualPlant.name} src={imageURL?.data} {...styles.image} />
						</div>
					</div>
					<div {...styles.title}>Buy me here:</div>
					<Map
						center={[lat, long]}
						zoom={12}
						{...styles.map}
						height={290}
						provider={(x: number, y: number, z: number) => {
							const s = String.fromCharCode(97 + ((x + y + z) % 3));
							return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
						}}
					>
						{getRandom(locations, 300, actualPlant.latin_name).map((location) => (
							<Marker
								anchor={[location.coords?.latitude, location.coords?.longitude]}
								payload={1}
								onClick={() => setOpenShop(location)}
							/>
						))}
					</Map>
					<Alert icon="shop" isOpen={openShop.name} onClose={() => setOpenShop({})}>
						<H3>{openShop.name}</H3>
						{openShop.adress}
					</Alert>
				</>
			) : (
				<div {...styles.spinner}>
					<Spinner />
				</div>
			)}
		</div>
	);
};

export default PagePlantDetail;
