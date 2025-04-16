/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { signupStyle, errorMessageStyle, inputWrapperStyle, iconStyle } from "./SignUp.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

interface signuptype {
  onNext: () => void;
  password: string;
  setPassword: (value: string) => void;
}

const SignUpPw = ({ onNext, setPassword }: signuptype) => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword1(e.target.value);
    setPassword(e.target.value);
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  };

  // 비밀번호 보이기/숨기기
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const isPasswordTooLong = password1.length > 8;
  const isPasswordMismatch = password2.length > 0 && password1 !== password2;

  const isButtonDisabled =
    password1.trim() === "" ||
    password2.trim() === "" ||
    isPasswordTooLong ||
    isPasswordMismatch;

  return (
    <main css={signupStyle}>
      <h4>비밀번호</h4>
      <div css={inputWrapperStyle}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={password1}
          onChange={handleInputChange}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          css={iconStyle}
          onClick={toggleShowPassword}
        />
      </div>
      {isPasswordTooLong && (
        <span css={errorMessageStyle}>비밀번호를 8자 이하로 입력해주세요</span>
      )}
      <input
        type="password"
        name="password2"
        placeholder="비밀번호 확인"
        value={password2}
        onChange={handleInputChange2}
      />
      {isPasswordMismatch && (
        <span css={errorMessageStyle}>비밀번호가 일치하지 않습니다</span>
      )}
      <button type="submit" onClick={onNext} disabled={isButtonDisabled}>
        다음
      </button>
    </main>
  );
};

export default SignUpPw;
