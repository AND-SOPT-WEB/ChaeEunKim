/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { signupStyle } from "./Signup.style";
import { useState } from "react";
import SignUpName from "../../components/SignUp/SignUpName";
import SignUpPw from "../../components/SignUp/SignUpPw";
import SignUpHobby from "../../components/SignUp/SignUpHobby";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);

  return (
    <main css={signupStyle}>
      <h2>회원가입</h2>

      {step === 1 && <SignUpName onNext={async () => setStep(2)} />}
      {step === 2 && <SignUpPw onNext={async () => setStep(3)} />}
      {step === 3 && <SignUpHobby />}

      <div>
        <p>이미 회원이신가요?</p>
        <p className="loginBtn" onClick={() => navigate("/")}>
          로그인
        </p>
      </div>
    </main>
  );
};

export default Signup;
