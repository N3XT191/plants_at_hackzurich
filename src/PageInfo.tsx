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

const PageInfo: React.FC = () => {
	return <div {...styles.container}>Some Info Text about the App...</div>;
};

export default PageInfo;
