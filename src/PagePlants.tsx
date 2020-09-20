/* eslint-disable react-hooks/exhaustive-deps */
import { Button, ButtonGroup, Callout, Colors, Icon } from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
import { Link } from "react-router-dom";
import { getImage } from "./api";
import { PlantedPlant } from "./Interfaces";

const styles = {
	container: css({
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
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
		position: "relative",
	}),
	callouts: css({ width: "100%", padding: "0 10px 0 10px" }),
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
	link: css({
		color: Colors.DARK_GRAY3 + " !important",
		":hover": {
			color: Colors.DARK_GRAY3 + " !important",
			textDecoration: "none !important",
		},
	}),
	plus: css({
		position: "absolute",
		right: 20,
		top: 1,
	}),
	plusIcon: css({ color: "white ! important" }),
	name: css({ whiteSpace: "nowrap", overflow: "hidden", fontSize: 18 }),
	co2: css({ whiteSpace: "nowrap", overflow: "hidden", fontSize: 14, fontWeight: 600 }),
	trait: css({ whiteSpace: "nowrap", overflow: "hidden", fontSize: 14 }),
};
interface Props {
	plants: PlantedPlant[];
	setPlantCount: (name: string, count: number) => void;
}

const PagePlants: React.FC<Props> = ({ plants, setPlantCount }) => {
	const [images, setImages] = React.useState<any[]>([]);

	async function fetchImages() {
		const imageResArray = await Promise.all(plants.map((plant) => getImage(plant.latin_name)));
		setImages(imageResArray);
	}

	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		fetchImages();
	}, []);
	return (
		<div {...styles.container}>
			<div {...styles.title}>
				<div>My Garden</div>
				<Link to="/add" {...styles.link}>
					<Button outlined={true} {...styles.plus}>
						<Icon icon="plus" {...styles.plusIcon} />
					</Button>
				</Link>
			</div>
			<div {...styles.callouts}>
				{plants.map((plant, index) => (
					<Callout {...styles.callout}>
						<div>
							<div {...styles.name}>{plant.number + "x " + plant.name}</div>
							<ButtonGroup>
								<Button icon="plus" onClick={() => setPlantCount(plant.name, plant.number + 1)} />
								<Button icon="minus" onClick={() => setPlantCount(plant.name, plant.number - 1)} />
							</ButtonGroup>
							<div {...styles.co2}>
								CO<sub>2</sub>: {Math.ceil(plant.co2 * 100) / 100}
							</div>
							<div {...styles.trait}>Type: {plant.habit}</div>
							<div {...styles.trait}>pH: {plant.pH}</div>
							<div {...styles.trait}>Moisture: {plant.moisture}</div>
							<Button icon="trash" onClick={() => setPlantCount(plant.name, 0)} />
						</div>
						<div {...styles.imgContainer}>
							<Link to={"/plants/" + encodeURIComponent(plant.name)} {...styles.link}>
								<img alt={plant.name} src={images[index]?.data} {...styles.image} />
							</Link>
						</div>
					</Callout>
				))}
			</div>
		</div>
	);
};

export default PagePlants;
