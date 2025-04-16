import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const loginStyle = (theme: Theme) =>
  css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    gap: 0.7rem;

    h2 {
      color: ${theme.color.primaryText};
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
    }

    input {
      width: 20rem;
      height: 2.5rem;
      background-color: ${theme.color.white};
      border: solid 0.1px ${theme.color.lightgray};
      border-radius: 2px;
      padding: 0 0.5rem;
      font-size: 0.9rem;
    }

    button {
      width: 20rem;
      height: 2.5rem;
      background-color: ${theme.color.button1};
      border-width: 0;
      border-radius: 2px;
      font-size: 1.1rem;
      color: ${theme.color.primaryText};
      transition-duration: 0.3s;

      &:hover {
        cursor: pointer;
        background-color: ${theme.color.button2};
        color: ${theme.color.white};
      }
    }

    p {
      text-decoration: underline;
      text-decoration-color: ${theme.color.primaryText};
      color: ${theme.color.primaryText};

      &:hover {
        cursor: pointer;
      }
    }
  `;
