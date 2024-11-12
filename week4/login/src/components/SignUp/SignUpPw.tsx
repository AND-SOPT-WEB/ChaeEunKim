/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { signupStyle } from "./SignUp.style";

interface signuptype {
  onNext: () => {};
}

const SignUpPw: React.FC<signuptype> = ({ onNext }) => {
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2 ] = useState("");

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword1(e.target.value)
    }
    const handleInputChange2 = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value)
    }

  return (
    <main css={signupStyle}>
      <h4>비밀번호</h4>
      <input
        type="text"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        value={password1}
        onChange={handleInputChange}
      />
      <input 
        type="text" 
        name="password2" 
        placeholder="비밀번호 확인"
        value={password2}
        onChange={handleInputChange2}
      />
      <button
        type="submit"
        onClick={onNext}
        disabled={
            password1.trim() === "" ||
            password2.trim() ==="" ||
            password1 !== password2}
      >
        다음
      </button>
    </main>
  );
};

export default SignUpPw;
