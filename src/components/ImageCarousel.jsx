import React, { useState } from "react";
import { Carousel, Image } from "rsuite";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  return (
    <Carousel
        activeIndex={activeIndex}
        onSelect={index => {
          setActiveIndex(index);
        }}
        autoplay
        className="custom-slider w-2/3 mx-auto"
        placement="bottom"
        shape="bar"
      >
      <img
        src="/src/images/Franklin1929II.jpg"
        height="300"
        alt="Mint condition Franklin 1929"
      />
      <img
        src="/src/images/Franklin1929I.jpg"
        height="300"
        alt="Mint condition Franklin 1929"
      />
      <img
        src="/src/images/FranklinRondane2.jpeg"
        height="300"
        alt="Franklin 9B Touring with a scenic view of the Rondane Mountain Range"
      />
    </Carousel>
  );
};
export default ImageCarousel;