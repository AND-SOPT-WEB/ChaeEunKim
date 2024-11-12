/** @jsxImportSource @emotion/react */
import { signupStyle } from "./SignUp.style";

interface signuptype {
  onNext: () => {};
}

const SignUpPw: React.FC<signuptype> = ({ onNext }) => {
  return (
    <main css={signupStyle}>
      <h4>비밀번호</h4>
      <input
        type="text"
        name="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <input type="text" name="password2" placeholder="비밀번호 확인" />
      <button
        type="submit"
        onClick={onNext}
        // disabled
      >
        다음
      </button>
    </main>
  );
};

export default SignUpPw;
