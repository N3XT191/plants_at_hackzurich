import { Button, ButtonGroup, Callout } from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
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
		backgroundColor: "#87736E",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 24,
	}),
	callouts: css({ width: "100%", padding: "0 10px 0 10px" }),
	callout: css({
		marginTop: "10px !important",
		backgroundColor: "#87736E !important",
	}),
};
interface Props {
	plants: Plant[];
	setPlantCount: (id: number, count: number) => void;
}
const PagePlants: React.FC<Props> = ({ plants, setPlantCount }) => {
	return (
		<div {...styles.container}>
			<div {...styles.title}>My Plants</div>
			<div {...styles.callouts}>
				{plants.map((plant) => (
					<Callout {...styles.callout}>
						<div>{plant.name}</div>
						<div>Number: {plant.number}</div>{" "}
						<ButtonGroup>
							<Button
								icon="plus"
								active={true}
								onClick={() => setPlantCount(plant.id, plant.number + 1)}
							/>
							<Button
								icon="minus"
								active={false}
								onClick={() => setPlantCount(plant.id, plant.number - 1)}
							/>
						</ButtonGroup>
						<div>
							kg CO<sub>2</sub>/unit/year: {plant.co2}
						</div>
						<Button icon="trash" onClick={() => setPlantCount(plant.id, 0)} />
					</Callout>
				))}
			</div>
		</div>
	);
};

export default PagePlants;
