import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginStyle } from "./Login.style";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response: any = await axios.post("http://211.188.53.75:8080/login", {
      username,
      password,
    });
    console.log(response);

    if (response.status === 200) {
      localStorage.setItem("token", response.data.result.token);
      navigate("/mypage");
    }
  };

  return (
    <main css={loginStyle}>
      <h2>로그인</h2>

      <div>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={login}>
          로그인
        </button>
      </div>

      <p onClick={() => navigate("/signup")}>회원가입</p>
    </main>
  );
};

export default Login;
