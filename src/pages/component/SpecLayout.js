import React from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";

const SpecLayout = ({ specification }) => {
  return (
    <Table>
      <Thead>
        <Th>항목</Th>
        <Th>정보</Th>
      </Thead>

      <Tbody>
        {specification.map((data) => (
          <Tr key={data.id}>
            <Td>{data.name}</Td>
            <Td>{data.data}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SpecLayout;

const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  border: 5px solid ${({ theme }) => theme.secondary};
`;

const Thead = styled.thead`
  font-size: 25px;
  font-weight: 800;
  border-bottom: 5px solid ${({ theme }) => theme.secondary};
`;

const Th = styled.th`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  font-size: 18px;
`;

const Td = styled.td`
  padding: 15px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.border};
`;
