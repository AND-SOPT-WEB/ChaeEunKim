import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Ranking from "./components/Ranking";

function App() {
  const [selected, setSelected] = useState("게임"); // useState 안의 '게임'은 selected의 초기값
  const [count, setCount] = useState(0); // 타이머 초기값 설정
  const [runTimer, setRunTimer] = useState(false); // 게임 시작 전까진 타이머 실행 안 함
  const [level, setLevel] = useState("Level 1"); // 현재 레벨 상태 추가

  // 메뉴를 선택했을 때 호출되는 함수
  const changeSelect = (menu) => {
    setSelected(menu);
  };

  useEffect(() => {
    if (runTimer) {
      const id = setInterval(() => {
        setCount((count) => count + 0.01);
      }, 10); // 0.01초마다 카운트
      return () => clearInterval(id);
    }
  }, [runTimer]);

  // 게임 시작
  const startCount = () => {
    setRunTimer(true);
    setCount(0);
  };

  // 게임 종료
  const stopCount = () => {
    setRunTimer(false);
  };

  // 타이머 초기화
  const resetCount = () => {
    setRunTimer(false); // 타이머 중지
    setCount(0); // 타이머 값 초기화
  };

  const changeLevel = (newLevel) => {
    setLevel(newLevel); // 레벨 변경
    resetCount(); // 타이머 초기화
  };

  return (
    <div className="menu-bar">
      {/* 헤더 컴포넌트에 현재 선택된 메뉴와 메뉴를 변경하는 함수를 전달 */}
      <Header
        selected={selected}
        onChange={changeSelect}
        count={count}
        level={level}
        onLevelChange={changeLevel}
      />

      <main>
        {selected === "게임" ? (
          <Game
            startCount={startCount}
            stopCount={stopCount}
            resetCount={resetCount} // 타이머 초기화 함수 전달
            count={count}
            level={level}
          />
        ) : (
          <Ranking />
        )}
      </main>
    </div>
  );
}

export default App;
