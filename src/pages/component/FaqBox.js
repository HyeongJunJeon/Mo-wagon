import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const FaqBox = ({ data }) => {
  const [content, setContent] = useState(false);
  const [onOffBtn, setOnOffBtn] = useState(true);

  const handleContent = () => {
    setContent(!content);
    setOnOffBtn(!onOffBtn);
  };

  return (
    <FaqBoxContainer>
      <FaqTitle on={content}>
        Q. {data.title}
        <Button onClick={handleContent}>{onOffBtn ? "열기" : "닫기"}</Button>
      </FaqTitle>
      <FaqContent on={content}>A. {data.content}</FaqContent>
    </FaqBoxContainer>
  );
};

export default FaqBox;

const FaqBoxContainer = styled.div`
  margin: 0px 10px;
`;

const FaqTitle = styled.div`
  position: relative;
  padding: 30px 5px;
  color: ${({ on }) => on && "green"};
  font-weight: ${({ on }) => on && "600"};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  z-index: 1;
  background-color: white;
`;

const Button = styled.span`
  position: absolute;
  right: 0;
  color: ${({ theme }) => theme.blue};
  cursor: pointer;
`;

const dropDown = keyframes`
  0% {
    transform: translateY(-70px);
  }
  100% {
    transform: translateY(0px);
  }`;

const FaqContent = styled.div`
  display: ${({ on }) => (on ? "block" : "none")};
  padding: 50px 5px;
  background-color: #f4f4f2;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  animation-name: ${dropDown};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
