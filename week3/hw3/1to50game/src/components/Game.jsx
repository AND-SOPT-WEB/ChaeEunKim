import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";

function Game({ startCount, stopCount, count }) {
    const [clickNumber, setClickNumber] = useState(1);
    const [number, setNumber] = useState([]);

    const click = (num, num2) => {
        // 1 클릭하면 카운트 시작
        if (num === 1 && clickNumber === 1) {
            startCount();  
        }

        if (num === clickNumber || num2 === clickNumber ) {
            setClickNumber(clickNumber + 1);

            if(num === clickNumber){            
                setNumber(prevNumbers => 
                    prevNumbers.map((item) =>
                        item[0].num === num ? [{...item[0], isClick: true}, item[1]] : item
                    )
                );
            }
            else {
                setNumber(prevNumbers => 
                    prevNumbers.map((item) =>
                       item[1].num === num ? [{...item[1], isClick: true}, item[0]] : item
                   )
               );
            }

        }
        

        if (clickNumber === 18) {
            // 타이머 정지
            stopCount();

            // 알림창 띄우기
            alert(`게임 끝! 기록: ${count.toFixed(2)}초`);
        }
    };

    useEffect(() => {
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
                { "num": arr1[i], "isClick": false },
                { "num": arr2[i], "isClick": false }
            ]);
        }
        setNumber(copy); 
    }, []);

    return (
        <Container>
            <Guide>다음 숫자: {clickNumber}</Guide>
            <GameBoard>
                {number.map((num) => (
                    <GameButtons 
                        key={num[0].num} 
                        onClick={() => click(num[0].num, num[1].num)}
                    >
                        {num[0].isClick ? num[1].num : num[0].num}
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
    background-color: #F6FCDF;
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
    background-color: #448d5a;
    color: white;
`;

export default Game;