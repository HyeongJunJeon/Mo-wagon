import React from "react";
import styled, { keyframes } from "styled-components";
import Icon from "../img/benz.png";
import { useNavigate } from "react-router";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BenzIcon src={Icon} alt="Icon"></BenzIcon>
      <ContentBox>
        <li onClick={() => navigate("/")}>HOME</li>
        <Item>
          G-WAGON
          <ul>
            <li onClick={() => navigate("/specification")}>제원</li>
            <li>가격</li>
          </ul>
        </Item>
        <Item>
          MOHAVE
          <ul>
            <li>제원</li>
            <li>가격</li>
          </ul>
        </Item>
        <li>FAQ</li>
      </ContentBox>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  background-color: ${(props) => props.theme.primary};
  border-bottom: 1px solid ${(props) => props.theme.border};
  font-size: 20px;
`;

const BenzIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 30px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 50%;
`;

const ContentBox = styled.ul`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  li {
    margin: 0 40px;
  }
`;

const dropDown = keyframes`
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }`;

const Item = styled.li`
  margin: 0 40px;
  text-align: center;

  ul {
    display: none;
  }

  :hover {
    padding: 10px;
    background-color: ${(props) => props.theme.secondary};
    border-radius: 5px;
    color: black;
    ul {
      animation-name: ${dropDown};
      animation-duration: 1s;
      display: block;
      height: 130px;
      border-top: 1px solid ${(props) => props.theme.primary};
      font-size: 18px;

      background-color: ${(props) => props.theme.secondary};
      color: ${(props) => props.theme.primary};

      li {
        height: 50%;
        text-align: center;
        padding-top: 25%;
      }
    }
  }
`;
