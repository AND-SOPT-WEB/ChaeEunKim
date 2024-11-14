import { css } from "@emotion/react";

export const headerStyle = css`
    display: flex;
    gap: 1rem;
    padding: 1rem 1rem;
    background-color: #201E43;
    justify-content: space-between;
    align-items: center;
`;

export const leftStyle = css`
    display: flex;
    background-color: #201E43;

    & h2 {
        color: white;
        margin-right: 1rem;
        background-color: #201E43;
    }

    & button {
        color: white;
        border: 0;
        font-size: 1rem;
        background-color: #201E43;
    }
`;

export const rightStyle = css`
    
    & button {
        color: white;
        border: 0;
        font-size: 1rem;
        background-color: #201E43;
    }
`;