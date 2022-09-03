import React from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../store";

const FaqBox = ({ data }) => {
  let dispatch = useDispatch();

  return (
    <FaqBoxContainer>
      <FaqTitle on={data.isShow}>
        Q. {data.title}
        <Button
          onClick={() => {
            dispatch(changeStatus(data.id));
          }}
        >
          {data.onOffBtn ? "열기" : "닫기"}
        </Button>
      </FaqTitle>
      <FaqContent on={data.isShow}>A. {data.content}</FaqContent>
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
