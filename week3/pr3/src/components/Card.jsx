import React from 'react';
import styled from "@emotion/styled";

const Card = ({name, engName, github})  => {
    return (
        <CardContainer>
            <CardName>{name}</CardName>
            <CardEnglishName>{engName}</CardEnglishName>
            <CardGithub>{github}</CardGithub>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.div`
    font-size: 10px;
    border: 1px solid;
    border-radius: 5px;
    padding: 20px 70px;
`;

const CardName = styled.h1`
    font-size: 20px;
`;

const CardEnglishName = styled.p`
    margin-bottom: 0px;
`;

const CardGithub = styled.p`
    margin-top: 0px;
`