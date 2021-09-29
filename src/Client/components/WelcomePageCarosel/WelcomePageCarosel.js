import React from "react";
import { Carousel } from "../../components/homePageSlider/components";

import { IMAGES } from "../../components/homePageSlider/mock";

export default function WelcomePageCarosel() {
  return (
    <>
      {" "}
      <Carousel time={5000}>
        {IMAGES.map((image, index) => (
          <img key={index} src={image.imageUrl} alt={image.placeHolder} />
        ))}
      </Carousel>
    </>
  );
}
