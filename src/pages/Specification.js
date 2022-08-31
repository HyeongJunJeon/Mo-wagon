import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SpecCarousel from "./component/SpecCarousel";
import SpecLayout from "./component/SpecLayout";

const Specification = () => {
  const [images, setImages] = useState([]);
  const [specification, setSpecification] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/Car.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data[0].image);
        setSpecification(data[0].specification);
      });
  }, []);

  return (
    <Container>
      <SpecTextBox>
        <KorText>제원표</KorText>
        <EngText>Technical data</EngText>
      </SpecTextBox>

      <SpecCarousel images={images} />

      <SpecLayout specification={specification} />
    </Container>
  );
};

export default Specification;

const Container = styled.div`
  max-width: 1350px;
  margin: 130px auto;
  margin-bottom: 50px;
`;

const SpecTextBox = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const KorText = styled.span`
  font-size: 30px;
  border-bottom: 3px solid ${({ theme }) => theme.border};
`;

const EngText = styled.p`
  margin-top: 30px;
  font-size: 30px;
  font-style: italic;
`;
