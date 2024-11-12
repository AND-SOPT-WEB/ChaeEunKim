/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { signupStyle } from "./SignUp.style";
import { useNavigate } from "react-router-dom";

const SignUpHobby = () => {
  const [hobby, setHobby] = useState("");
  const navigate = useNavigate();

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
        onClick={() => navigate("/")}
        disabled={hobby.trim() === ""}
      >
        회원가입
      </button>
    </main>
  );
};

export default SignUpHobby;
