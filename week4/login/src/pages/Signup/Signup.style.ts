import { css } from "@emotion/react";

export const signupStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  gap: 0.7rem;

  & div {
    display: flex;
    font-size: 1rem;
  }

  & .loginBtn {
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }

  & div {
    gap: 0.5rem;
  }
`;
