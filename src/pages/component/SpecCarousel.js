import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SpecCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/Car.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data[0].image);
      });
  }, []);

  //   console.log(images[0].image_url);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <Container>
      afdaf
      <CarouselContaier>
        <Slider {...settings}>
          {images.map((data) => {
            return (
              <ImageWrapper className="carouselImg" key={data.image_id}>
                {/* <img src={data.image_url} alt="Car" /> */}
                <img src={data.image_url}></img>
              </ImageWrapper>
            );
          })}
        </Slider>
      </CarouselContaier>
    </Container>
  );
};

export default SpecCarousel;

const Container = styled.div``;

const CarouselContaier = styled.div`
  width: 800px;
`;

const ImageWrapper = styled.div`
  border-left: 1px solid gainsboro;
  text-align: center;
  font-size: 30px;
  .carouselImg {
    margin: 100px auto;
    width: 180px;
    height: 180px;
    border-radius: 5px;
  }
`;
