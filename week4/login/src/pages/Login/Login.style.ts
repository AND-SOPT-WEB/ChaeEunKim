import { css } from "@emotion/react";

export const loginStyle = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    gap: 0.7rem;

    & h2 {
        color: #31363F;
    }

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
    }

    & input {
        width: 20rem;
        height: 2.5rem;
        background-color: white;
        border: solid 0.1px lightgrey;
        border-radius: 2px;
        padding: 0 0.5rem;
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
        text-decoration: underline;
        text-decoration-color: #31363F;
        color: #31363F;

        &:hover {
            cursor: pointer;
        }
    }
`;