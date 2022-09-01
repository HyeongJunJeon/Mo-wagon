import React from "react";
import styled from "styled-components";
import EstimateInputBox from "./EstimateInputBox";

const Estimate = ({ data, img }) => {
  return (
    <Container>
      <ImageBox>
        <CarName>{data.name}</CarName>
        <Image src={img.image_url} alt="car" />
      </ImageBox>

      <EstimateBox>
        <EstimateText>금융 견적</EstimateText>

        <EstimateInputBox data={data} />
      </EstimateBox>
    </Container>
  );
};

export default Estimate;

const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: 50px;
`;

const ImageBox = styled.div`
  width: 45%;
  height: 600px;
  border: 1px solid ${({ theme }) => theme.border};
  text-align: center;
`;

const CarName = styled.p`
  margin: 30px 20px 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-size: 20px;
`;

const Image = styled.img`
  width: 80%;
  height: 70%;
`;

const EstimateText = styled(CarName)`
  margin: 0;
  font-size: 22px;
`;

const EstimateBox = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 30px 20px;
`;
