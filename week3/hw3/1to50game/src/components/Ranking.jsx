import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

function Ranking() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const storedRanking = JSON.parse(localStorage.getItem("ranking")) || [];
    // 플레이 시간을 기준으로 오름차순 정렬
    const sortedRanking = storedRanking.sort(
      (a, b) => parseFloat(a.playTime) - parseFloat(b.playTime)
    );
    setRanking(sortedRanking); // 정렬된 데이터 상태에 저장
  }, []);

  const clearRanking = () => {
    localStorage.removeItem("ranking"); // localStorage 데이터 삭제
    setRanking([]); // 상태 초기화
  };

  return (
    <Main>
      <Container>
        <Title>
          <Text>랭킹</Text>
          <Reset onClick={clearRanking}>초기화</Reset>
        </Title>
        <Table>
          <Thead>
            <tr>
              <Th>타임스탬프</Th>
              <Th>레벨</Th>
              <Th>플레이 시간</Th>
            </tr>
          </Thead>
          <Tbody>
            {ranking.map((entry, index) => (
              <tr key={index}>
                <Td>{entry.record}</Td>
                <Td>{entry.level}</Td>
                <Td>{entry.playTime} 초</Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  background-color: #f6fcdf;
  min-height: 100vh; /* 전체 화면 높이를 차지하도록 설정 */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  width: 50%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  gap: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.h3`
  display: flex;
  justify-content: center;
`;

const Reset = styled.button`
  cursor: pointer;
  background-color: #f44;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #448d5a;
  font-size: 0.7rem;
  color: white;
`;

const Tbody = styled.tbody`
  text-align: center;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export default Ranking;
