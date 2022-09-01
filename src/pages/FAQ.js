import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FaqBox from "./component/FaqBox";

const FAQ = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/Faq.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Container>
      <FaqTextBox>
        <KorText>질문게시판</KorText>
        <EngText>FAQ</EngText>
      </FaqTextBox>

      {data.map((data) => (
        <FaqBox data={data} key={data.id} />
      ))}
    </Container>
  );
};

export default FAQ;

const Container = styled.div`
  max-width: 1350px;
  margin: 130px auto;
  margin-bottom: 50px;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
`;

const FaqTextBox = styled.div`
  text-align: center;
`;

const KorText = styled.span`
  font-size: 30px;
  border-bottom: 3px solid ${({ theme }) => theme.border};
`;

const EngText = styled.p`
  margin: 0 10px;
  padding: 30px 0;
  border-bottom: 3px solid ${({ theme }) => theme.border};
  font-size: 30px;
  font-style: italic;
`;
