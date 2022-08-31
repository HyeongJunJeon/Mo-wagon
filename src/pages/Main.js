import React from "react";
import styled, { keyframes } from "styled-components";
import gwagon from "../img/main-gwagon.jpg";
import mohave from "../img/main-mohave.jpg";
import ReactPlayer from "react-player";

const Main = () => {
  const CONTACT_TAB = [
    "시승 신청",
    "메르세데스-벤츠 스토어",
    "기아 자동차 스토어",
    "온라인 서비스 예약",
    "뉴스 및 이벤트",
  ];

  return (
    <Container>
      <TitlePart>
        <BackgroundContainer>
          <BackgroundGwagon></BackgroundGwagon>
          <BackgroundMohave></BackgroundMohave>
        </BackgroundContainer>
        <TitleContent>
          <TitleText>wellcome to Mo-wagon!</TitleText>
          <TitleText>모하비와 지바겐을 소개합니다!</TitleText>
        </TitleContent>
      </TitlePart>

      <div>
        <HighlightCaption>시대가 변해도 변하지 않는 DNA.</HighlightCaption>
        <HighlightText>
          독특한 디자인의 도어 손잡이부터 문이 닫힐 때의 소리, 테일게이트의
          스페어 휠에 이르기까지. 40년 동안 변함없이 이어온 The G-Class만의
          DNA는 The G-Class를 더욱 가치 있게 만들어줍니다.
        </HighlightText>

        <div style={{ marginTop: "50px" }}>
          <ReactPlayer
            url={"https://youtu.be/Vj1WZgYnNQ0"}
            width="100%"
            heigth="700px"
            playing={false}
            muted={true}
            controls={true}
          />
        </div>

        <HighlightCaption>변하지 않는 자신감 MOHAVE.</HighlightCaption>
        <HighlightText>
          블랙 컬러 고유의 정제된 프리미엄 그래비티, 존재감을 드러내는 선이 굵고
          기품있는 디자인, 와이드한 레이아웃과 고급스러운 디테일, 프리미엄
          드라이빙 스페이스, 파워풀하고 민첩한 주행 성능을 제공합니다.
        </HighlightText>

        <div style={{ marginTop: "50px" }}>
          <ReactPlayer
            url={"https://youtu.be/zvaCys-QJUg"}
            width="100%"
            heigth="700px"
            playing={false}
            muted={true}
            controls={true}
          />
        </div>
      </div>

      <div>
        <HighlightCaption>시승 및 구매상담</HighlightCaption>
        <HighlightText>
          시승 스케줄 확정 및 상담을 위해 컨설턴트가 연락을 드립니다.
        </HighlightText>

        <CardContainer>
          {CONTACT_TAB.map((item) => (
            <ContactCard>
              <CardText>{item}</CardText>
              <CardArrow>{">"}</CardArrow>
            </ContactCard>
          ))}
        </CardContainer>
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 1350px;
  margin: 130px auto;
  margin-bottom: 50px;
  /* position: absolute;
  top: 130px;
  left: 50%;
  transform: translate(-50%, 0%); */
  // 위에도 중앙정렬이 되지만 footer가 제자리를 못잡는다. viewport자체 정렬이기 때문이지 않을까..
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

const BackgroundEffect = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}`;

const BackgroundGwagon = styled.div`
  animation: ${BackgroundEffect};
  animation-duration: 5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 50%;
  height: 100%;
  background-image: url(${gwagon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BackgroundMohave = styled(BackgroundGwagon)`
  animation-delay: 2s;
  background-image: url(${mohave});
`;

const TitleContent = styled.div`
  position: absolute;
  left: 40%;
  bottom: 10%;
`;

const TitleText = styled.p`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  animation: ${BackgroundEffect};
  animation-duration: 5s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

const HighlightCaption = styled.span`
  display: inline-block;
  margin-top: 50px;
  border-bottom: 3px solid ${(props) => props.theme.border};
  font-size: 32px;
`;

const HighlightText = styled.p`
  margin-top: 30px;
  font-size: 16px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactCard = styled.div`
  margin: 40px 5px;
  padding: 0 10px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  background-color: #313131;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: #161616;
  }
`;

const CardText = styled.p`
  font-size: 22px;
`;

const CardArrow = styled.button`
  font-size: 22px;
  background-color: inherit;
  border: none;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.blue};
  }
`;
