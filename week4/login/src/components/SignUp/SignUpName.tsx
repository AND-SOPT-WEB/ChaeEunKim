/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { signupStyle } from "./SignUp.style";

interface signuptype {
  onNext: () => {};
}
const SignUpName: React.FC<signuptype> = ({ onNext }) => {
    const [userName, setUserName] = useState("");

    const hansdleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }
  return (
    <main css={signupStyle}>
      <h4>이름</h4>
      <input
        type="text"
        name="useName"
        placeholder="사용자 이름을 입력해주세요"
        value={userName}
        onChange={hansdleInputChange}
      />
      <button
        type="submit"
        onClick={onNext}
        disabled={userName.trim() === ""}
      >
        다음
      </button>
    </main>
  );
};

export default SignUpName;
