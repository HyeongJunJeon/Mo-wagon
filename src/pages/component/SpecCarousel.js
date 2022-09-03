import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const SpecCarousel = () => {
  let ImageData = useSelector((state) => state.data[0].image);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,

    // responsive: [
    //   {
    //     breakpoint: 880,
    //     settings: {
    //       slidesToShow: 1,
    //       dots: true,
    //     },
    //   },
    // ],
  };

  return (
    <CarouselContaier>
      <Slider {...settings}>
        {ImageData.map((data) => {
          return (
            <CarImage
              src={data.image_url}
              alt="car"
              key={data.image_id}
            ></CarImage>
          );
        })}
      </Slider>
    </CarouselContaier>
  );
};

export default SpecCarousel;

const CarouselContaier = styled.div`
  width: 600px;
  margin: 50px auto;
  position: relative;

  .slick-prev:before,
  .slick-next:before {
    opacity: 1;
  }

  ::before,
  ::after {
    display: block;
    position: absolute;
    content: "";
    width: 50px;
    height: 100%;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      rgb(255, 255, 255) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
  }

  ::after {
    top: 0;
    right: 0;
    background: linear-gradient(
      to left,
      rgb(255, 255, 255) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const CarImage = styled.img`
  height: 300px;
`;
