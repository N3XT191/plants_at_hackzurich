import { Button, ButtonGroup } from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
import { Plant } from "./Interfaces";

import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import { getRandom, locations } from "./constants";

const styles = {
	container: css({
		width: "100%",
	}),
	title: css({
		width: "100%",
		height: "35x",
		backgroundColor: "#87736E",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 24,
	}),
	body: css({ display: "flex", justifyContent: "space-between", padding: "20px" }),
	image: css({
		height: "200px",
		marginRight: "10px",
		//border: "1px solid black",
		boxSizing: "border-box",
		position: "relative",
		cursor: "pointer",
	}),
	text: css({}),
	map: css({ width: "100%" }),
};
interface Props {
	plant: Plant | undefined;
	setPlantCount: (count: number) => void;
}
const PagePlantDetail: React.FC<Props> = ({ plant, setPlantCount }) => {
	return (
		<div {...styles.container}>
			{plant ? (
				<>
					<div {...styles.title}>{plant.name}</div>
					<div {...styles.body}>
						<div>
							<img alt={plant.name} src={plant.image} {...styles.image} />
						</div>
						<div>
							<div>{plant.number + "x " + plant.name}</div>
							<ButtonGroup>
								<Button icon="plus" active={true} onClick={() => setPlantCount(plant.number + 1)} />
								<Button
									icon="minus"
									active={false}
									onClick={() => setPlantCount(plant.number - 1)}
								/>
							</ButtonGroup>
							<div>
								kg CO<sub>2</sub>/unit/year: {plant.co2}
							</div>
							<Button icon="trash" onClick={() => setPlantCount(0)} />
						</div>
					</div>
					<div {...styles.title}>Buy me here:</div>
					<Map
						center={[47.1699, 8.45776]}
						zoom={8}
						{...styles.map}
						height={240}
						provider={(x: number, y: number, z: number) => {
							const s = String.fromCharCode(97 + ((x + y + z) % 3));
							return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
						}}
					>
						{getRandom(locations, 10).map((location) => (
							<Marker
								anchor={[location.coords.latitude, location.coords.longitude]}
								payload={1}
								onClick={() => {}}
							/>
						))}
					</Map>
				</>
			) : (
				<div>This plant doesn't exist</div>
			)}
		</div>
	);
};

export default PagePlantDetail;
