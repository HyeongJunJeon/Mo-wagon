import React from "react";
import styled from "styled-components";
import gwagon from "../img/main-gwagon.jpg";
import mohave from "../img/main-mohave.jpg";

const Main = () => {
  return (
    <Container>
      <TitlePart>
        <BackgroundContainer>
          <BackgroundGwagon></BackgroundGwagon>
          <BackgroundMohave></BackgroundMohave>
        </BackgroundContainer>
        <TitleContent>
          <p>wellcome to Mo-wagon!</p>
          <p>모하비와 지바겐을 소개합니다!</p>
        </TitleContent>
      </TitlePart>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 1350px;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const TitlePart = styled.div`
  position: relative;
  width: 100%;
`;

const BackgroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
`;

const BackgroundGwagon = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${gwagon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 2s 1s ease;
  opacity: 1;
`;

const BackgroundMohave = styled(BackgroundGwagon)`
  background-image: url(${mohave});
  transition: opacity 2s 2s ease;
`;

const TitleContent = styled.div`
  position: absolute;
  left: 40%;
  bottom: 10%;
  p {
    margin-bottom: 20px;
    color: ${(props) => props.theme.secondary};
    font-size: 30px;
    font-weight: 700;
    transition: opacity 2s 3s ease;
    opacity: 1;
  }
`;
