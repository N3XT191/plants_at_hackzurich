import { Colors } from "@blueprintjs/core";
import { css } from "glamor";
import * as React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import PageAdd from "./PageAdd";
import PageHome from "./PageHome";
import PageInfo from "./PageInfo";
import PagePlants from "./PagePlants";

const styles = {
	App: css({
		backgroundColor: "#E8F9B6",
		height: "100%",
		minHeight: "100vh",
		color: Colors.DARK_GRAY3 + " !important",
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

class App extends React.Component<{}, {}> {
	public render() {
		return (
			<div {...styles.App}>
				<div {...styles.container}>
					<BrowserRouter>
						<Switch>
							<Route
								path="/plants"
								render={(props) => (
									<div>
										<Header {...props} />
										<PagePlants />
									</div>
								)}
							/>
							<Route
								path="/add"
								render={(props) => (
									<div>
										<Header {...props} />
										<PageAdd />
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
										<PageHome />
									</div>
								)}
							/>
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;
