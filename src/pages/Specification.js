import React from "react";
import styled from "styled-components";
import SpecCarousel from "./component/SpecCarousel";

const Specification = () => {
  return (
    <Container>
      <SpecCarousel />
    </Container>
  );
};

export default Specification;

const Container = styled.div`
  width: 1350px;
  margin: 130px auto;
  margin-bottom: 50px;
  background-color: red;
`;
