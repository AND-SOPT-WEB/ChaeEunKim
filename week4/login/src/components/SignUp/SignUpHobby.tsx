/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction } from "react";
import { signupStyle } from "./SignUp.style";

interface signuptype {
  hobby: string
  setHobby: Dispatch<SetStateAction<string>>;
  onSubmit: () => Promise<void>;
}

const SignUpHobby:React.FC<signuptype> = ({ hobby, setHobby, onSubmit }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHobby(e.target.value);
  };

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
      <button
        type="submit"
        onClick={onSubmit}
        disabled={hobby.trim() === ""}
      >
        회원가입
      </button>
    </main>
  );
};

export default SignUpHobby;
