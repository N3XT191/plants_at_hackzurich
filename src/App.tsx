import { css } from "glamor";
import * as React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { defaultPlants } from "./constants";
import Header from "./Header";
import { Plant } from "./Interfaces";
import PageAdd from "./PageAdd";
import PageHome from "./PageHome";
import PageInfo from "./PageInfo";
import PagePlantDetail from "./PagePlantDetail";
import PagePlants from "./PagePlants";

const styles = {
	App: css({
		backgroundColor: "#f1fdfb",
		height: "100%",
		minHeight: "100vh",
		color: "#092113 !important",
		fontFamily: "Montserrat",
	}),
	container: css({
		width: "100%",
		maxWidth: "800px",
		margin: "auto",
		height: "100%",
		minHeight: "100vh",
		position: "relative",
	}),
	contentWrap: css({ paddingBottom: "100px", marginBottom: "0px" }),
};

interface State {
	plants: Plant[];
}
class App extends React.Component<{}, State> {
	state = {
		plants: localStorage.getItem("plant_at_hackzurich")
			? (JSON.parse(localStorage.getItem("plant_at_hackzurich")!) as Plant[])
			: defaultPlants,
	};

	setPlantCount = (name: string, count: number) => {
		let plants = [...this.state.plants];
		const plantIndex = plants.findIndex((plant) => plant.name === name);
		if (count) {
			plants[plantIndex] = { ...plants[plantIndex], number: count };
		} else {
			plants.splice(plantIndex, 1);
		}
		this.setState({ plants });
		localStorage.setItem("plant_at_hackzurich", JSON.stringify(plants));
	};

	addPlant = (newPlant: Plant) => {
		let plants = [...this.state.plants];
		const plantIndex = plants.findIndex((plant) => plant.id === newPlant.id);
		if (plantIndex === -1) {
			plants.push({ ...newPlant, number: 1 });
		} else {
			plants[plantIndex] = { ...plants[plantIndex], number: plants[plantIndex].number + 1 };
		}
		this.setState({ plants });
		localStorage.setItem("plant_at_hackzurich", JSON.stringify(plants));
	};

	public render() {
		return (
			<div {...styles.App}>
				<div {...styles.container}>
					<HashRouter>
						<Switch>
							<Route
								path="/plants/:name"
								render={(props) => (
									<div>
										<Header {...props} />
										<PagePlantDetail
											setPlantCount={(count: number) =>
												this.setPlantCount(decodeURIComponent(props.match.params.name), count)
											}
											plant={this.state.plants.find(
												(plant) => plant.name === decodeURIComponent(props.match.params.name)
											)}
										/>
									</div>
								)}
							/>
							<Route
								path="/plants"
								render={(props) => (
									<div>
										<Header {...props} />
										<PagePlants setPlantCount={this.setPlantCount} plants={this.state.plants} />
									</div>
								)}
							/>
							<Route
								path="/add"
								render={(props) => (
									<div>
										<Header {...props} />
										<PageAdd addPlant={this.addPlant} />
									</div>
								)}
							/>
							<Route
								path="/info"
								render={(props) => (
									<div>
										<Header {...props} />
										<PageInfo />
									</div>
								)}
							/>
							<Route
								path="/"
								render={(props) => (
									<div>
										<Header {...props} />
										<PageHome plants={this.state.plants} />
									</div>
								)}
							/>
						</Switch>
					</HashRouter>
				</div>
			</div>
		);
	}
}

export default App;
