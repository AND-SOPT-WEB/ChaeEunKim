import React from "react";
import styled from "@emotion/styled";

function Header({ selected, onChange, count, level, onLevelChange }) {
  return (
    <Main>
      <Title>1 to 50</Title>
      <Menu>
        {/* 게임버튼 */}
        <Buttons
          isActive={selected === "게임"}
          onClick={() => onChange("게임")}
        >
          게임
        </Buttons>
        {/* 랭킹버튼 */}
        <Buttons
          isActive={selected === "랭킹"}
          onClick={() => onChange("랭킹")}
        >
          랭킹
        </Buttons>
      </Menu>

      {/* 게임버튼이 선택됐을 때만 레벨과 타이머 표시 */}
      {selected === "게임" ? (
        <LevelTimer>
          <Select value={level} onChange={(e) => onLevelChange(e.target.value)}>
            <option>Level 1</option>
            <option>Level 2</option>
            <option>Level 3</option>
          </Select>

          {/* 소수점 아래 두 자리까지 */}
          <Timer>{count.toFixed(2)}</Timer>
        </LevelTimer>
      ) : null}
    </Main>
  );
}

const Main = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 50px 10px 50px;
  background-color: #31511e; // 색 var?로 지정하던 거 써보기
  color: white;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  margin: 0;
`;

const Menu = styled.div`
  display: flex;
  gap: 5px;
`;

const Buttons = styled.button`
  padding: 5px 13px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#859F3D" : "#31511E")};
  color: white;
  font-size: 0.7rem;
`;

const LevelTimer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex: 1; // 남은 공간을 모두 차지하도록...? 하는 설정
`;

const Select = styled.select`
  padding: 3px;
  font-size: 0.7rem;
  border-radius: 5px;
  border-width: 0;
`;

const Timer = styled.span`
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  width: 10px;
`;

export default Header;
