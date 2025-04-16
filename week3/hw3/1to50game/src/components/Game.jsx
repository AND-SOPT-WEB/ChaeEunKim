import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

function Game({ startCount, stopCount, resetCount, count, level }) {
  const [clickNumber, setClickNumber] = useState(1);
  const [number, setNumber] = useState([]);

  const generateRandomNumbers = () => {
    let temp1 = new Set();
    while (temp1.size < 9) {
      const randomNumber = Math.floor(Math.random() * 9 + 1);
      temp1.add(randomNumber);
    }
    let temp2 = new Set();
    while (temp2.size < 9) {
      const randomNumber = Math.floor(Math.random() * 9 + 10);
      temp2.add(randomNumber);
    }

    let arr1 = Array.from(temp1);
    let arr2 = Array.from(temp2);
    let copy = [];
    for (let i = 0; i < 9; i++) {
      copy.push([
        { num: arr1[i], isClick: false },
        { num: arr2[i], isClick: false },
      ]);
    }
    return copy;
  };

  const resetGame = () => {
    setClickNumber(1); // 숫자 초기화
    setNumber(generateRandomNumbers()); // 새로운 숫자 생성
    resetCount(); // 타이머 초기화
  };

  const saveRankingData = (playTime) => {
    const record = new Date().toLocaleString();
    const rankingData = JSON.parse(localStorage.getItem("ranking")) || [];

    const newEntry = {
      record,
      level,
      playTime: playTime.toFixed(2),
    };

    rankingData.push(newEntry);
    localStorage.setItem("ranking", JSON.stringify(rankingData));
  };

  const click = (num) => {
    if (num === 1 && clickNumber === 1) {
      startCount();
    }

    if (num === clickNumber) {
      if (clickNumber === 18) {
        stopCount();
        saveRankingData(count);

        alert(`게임 끝! 기록: ${count.toFixed(2)}초`);

        resetGame();
        return;
      }

      setClickNumber(clickNumber + 1);

      // 클릭된 숫자를 처리 (사라지게 하기)
      setNumber((prevNumbers) =>
        prevNumbers.map((item) => {
          if (item[0].num === num) {
            return [{ ...item[0], isClick: true }, item[1]];
          }
          if (item[1].num === num) {
            return [item[0], { ...item[1], isClick: true }];
          }
          return item;
        })
      );
    }
  };

  useEffect(() => {
    setNumber(generateRandomNumbers());
  }, [level]);

  return (
    <Container>
      <Guide>다음 숫자: {clickNumber}</Guide>
      <GameBoard>
        {number.map((numPair, index) => (
          <GameButtons
            key={index}
            onClick={
              numPair[0].isClick
                ? numPair[1].isClick
                  ? null // 두 숫자가 모두 클릭된 경우 아무 동작하지 않음
                  : () => click(numPair[1].num)
                : () => click(numPair[0].num)
            }
            disabled={numPair[0].isClick && numPair[1].isClick} // 두 숫자가 모두 클릭된 경우 비활성화
          >
            {numPair[0].isClick && numPair[1].isClick
              ? "" // 두 숫자가 모두 클릭된 경우 빈칸 유지
              : numPair[0].isClick
              ? numPair[1].num
              : numPair[0].num}
          </GameButtons>
        ))}
      </GameBoard>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  font-size: 0.8rem;
  flex-direction: column;
  align-items: center;
  background-color: #f6fcdf;
  min-height: 100vh;
`;

const Guide = styled.p`
  padding-bottom: 15px;
`;

const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

const GameButtons = styled.button`
  width: 50px;
  height: 50px;
  font-size: 1rem;
  border-radius: 0;
  border-width: 0;
  padding: 10px 13px;
  background-color: ${({ disabled }) => (disabled ? "transparent" : "#448d5a")};
  color: ${({ disabled }) => (disabled ? "transparent" : "white")};
`;

export default Game;
