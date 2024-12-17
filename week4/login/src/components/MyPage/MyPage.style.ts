import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const myPageStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  margin-top: 5%;

  .top {
    display: flex;
    justify-content: center;
    margin-bottom: 1.3rem;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
      background-color: #${theme.color.button2};
      color: ${theme.color.white};
    }
  }

  p {
    font-size: 1rem;
    color: ${theme.color.detailText};
  }
`;
