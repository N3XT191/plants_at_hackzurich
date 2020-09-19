import { css } from "glamor";
import * as React from "react";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { Plant } from "./Interfaces";

const styles = {
	container: css({
		width: "218px",
		height: "140px",
		backgroundColor: "#BFB9A5",
		marginBottom: "-5px",
		marginTop: "5px",
		marginRight: "100px",
		padding: "5px",
		paddingLeft: "20px",
	}),
	image: css({
		height: "105px",
		//border: "1px solid black",
		boxSizing: "border-box",
		position: "relative",
		cursor: "pointer",
	}),
	plant: css({ display: "flex", flexDirection: "column" }),
};

interface Props {
	plants: Plant[];
}
const PlantCarousel: React.FC<Props> = ({ plants }) => {
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
							<div {...styles.plant}>
								{plant.number + "x " + plant.name}
								<div>
									<img alt={plant.name} src={plant.image} {...styles.image} />
								</div>
							</div>
						</Slide>
					))}
				</Slider>
			</CarouselProvider>
		</div>
	);
};

export default PlantCarousel;
