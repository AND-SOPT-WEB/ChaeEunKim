/** @jsxImportSource @emotion/react */
import { signupStyle } from "./Signup.style";

const Signup = () => {
  return (
    <main css={signupStyle}>
      <h2>회원가입</h2>
      <div>
        <p>이미 회원이신가요?</p>
        <p>로그인</p>
      </div>
    </main>
  )
}

export default Signup