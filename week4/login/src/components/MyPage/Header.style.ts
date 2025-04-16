import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const headerStyle = (theme: Theme) => css`
  display: flex;
  gap: 1rem;
  padding: 1rem 1rem;
  background-color: ${theme.color.header};
  justify-content: space-between;
  align-items: center;
`;

export const leftStyle = css`
  display: flex;
  background-color: ${theme.color.header};

  h2 {
    color: white;
    margin-right: 1rem;
    background-color: ${theme.color.header};
  }

  button {
    color: white;
    border: 0;
    font-size: 1rem;
    background-color: ${theme.color.header};
    cursor: pointer;
  }
`;

export const rightStyle = css`
  button {
    color: white;
    border: 0;
    font-size: 1rem;
    background-color: ${theme.color.header};
    cursor: pointer;
  }
`;
