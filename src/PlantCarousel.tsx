import { css } from "glamor";
import * as React from "react";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { PlantedPlant } from "./Interfaces";
import { Link } from "react-router-dom";
import { Colors } from "@blueprintjs/core";

const styles = {
	container: css({
		width: "218px",
		height: "140px",
		backgroundColor: "#f5ccc5",
		marginTop: "20px",
		marginRight: "95px",
		padding: "5px",
		paddingLeft: "20px",
		borderRadius: "5px",
	}),
	image: css({
		height: "105px",
		//border: "1px solid black",
		boxSizing: "border-box",
		position: "relative",
		cursor: "pointer",
	}),
	plant: css({
		display: "flex",
		flexDirection: "column",
		width: "100%",
	}),
	link: css({
		color: Colors.DARK_GRAY3 + " !important",
		":hover": {
			color: Colors.DARK_GRAY3 + " !important",
			textDecoration: "none !important",
		},
	}),
	name: css({ whiteSpace: "nowrap", overflow: "hidden" }),
};

interface Props {
	plants: PlantedPlant[];
	images: { data: string }[];
}
const PlantCarousel: React.FC<Props> = ({ images, plants }) => {
	console.log(images);
	return (
		<div {...styles.container}>
			<CarouselProvider
				naturalSlideWidth={1}
				naturalSlideHeight={1}
				totalSlides={plants.length}
				isPlaying={true}
				interval={4000}
				infinite={true}
			>
				<Slider>
					{plants.map((plant, index) => (
						<Slide index={index}>
							<Link to={"/plants/" + encodeURIComponent(plant.name)} {...styles.link}>
								<div {...styles.plant}>
									<div {...styles.name}>{plant.number + "x " + plant.name}</div>
									<div>
										<img alt={plant.name} src={images[index]?.data} {...styles.image} />
									</div>
								</div>
							</Link>
						</Slide>
					))}
				</Slider>
			</CarouselProvider>
		</div>
	);
};

export default PlantCarousel;
