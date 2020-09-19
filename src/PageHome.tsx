import { css } from "glamor";
import * as React from "react";

import tree from "./Tree.png";
import car from "./Car.png";
import steak from "./Steak.png";
import { Plant } from "./Interfaces";
import { Link } from "react-router-dom";
import { Colors } from "@blueprintjs/core";

const styles = {
	container: css({
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		position: "relative",
	}),
	tree: css({ position: "absolute", right: 0, top: "-10px", height: "300px", zIndex: 100 }),
	title: css({
		width: "100%",
		height: "35x",
		backgroundColor: "#87736E",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 24,
	}),
	branches: css({
		marginTop: "60px",
		marginBottom: "41px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-end",
		width: "100%",
	}),
	branch: css({
		width: "300px",
		height: "35px",
		backgroundColor: "#87736E",
		clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
		marginTop: "15px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}),
	icons: css({ width: "100%", display: "flex", flexDirection: "column", flexGrow: 0 }),
	iconContainer: css({ display: "flex", alignItems: "center" }),
	icon: css({ marginLeft: "10px", width: "100px", marginTop: "20px", zIndex: 100 }),
	iconBranch: css({
		width: "260px",
		height: "35px",
		backgroundColor: "#87736E",
		clipPath: "polygon(0% 0, 100% 0, 90% 100%,0 100%)",
		marginTop: "10px",
		display: "flex",
		justifyContent: "center",
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
};

interface Props {
	plants: Plant[];
}
const PageHome: React.FC<Props> = ({ plants }) => {
	const number = plants.reduce((accumulator, plant) => accumulator + plant.number, 0);
	const CO2 = plants.reduce((accumulator, plant) => accumulator + plant.co2 * plant.number, 0);
	return (
		<div {...styles.container}>
			<img {...styles.tree} src={tree} alt="barcode" />
			<div {...styles.title}>My Plants</div>
			<div {...styles.branches}>
				<div {...styles.branch}>{number} plants</div>
				<div {...styles.branch}>
					<Link to="/plants" {...styles.link}>
						Show all plants
					</Link>
				</div>
				<div {...styles.branch}>
					<Link to="/add" {...styles.link}>
						Add plants
					</Link>
				</div>
			</div>
			<div {...styles.title}>
				CO<sub>2</sub>
				&nbsp;absorbed:&nbsp;
				{Math.round(CO2 * 100) / 100}kg / year
			</div>
			<div {...styles.icons}>
				<div {...styles.iconContainer}>
					<img {...styles.icon} src={steak} alt="barcode" />
					<div {...styles.iconBranch}>{Math.round((CO2 / 67.8) * 100) / 100}kg beef / year</div>
				</div>
				<div {...styles.iconContainer}>
					<img {...styles.icon} src={car} alt="barcode" />
					<div {...styles.iconBranch}>{Math.round((CO2 / 0.314) * 100) / 100}km / year</div>
				</div>
			</div>
		</div>
	);
};

export default PageHome;
