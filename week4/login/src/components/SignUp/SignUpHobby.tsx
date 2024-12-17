/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction } from "react";
import { signupStyle, errorMessageStyle } from "./SignUp.style";

interface signuptype {
  hobby: string;
  setHobby: Dispatch<SetStateAction<string>>;
  onSubmit: () => Promise<void>;
}

const SignUpHobby = ({ hobby, setHobby, onSubmit }: signuptype) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHobby(e.target.value);
  };

  const isHobbyTooLong = hobby.length > 8;
  const isButtonDisabled = hobby.trim() === "" || isHobbyTooLong;

  return (
    <main css={signupStyle}>
      <h4>취미</h4>
      <input
        type="text"
        name="hobby"
        placeholder="취미를 입력해주세요"
        value={hobby}
        onChange={handleInputChange}
      />
      {isHobbyTooLong && (
        <span css={errorMessageStyle}>취미는 8자 이하로 입력해주세요</span>
      )}
      <button
        type="submit"
        onClick={onSubmit}
        disabled={isButtonDisabled}
      >
        회원가입
      </button>
    </main>
  );
};

export default SignUpHobby;
