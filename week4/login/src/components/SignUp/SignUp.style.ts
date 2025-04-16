import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const signupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  input {
    width: 20rem;
    height: 2.5rem;
    background-color: ${theme.color.white};
    border: solid 0.1px ${theme.color.lightgray};
    border-radius: 2px;
    padding: 0 0.5rem;
  }

  button {
    height: 2.5rem;
    background-color: ${theme.color.button3};
    border-width: 0;
    border-radius: 2px;
    font-size: 1.1rem;
    color: ${theme.color.white};
    transition-duration: 0.3s;
    cursor: pointer;
  }

  button:disabled {
    background-color: ${theme.color.lightgray};
    cursor: not-allowed;
  }
`;

export const errorMessageStyle = css`
  color: red;
  font-size: 0.9rem;
  margin-top: -0.5rem;
`;

export const inputWrapperStyle = css`
  position: relative;

  input {
    padding-right: 2.5rem;
  }
`;

export const iconStyle = css`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #dedede;
  background-color: white;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 1;
`;
