import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <TextBox>
        <p>©2022 전형준-Mo-wagon(주) /</p> <p>메르세데스-벤츠 코리아(주) /</p>
        <p>현대기아 자동차 코리아(주)</p> <p>설정 개인정보처리방침(MBFSK)</p>
        <p>개인정보처리방침(MBMK)</p> <p>개인정보처리방침(MMP)</p>
        <p>개인정보처리방침(MBK)</p>
        <p>문의사항 전형준 010-9395-0178 or wehj0105@gmail.com</p>
      </TextBox>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  position: relative;
  height: 100px;
  border-top: 1px solid ${(props) => props.theme.border};
`;

const TextBox = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);

  p {
    color: ${(props) => props.theme.border};
    margin: 5px;
  }
`;
