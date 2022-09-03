import React from "react";
import styled from "styled-components";
import Estimate from "./component/Estimate";

const Price = () => {
  return (
    <Container>
      <PriceTextBox>
        <KorText>견적내기</KorText>
        <EngText>Estimate</EngText>
      </PriceTextBox>

      <Estimate />
    </Container>
  );
};

export default Price;

const Container = styled.div`
  max-width: 1350px;
  margin: 130px auto;
  margin-bottom: 50px;
`;

const PriceTextBox = styled.div`
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
