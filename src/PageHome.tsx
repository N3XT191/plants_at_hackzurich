import { css } from "glamor";
import * as React from "react";

const styles = {
	container: css({
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
	}),
};

const PageHome: React.FC = () => {
	return <div {...styles.container}>Home</div>;
};

export default PageHome;
