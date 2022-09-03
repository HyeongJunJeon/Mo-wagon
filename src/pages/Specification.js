import React from "react";
import styled from "styled-components";
import SpecCarousel from "./component/SpecCarousel";
import SpecLayout from "./component/SpecLayout";

const Specification = () => {
  return (
    <Container>
      <SpecTextBox>
        <KorText>제원표</KorText>
        <EngText>Technical data</EngText>
      </SpecTextBox>

      <SpecCarousel />

      <SpecLayout />
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
