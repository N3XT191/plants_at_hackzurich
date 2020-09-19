import { Button, ButtonGroup, Callout, Colors, Icon } from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
import { Link } from "react-router-dom";
import { Plant } from "./Interfaces";

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
	}),
	image: css({
		height: "120px",
		marginRight: "10px",
		//border: "1px solid black",
		boxSizing: "border-box",
		position: "relative",
		cursor: "pointer",
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
};
interface Props {
	plants: Plant[];
	setPlantCount: (name: string, count: number) => void;
}
const PagePlants: React.FC<Props> = ({ plants, setPlantCount }) => {
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
				{plants.map((plant) => (
					<Callout {...styles.callout}>
						<div>
							<Link to={"/plants/" + encodeURIComponent(plant.name)} {...styles.link}>
								<img alt={plant.name} src={plant.image} {...styles.image} />
							</Link>
						</div>
						<div>
							<div>{plant.number + "x " + plant.name}</div>
							<ButtonGroup>
								<Button icon="plus" onClick={() => setPlantCount(plant.name, plant.number + 1)} />
								<Button icon="minus" onClick={() => setPlantCount(plant.name, plant.number - 1)} />
							</ButtonGroup>
							<div>
								kg CO<sub>2</sub>/unit/year: {plant.co2}
							</div>
							<Button icon="trash" onClick={() => setPlantCount(plant.name, 0)} />
						</div>
					</Callout>
				))}
			</div>
		</div>
	);
};

export default PagePlants;
