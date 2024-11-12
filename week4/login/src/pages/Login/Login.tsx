/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { loginStyle } from "./Login.style";

const Login = () => {
  const navigate = useNavigate();

  return (
    <main css={loginStyle}>
      <h2>로그인</h2>

      <div>
        <input 
          type="text" 
          name="id" 
          placeholder="아이디" 
        />
        <input 
          type="text" 
          name="password" 
          placeholder="비밀번호" 
        />
        <button type="submit">로그인</button>
      </div>

      <p onClick={() => navigate('/signup')}>회원가입</p>
    </main>
  );
};

export default Login;