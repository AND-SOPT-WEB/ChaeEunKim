import styled from '@emotion/styled';
import React from 'react';

function Ranking() {



    return (
        <Main>
            <Container>
                <Title>
                    <Text>랭킹</Text>
                    <Reset>초기화</Reset>
                </Title>
                
                <Table>
                    <Thead>
                        <Th>타임스탬프</Th>
                        <Th>레벨</Th>
                        <Th>플레이 시간</Th>
                    </Thead>
                </Table>
            </Container>
        </Main>
    );
}

const Main = styled.div`
    background-color: #F6FCDF;
    min-height: 100vh;  /* 전체 화면 높이를 차지하도록 설정 */
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
    gap: 20px
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
`;

const Text = styled.h3`
    display: flex;
    juntify-content: center;
`;

const Reset = styled.button`
    display: flex;
    justify-content: flex-end
`;

const Table = styled.table`
    
`;

const Thead = styled.thead`
    background-color: #448d5a;
    font-size: 0.7rem;
    color: white;
`;

const Th = styled.th`
    padding: 5px;
`

export default Ranking;