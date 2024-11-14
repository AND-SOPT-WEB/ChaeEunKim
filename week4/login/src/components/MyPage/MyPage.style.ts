import { css } from "@emotion/react";

export const myPageStyle = css`
    display: flex;
    justify-content: center;
    margin-top: 5%;   

    & .top {
        display: flex;
        justify-content: center;
        margin-bottom: 1.3rem;
    }

    & .bottom {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    & input {
        width: 20rem;
        height: 2.5rem;
        background-color: white;
        border: solid 0.1px lightgrey;
        border-radius: 2px;
        padding: 0 0.5rem;
        font-size: 0.9rem;
    }

    & button {
        width: 20rem;
        height: 2.5rem;
        background-color: #CBDCEB;
        border-width: 0;
        border-radius: 2px;
        font-size: 1.1rem;
        color: #31363F;
        transition-duration: 0.3s;

        &:hover {
            cursor: pointer;
            background-color: #608BC1;
            color: white;
        }
    }

    & p {
        font-size: 1rem;
        color: #134B70;
    }
`;