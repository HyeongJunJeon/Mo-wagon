import React, { useState, useEffect } from "react";
import styled from "styled-components";

const EstimateInputBox = ({ data }) => {
  const [selectedTrim, setSelectedTrim] = useState();
  const [price, setPrice] = useState();
  const [advancePayment, setAdvancePayment] = useState(20);
  const [month, setMonth] = useState(36);

  const handleSelect = (e) => {
    setSelectedTrim(e.target.value);
  };

  const handleAdvancePayment = (e) => {
    setAdvancePayment(e.target.value);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/data/Car.json")
      .then((res) => res.json())
      .then((data) => {
        if (selectedTrim) {
          setPrice(data[0].price[selectedTrim - 1].data);
        } else {
          setPrice(data[0].price[0].data);
        }
      });
  }, [selectedTrim]);

  let monthPay = (price - price * (advancePayment / 100)) / month;

  return (
    <InputBox>
      <LeftInput>
        <DataName>차종</DataName>
        <Data>
          <option>G-Class</option>
        </Data>
        <DataName>연식</DataName>
        <Data>
          <option>2022</option>
        </Data>
        <DataName>저금리 프로모션(%)</DataName>
        <Data>
          <option>3.3</option>
        </Data>
        <DataName>계약기간(개월)</DataName>
        <Data onChange={handleMonth}>
          <option>36</option>
          <option>48</option>
          <option>60</option>
        </Data>
        <PriceName>차량가</PriceName>
        <Price>{price?.toLocaleString()}원 </Price>
      </LeftInput>
      <RightInput>
        <DataName>차량 모델</DataName>
        <Data onChange={handleSelect}>
          {data.price?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Data>
        <DataName>상품명</DataName>
        <Data>
          <option>일반 할부</option>
        </Data>
        <DataName>선납금/선수금(%)</DataName>
        <Data onChange={handleAdvancePayment}>
          <option>20</option>
          <option>30</option>
        </Data>
        <DataName>선택사항을 다시 한번확인 해주세요</DataName>
        <Data>
          <option>선택사항을 다시 한번확인 해주세요</option>
        </Data>
        <PriceName>월 납입금액</PriceName>
        <Price>
          {Math.floor(monthPay + monthPay * 0.033)?.toLocaleString()}원
        </Price>
      </RightInput>
    </InputBox>
  );
};

export default EstimateInputBox;

const InputBox = styled.div`
  display: flex;
`;

const LeftInput = styled.div`
  width: 50%;
  margin: 20px 5px 20px 0;
`;

const DataName = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;

const Data = styled.select`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  font-size: 15px;
`;

const RightInput = styled(LeftInput)`
  margin: 20px 0 20px 5px;
`;

const PriceName = styled(DataName)`
  text-align: center;
  font-size: 25px;
  font-weight: 800;
`;

const Price = styled.div`
  height: 30px;
  margin-top: 15px;
  padding-top: 7px;
  text-align: center;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  font-weight: 800;
  border-radius: 5px;
`;
