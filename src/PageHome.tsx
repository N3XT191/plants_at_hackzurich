import { css } from "glamor";
import * as React from "react";

import tree from "./Tree.png";
import car from "./Car.png";
import steak from "./Steak.png";
import { PlantedPlant } from "./Interfaces";
import { Link } from "react-router-dom";
import { Colors } from "@blueprintjs/core";
import PlantCarousel from "./PlantCarousel";
import { getImage } from "./api";

const styles = {
	container: css({
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		position: "relative",
	}),
	tree: css({
		position: "absolute",
		right: 0,
		top: "-20px",
		height: "390px",
		width: "140px",
		zIndex: 100,
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
	iconTitle: css({
		marginTop: "8px",
	}),
	branches: css({
		marginTop: "0px",
		marginBottom: "15px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-end",
		width: "100%",
	}),

	svgBranch: css({
		marginTop: "20px",
		width: "280px",
		height: "30px",
		background: "#c48e85",
		"-webkit-clip-path": "url(#maskRect1)",
		textIndent: "40px",
		display: "flex",
		alignItems: "center",
	}),
	icons: css({ width: "100%", display: "flex", flexDirection: "column", flexGrow: 0 }),
	iconContainer: css({ display: "flex", alignItems: "center", marginTop: "5px" }),
	icon: css({ marginLeft: "10px", width: "50px", zIndex: 100 }),
	iconBlob: css({
		backgroundColor: "#baffdd",
		width: "120px",
		height: "60px",
		borderRadius: "50px 30px 20px 15px",
		paddingLeft: "5px",
		marginTop: "6px",
		marginLeft: "30px",
		zIndex: 100,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingRight: "10px",
		fontSize: 20,
	}),
	iconBlobBorderAlt: css({
		borderRadius: "60px 95px 40px 25px",
	}),
	iconBranch: css({
		width: "200px",
		height: "32px",
		backgroundColor: "#c48e85",
		borderRadius: "10px",
		marginTop: "2px",
		display: "flex",
		paddingLeft: "30px",
		alignItems: "center",
		marginLeft: "-20px",
	}),
	link: css({
		color: Colors.DARK_GRAY3 + " !important",
		":hover": {
			color: Colors.DARK_GRAY3 + " !important",
			textDecoration: "none !important",
		},
	}),
	bolder: css({ fontWeight: 600 }),
};

interface Props {
	plants: PlantedPlant[];
}
const PageHome: React.FC<Props> = ({ plants }) => {
	const number = plants.reduce((accumulator, plant) => accumulator + plant.number, 0);
	const CO2 = plants.reduce((accumulator, plant) => accumulator + plant.co2 * plant.number, 0);

	const [images, setImages] = React.useState<any[]>([]);

	async function fetchImages() {
		const imageResArray = await Promise.all(plants.map((plant) => getImage(plant.latin_name)));
		setImages(imageResArray);
	}

	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		fetchImages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div {...styles.container}>
			<img {...styles.tree} src={tree} alt="barcode" />
			<div {...styles.title}>My Garden</div>
			<div {...styles.branches}>
				<svg {...css({ marginTop: "-150px", zIndex: -1 })}>
					<defs>
						<clipPath id="maskRect1">
							<path
								id="curve"
								stroke="blue"
								fill="purple"
								d="M 360 0 L 90 0 C 30 0 30 40 40 50 C 60 60 90 60 140 60 L 360 60 Z"
								transform="scale(1.2 0.5) translate(-30)"
							/>
						</clipPath>
					</defs>
				</svg>
				<div id="maskDiv" {...styles.svgBranch} {...css({ width: "320px" })}>
					<div {...styles.bolder}>{number}</div>&nbsp;plants
				</div>

				<PlantCarousel plants={plants} images={images} />
				<div {...styles.svgBranch}>
					<Link to="/plants" {...styles.link}>
						Show all plants
					</Link>
				</div>
				<div {...styles.svgBranch}>
					<Link to="/add" {...styles.link}>
						Add plants
					</Link>
				</div>
			</div>
			<div {...styles.title} {...styles.iconTitle}>
				<div {...styles.bolder}>
					CO<sub>2</sub>
				</div>
				&nbsp;absorbed:&nbsp;
				<div {...styles.bolder}>{Math.round(CO2 * 100) / 100}kg / year</div>
			</div>
			<div {...styles.icons}>
				<div {...styles.iconContainer}>
					<div {...styles.iconBlob}>
						<img {...styles.icon} src={steak} alt="barcode" />
						<div {...styles.bolder}>{Math.round((CO2 / 67.8) * 11) / 10}</div>
					</div>
					<div {...styles.iconBranch}>kg beef / year</div>
				</div>
				<div {...styles.iconContainer}>
					<div {...styles.iconBlob} {...styles.iconBlobBorderAlt}>
						<img {...styles.icon} src={car} alt="barcode" />
						<div {...styles.bolder}>{Math.round(CO2 / 0.314)}</div>
					</div>
					<div {...styles.iconBranch}>km / year</div>
				</div>
			</div>
		</div>
	);
};

export default PageHome;
