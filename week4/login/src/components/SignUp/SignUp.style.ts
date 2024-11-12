import { css } from "@emotion/react";

export const signupStyle = css`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    & input {
        width: 20rem;
        height: 2.5rem;
        background-color: white;
        border: solid 0.1px lightgrey;
        border-radius: 2px;
        padding: 0 0.5rem;
    }
    
    & button {
        height: 2.5rem;
        background-color: #31363F;
        border-width: 0;
        border-radius: 2px;
        font-size: 1.1rem;
        color: white;
        transition-duration: 0.3s;
        cursor: pointer;
    }

    & :disabled {
        background-color: lightgray;
        cursor: not-allowed;
    }
`;