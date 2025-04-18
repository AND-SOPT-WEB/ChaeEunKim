/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { signupStyle } from "./Signup.style";
import { useState } from "react";
import SignUpName from "../../components/SignUp/SignUpName";
import SignUpPw from "../../components/SignUp/SignUpPw";
import SignUpHobby from "../../components/SignUp/SignUpHobby";
import axios from "axios";

interface SignUpResponse {
  result: {
    no: number;
  };
}

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hobby, setHobby] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post<SignUpResponse>(
        "http://223.130.135.50:8085/user",
        {
          username: userName,
          password,
          hobby,
        }
      );

      if (response.status === 200) {
        alert(`회원가입 성공! 회원번호: ${response.data.result.no}`);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("회원가입 실패! 다시 시도하세요.");
    }
  };

  return (
    <main css={signupStyle}>
      <h2>회원가입</h2>

      {step === 1 && (
        <SignUpName
          onNext={async () => setStep(2)}
          userName={userName}
          setUserName={setUserName}
        />
      )}

      {step === 2 && (
        <SignUpPw
          onNext={async () => setStep(3)}
          password={password}
          setPassword={setPassword}
        />
      )}

      {step === 3 && (
        <SignUpHobby
          hobby={hobby}
          setHobby={setHobby}
          onSubmit={handleSignUp}
        />
      )}

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
