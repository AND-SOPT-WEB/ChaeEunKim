import React from 'react';
import styled from "@emotion/styled";

const Card = ({name, engName})  => {
    return (
        <CardContainer>
            <CardName>{name}</CardName>
            <p>{engName}</p>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.div`
    font-size: 30px;
`;

const CardName = styled.h1`
    color: green;
    font-size: 50px;
`;