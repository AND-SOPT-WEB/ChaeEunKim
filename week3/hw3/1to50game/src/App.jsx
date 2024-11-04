import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Ranking from './components/Ranking';

function App() {
  const [selected, setSelected] = useState('게임');  //useState 안의 '게임'은 selected의 초기값
  
  // 메뉴를 선택했을 때 호출되는 함수
  const changeSelect = (menu) => {
    setSelected(menu);
  }


  return (
    <div className='menu-bar'>
      {/* 헤더 컴포넌트에 현재 선택된 메뉴와 메뉴를 변경하는 함수를 전달 */}
      <Header selected={selected} onChange={changeSelect} />

      <main>
        {selected === '게임' ? <Game /> : <Ranking />}
      </main>
    </div>
  )
}

export default App